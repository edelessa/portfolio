-- =====================================================
-- PORTFOLIO DATABASE SETUP WITH DETAILED EXPLANATIONS
-- =====================================================
-- This file contains the complete database setup for your portfolio
-- Copy and paste this entire file into Postico to set up your database
-- Database Name: portfolio_db

-- =====================================================
-- 1. DATABASE CREATION
-- =====================================================
-- What it does: Creates the main database for your portfolio
-- How you use it: This is your main database where all portfolio data lives
-- How the app uses it: Your backend connects to this database to store/retrieve data

-- DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

\c portfolio_db;

-- =====================================================
-- 2. PROJECTS TABLE
-- =====================================================
-- What it does: Stores all your portfolio projects
-- How you use it: Add your projects here with titles, descriptions, and links
-- How the app uses it: 
--   - Frontend: Displays projects on your Projects page
--   - Backend: API endpoints like GET /api/projects to fetch projects
--   - Example usage: When someone visits /projects, the app queries this table

-- DROP TABLE IF EXISTS public.projects;
CREATE TABLE IF NOT EXISTS public.projects
(
    project_id SERIAL PRIMARY KEY,                    -- Auto-incrementing unique ID
    title VARCHAR(255) NOT NULL,                      -- Project name (required)
    description TEXT,                                 -- Detailed project description
    image_url VARCHAR(255),                           -- Path to project image/thumbnail
    github_url VARCHAR(255),                          -- Link to GitHub repository
    live_url VARCHAR(255),                            -- Link to live demo
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,  -- When project was added
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP   -- When project was last modified
);

-- =====================================================
-- 3. TECHNOLOGIES TABLE
-- =====================================================
-- What it does: Stores all technology names (React, JavaScript, etc.)
-- How you use it: Pre-populated with common tech stack items
-- How the app uses it:
--   - Frontend: Shows technology tags on project cards
--   - Backend: Links projects to technologies via junction table
--   - Example: When filtering projects by "React", queries this table

-- DROP TABLE IF EXISTS public.technologies;
CREATE TABLE IF NOT EXISTS public.technologies
(
    tech_id SERIAL PRIMARY KEY,                      -- Auto-incrementing unique ID
    name VARCHAR(100) NOT NULL UNIQUE                 -- Technology name (React, JavaScript, etc.)
);

-- =====================================================
-- 4. PROJECT-TECHNOLOGIES JUNCTION TABLE
-- =====================================================
-- What it does: Links projects to technologies (many-to-many relationship)
-- How you use it: When adding a project, you specify which technologies it uses
-- How the app uses it:
--   - Frontend: Shows technology chips on each project card
--   - Backend: Joins projects with their technologies
--   - Example: "ArtVault" project uses ["React", "Zustand", "CSS3"]

-- DROP TABLE IF EXISTS public.project_technologies;
CREATE TABLE IF NOT EXISTS public.project_technologies
(
    project_id INTEGER NOT NULL,                     -- References projects.project_id
    tech_id INTEGER NOT NULL,                        -- References technologies.tech_id
    PRIMARY KEY (project_id, tech_id),               -- Composite primary key
    FOREIGN KEY (project_id) REFERENCES public.projects (project_id) ON DELETE CASCADE,      -- Delete project = delete all its tech links
    FOREIGN KEY (tech_id) REFERENCES public.technologies (tech_id) ON DELETE CASCADE         -- Delete tech = delete all its project links
);

-- =====================================================
-- 5. SKILLS TABLE
-- =====================================================
-- What it does: Stores your skills organized by category
-- How you use it: Add your skills like "JavaScript", "Problem Solving", etc.
-- How the app uses it:
--   - Frontend: Displays skills on About page or Home page
--   - Backend: API endpoint like GET /api/skills to fetch skills
--   - Example: Skills grouped as "Languages & Frameworks", "Soft Skills"

-- DROP TABLE IF EXISTS public.skills;
CREATE TABLE IF NOT EXISTS public.skills
(
    skill_id SERIAL PRIMARY KEY,                     -- Auto-incrementing unique ID
    name VARCHAR(100) NOT NULL UNIQUE,               -- Skill name (JavaScript, Problem Solving, etc.)
    category VARCHAR(100)                             -- Skill category (Languages & Frameworks, Soft Skills, etc.)
);

-- =====================================================
-- 6. CONTACT MESSAGES TABLE
-- =====================================================
-- What it does: Stores messages from your contact form
-- How you use it: View messages people send through your contact form
-- How the app uses it:
--   - Frontend: Contact form submits data here
--   - Backend: API endpoint POST /api/contact saves messages
--   - Example: Someone fills out contact form → message stored here

-- DROP TABLE IF EXISTS public.contact_messages;
CREATE TABLE IF NOT EXISTS public.contact_messages
(
    message_id SERIAL PRIMARY KEY,                   -- Auto-incrementing unique ID
    sender_name VARCHAR(255) NOT NULL,               -- Name of person who sent message
    sender_email VARCHAR(255) NOT NULL,              -- Email of person who sent message
    subject VARCHAR(255),                            -- Message subject line
    message TEXT NOT NULL,                           -- The actual message content
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP  -- When message was sent
);

-- =====================================================
-- 7. PERFORMANCE INDEXES
-- =====================================================
-- What it does: Creates indexes for faster database queries
-- How you use it: Automatically improves query performance
-- How the app uses it: Makes your app faster when loading projects, filtering, etc.

CREATE INDEX IF NOT EXISTS idx_projects_title ON public.projects (title);                    -- Fast project title searches
CREATE INDEX IF NOT EXISTS idx_technologies_name ON public.technologies (name);              -- Fast technology lookups
CREATE INDEX IF NOT EXISTS idx_project_technologies_project_id ON public.project_technologies (project_id);  -- Fast project-tech joins
CREATE INDEX IF NOT EXISTS idx_project_technologies_tech_id ON public.project_technologies (tech_id);        -- Fast tech-project joins
CREATE INDEX IF NOT EXISTS idx_skills_name ON public.skills (name);                         -- Fast skill searches
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages (sender_email);              -- Fast message lookups by email

-- =====================================================
-- 8. STORED PROCEDURE: ADD PROJECT WITH TECHNOLOGIES
-- =====================================================
-- What it does: Adds a project and automatically links it to technologies
-- How you use it: Call this procedure when adding new projects
-- How the app uses it:
--   - Backend: API endpoint POST /api/projects calls this procedure
--   - Frontend: When you add a project, it uses this to save everything
--   - Example: Add "New App" with technologies ["React", "Node.js"]

CREATE OR REPLACE PROCEDURE add_project_with_technologies(
    p_title VARCHAR,                                  -- Project title
    p_description TEXT,                               -- Project description
    p_image_url VARCHAR,                              -- Project image URL
    p_github_url VARCHAR,                             -- GitHub repository URL
    p_live_url VARCHAR,                               -- Live demo URL
    p_tech_names TEXT[]                              -- Array of technology names
)
LANGUAGE plpgsql
AS $$
DECLARE
    new_project_id INTEGER;                          -- Will store the new project's ID
    tech_name VARCHAR;                               -- Current technology name in loop
    current_tech_id INTEGER;                        -- Current technology's ID
BEGIN
    -- Insert the new project and get its ID
    INSERT INTO public.projects (title, description, image_url, github_url, live_url)
    VALUES (p_title, p_description, p_image_url, p_github_url, p_live_url)
    RETURNING project_id INTO new_project_id;

    -- Loop through each technology name
    FOREACH tech_name IN ARRAY p_tech_names
    LOOP
        -- Check if technology already exists
        SELECT tech_id INTO current_tech_id FROM public.technologies WHERE name = tech_name;
        
        -- If technology doesn't exist, create it
        IF current_tech_id IS NULL THEN
            INSERT INTO public.technologies (name) VALUES (tech_name) RETURNING tech_id INTO current_tech_id;
        END IF;
        
        -- Link the project to this technology
        INSERT INTO public.project_technologies (project_id, tech_id) VALUES (new_project_id, current_tech_id);
    END LOOP;
END;
$$;

-- =====================================================
-- 9. VIEW: PROJECTS WITH TECHNOLOGIES
-- =====================================================
-- What it does: Combines projects with their technologies in one query
-- How you use it: Query this view to get projects with all their tech tags
-- How the app uses it:
--   - Frontend: Projects page displays projects with technology chips
--   - Backend: Single query gets everything needed for project display
--   - Example: Returns project with technologies array: ["React", "CSS3", "JavaScript"]

CREATE OR REPLACE VIEW public.projects_with_technologies AS
SELECT
    p.project_id,                                    -- Project ID
    p.title,                                         -- Project title
    p.description,                                   -- Project description
    p.image_url,                                     -- Project image
    p.github_url,                                    -- GitHub link
    p.live_url,                                      -- Live demo link
    ARRAY_AGG(t.name ORDER BY t.name) AS technologies  -- Array of technology names
FROM
    public.projects p                                -- Start with projects table
LEFT JOIN
    public.project_technologies pt ON p.project_id = pt.project_id  -- Join to project-technologies
LEFT JOIN
    public.technologies t ON pt.tech_id = t.tech_id  -- Join to technologies
GROUP BY
    p.project_id, p.title, p.description, p.image_url, p.github_url, p.live_url  -- Group by project
ORDER BY
    p.created_at DESC;                               -- Most recent projects first

-- =====================================================
-- 10. SAMPLE DATA: TECHNOLOGIES
-- =====================================================
-- What it does: Pre-populates the technologies table with common tech stack items
-- How you use it: These technologies are available for linking to projects
-- How the app uses it: When creating projects, these technologies can be selected

INSERT INTO public.technologies (name) VALUES
('React'), ('Zustand'), ('HTML5'), ('CSS3'), ('JavaScript'), ('Animation'),
('Node.js'), ('Express'), ('MongoDB'), ('Python'), ('Django'), ('PostgreSQL'),
('REST API'), ('Vue.js'), ('Firebase'), ('Tailwind CSS'), ('Angular'),
('TypeScript'), ('GraphQL'), ('AWS')
ON CONFLICT (name) DO NOTHING;                       -- Don't insert duplicates

-- =====================================================
-- 11. SAMPLE DATA: PROJECTS
-- =====================================================
-- What it does: Adds sample projects to demonstrate the system
-- How you use it: These are example projects that show how the system works
-- How the app uses it: These projects appear on your Projects page

-- Sample Project 1: ArtVault Web App
CALL add_project_with_technologies(
    'ArtVault Web App',                              -- Project title
    'Developed a portfolio management tool for artists using React and Zustand, with a strong focus on responsive design and accessibility best practices. Prioritized intuitive navigation and ease of use, drawing on experience supporting diverse learners.',  -- Description
    '/project1.svg',                                 -- Image URL
    'https://github.com/yourusername/artvault',      -- GitHub URL
    'https://artvault.com',                          -- Live URL
    ARRAY['React', 'Zustand', 'HTML5', 'CSS3', 'JavaScript']  -- Technologies
);

-- Sample Project 2: Wrinkles Card Game
CALL add_project_with_technologies(
    'Wrinkles Card Game',                            -- Project title
    'Created and showcased animated UI transitions for a digital card game at the MinnieBar tech conference. Highlighted state management, user feedback loops, and smooth interactions for enhanced user engagement. Created front end and focused on UX.',  -- Description
    '/project2.svg',                                 -- Image URL
    'https://github.com/yourusername/wrinkles-game', -- GitHub URL
    'https://wrinkles-game.com',                     -- Live URL
    ARRAY['React', 'CSS3', 'JavaScript', 'Animation']  -- Technologies
);

-- =====================================================
-- 12. SAMPLE DATA: SKILLS
-- =====================================================
-- What it does: Adds sample skills organized by category
-- How you use it: These skills can be displayed on your About or Home page
-- How the app uses it: Skills are shown in organized categories

INSERT INTO public.skills (name, category) VALUES
-- Languages & Frameworks
('JavaScript', 'Languages & Frameworks'),
('React', 'Languages & Frameworks'),
('CSS3', 'Languages & Frameworks'),
('Zustand', 'Languages & Frameworks'),
-- Tools & Technologies
('Node.js', 'Tools & Technologies'),
('SQL', 'Tools & Technologies'),
('Git', 'Tools & Technologies'),
('Material-UI', 'Tools & Technologies'),
-- Core Competencies
('Problem Solving', 'Core Competencies'),
('Team Collaboration', 'Core Competencies'),
-- Soft Skills
('Communication', 'Soft Skills'),
('Adaptability', 'Soft Skills')
ON CONFLICT (name) DO NOTHING;                       -- Don't insert duplicates

-- =====================================================
-- REAL-WORLD USAGE EXAMPLES
-- =====================================================

-- Example 1: Get all projects with their technologies
-- SELECT * FROM projects_with_technologies;

-- Example 2: Get projects that use React
-- SELECT * FROM projects_with_technologies WHERE 'React' = ANY(technologies);

-- Example 3: Get all skills by category
-- SELECT category, ARRAY_AGG(name) as skills FROM skills GROUP BY category;

-- Example 4: Get recent contact messages
-- SELECT * FROM contact_messages ORDER BY sent_at DESC LIMIT 10;

-- Example 5: Add a new project
-- CALL add_project_with_technologies(
--     'My New Project',
--     'A description of my new project',
--     '/project3.svg',
--     'https://github.com/username/project',
--     'https://myproject.com',
--     ARRAY['React', 'Node.js', 'PostgreSQL']
-- );

-- =====================================================
-- DATABASE SETUP COMPLETE
-- =====================================================
-- Your portfolio database is now ready!
-- 
-- Key Features Enabled:
-- ✅ Project Management - Store and retrieve projects
-- ✅ Technology Tags - Link projects to technologies  
-- ✅ Contact Form - Store contact messages
-- ✅ Skills Database - Organize skills by category
-- ✅ Performance Optimized - Indexes for fast queries
-- ✅ Normalized Structure - Clean, efficient database design
--
-- Next Steps:
-- 1. Connect your backend to this database
-- 2. Create API endpoints to interact with the data
-- 3. Update your frontend to use the API instead of hardcoded data

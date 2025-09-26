# Portfolio Backend Database Setup

## Database Setup Instructions

### 1. Install PostgreSQL
- Download and install PostgreSQL from https://www.postgresql.org/download/
- Or use pgAdmin for a GUI interface

### 2. Create Database in pgAdmin
1. Open pgAdmin
2. Right-click on "Databases" → "Create" → "Database"
3. Name: `portfolio_db`
4. Click "Save"

### 3. Run SQL Script
1. In pgAdmin, right-click on `portfolio_db` → "Query Tool"
2. Copy and paste the contents of `sql/portfolio_database.sql`
3. Click "Execute" (F5)

### 4. Verify Setup
Run these queries to verify everything is working:

```sql
-- Check if tables were created
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Check sample data
SELECT * FROM skills;
SELECT * FROM projects;
SELECT * FROM featured_projects;
```

## Database Features Implemented

### 🗄️ **Database Design**
- **Normalized structure** with proper relationships
- **Junction tables** for many-to-many relationships
- **Indexes** for optimal query performance
- **Views** for common queries

### 📊 **Tables Created**
- `users` - User authentication (future feature)
- `projects` - Portfolio projects with metadata
- `skills` - Technical skills with proficiency levels
- `project_skills` - Many-to-many relationship
- `contact_messages` - Contact form submissions
- `blog_posts` - Blog functionality (future feature)

### 🔍 **Advanced Features**
- **Stored procedures** for common operations
- **Views** for complex queries
- **Indexes** for performance optimization
- **Foreign key constraints** for data integrity

## Talking Points for Interviews

### **Database Design Skills**
> "I designed a normalized database schema with proper relationships between projects and skills. I used junction tables to handle many-to-many relationships and created indexes for optimal query performance."

### **SQL Proficiency**
> "I wrote complex queries with JOINs, created views for common operations, and implemented stored procedures. The database supports features like skill categorization and project filtering."

### **Performance Optimization**
> "I added indexes on frequently queried columns and created views to simplify complex queries. The database is designed to handle growth with proper normalization."

### **Future-Ready Architecture**
> "The schema includes tables for user authentication, blog posts, and contact management, making it easy to add features like user accounts and content management."

## Sample Queries to Demonstrate

```sql
-- Get all projects with their skills
SELECT p.title, p.description, GROUP_CONCAT(s.name) as skills
FROM projects p
LEFT JOIN project_skills ps ON p.id = ps.project_id
LEFT JOIN skills s ON ps.skill_id = s.id
GROUP BY p.id;

-- Get skills by category with proficiency levels
SELECT category, COUNT(*) as skill_count,
       AVG(CASE proficiency_level 
           WHEN 'Beginner' THEN 1 
           WHEN 'Intermediate' THEN 2 
           WHEN 'Advanced' THEN 3 
           WHEN 'Expert' THEN 4 
       END) as avg_proficiency
FROM skills 
GROUP BY category;

-- Get contact messages by status
SELECT status, COUNT(*) as message_count
FROM contact_messages 
GROUP BY status;
```

# Backend Setup Instructions

## 1. Configure Database Connection

Edit `server/.env` and update your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your_actual_password_here
```

## 2. Set Up PostgreSQL Database

1. **Open Postico** and connect to your PostgreSQL server
2. **Copy and paste** the entire content of `backend/sql/portfolio_database_with_explanations.sql`
3. **Run the script** to create the database and tables

## 3. Start the Backend Server

In a new terminal window, run:

```bash
npm run server
```

This will start the backend server on port 5000.

## 4. Start the Frontend

In another terminal window, run:

```bash
npm run dev
```

This will start the frontend on port 5173.

## 5. Test the Connection

1. **Backend Health Check:** http://localhost:5000/api/health
2. **Frontend:** http://localhost:5173
3. **Test Contact Form:** Fill out the form and submit - it should save to your database!

## 6. View Submitted Messages

You can view submitted contact messages by querying your database:

```sql
SELECT * FROM contact_messages ORDER BY sent_at DESC;
```

## Troubleshooting

- **Database Connection Error:** Check your PostgreSQL credentials in `server/.env`
- **Port Already in Use:** Make sure port 5000 is available
- **CORS Issues:** The backend is configured to allow requests from the frontend

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills  
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

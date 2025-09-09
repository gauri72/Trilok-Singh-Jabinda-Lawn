# Trilok Singh Jabinda Lawn

Event Lawn Booking Website

## Tech Stack
- Frontend: HTML/CSS, JavaScript, React
- Backend: Python, Django, SQL (MySQL)

## Monorepo Structure

```
.
├── frontend/                     # React application (public + src)
├── backend/                      # Django project and apps
├── templates/                    # Shared HTML templates (optional)
├── static/                       # Shared static assets (optional)
├── db/                           # SQL scripts, dumps, backups
├── scripts/                      # Dev and deploy scripts
├── .env.example                  # Example environment variables
└── README.md
```

## Getting Started

- Frontend
  - Navigate to `frontend/`
  - Initialize your React app (Vite, CRA, or Next.js)
  - `npm install` and `npm run dev`

- Backend
  - Navigate to `backend/`
  - Create and activate a virtual environment
  - Install requirements: `pip install -r requirements.txt`
  - Configure database in `backend/config/settings/dev.py`
  - Run server: `python manage.py runserver`

## Environments
- `.env` at the repo root for shared variables
- App-specific env files can live under `frontend/` or `backend/` as needed

## Licensing
Proprietary. All rights reserved. 
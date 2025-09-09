#!/usr/bin/env bash
set -euo pipefail

# Frontend
if [ -d "../frontend" ]; then
  pushd ../frontend >/dev/null
  if [ ! -d node_modules ]; then
    npm install
  fi
  npm run dev &
  popd >/dev/null
fi

# Backend
if [ -d "../backend" ]; then
  pushd ../backend >/dev/null
  if [ ! -d .venv ]; then
    python3 -m venv .venv
  fi
  source .venv/bin/activate
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver &
  popd >/dev/null
fi

wait 
#!/bin/bash

# Start backend development server

echo "🐍 Starting FastAPI backend server..."

cd "$(dirname "$0")/../backend"

# Activate virtual environment
source ../venv/bin/activate

# Start the server
echo "📡 Backend starting at http://localhost:8000"
echo "📚 API documentation at http://localhost:8000/docs"
echo "Press Ctrl+C to stop"

python main.py

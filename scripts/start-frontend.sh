#!/bin/bash

# Start frontend development server

echo "⚛️  Starting React frontend server..."

cd "$(dirname "$0")/../frontend"

echo "🌐 Frontend starting at http://localhost:5173"
echo "Press Ctrl+C to stop"

npm run dev

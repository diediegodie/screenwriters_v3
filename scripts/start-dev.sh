#!/bin/bash

# Start both backend and frontend in development mode

echo "🚀 Starting Writer & Screenwriter Assistant development servers..."

# Function to handle cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping development servers..."
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set up signal handling
trap cleanup SIGINT SIGTERM

# Start backend in background
echo "🐍 Starting backend server..."
./scripts/start-backend.sh &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend in background
echo "⚛️  Starting frontend server..."
./scripts/start-frontend.sh &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting up..."
echo "🌐 Frontend: http://localhost:5173"
echo "📡 Backend:  http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for all background jobs
wait

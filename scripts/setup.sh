#!/bin/bash

# Writer & Screenwriter Assistant - Development Setup Script

echo "🚀 Setting up Writer & Screenwriter Assistant development environment..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "⚡ Activating virtual environment..."
source venv/bin/activate

# Install backend dependencies
echo "📚 Installing backend dependencies..."
cd backend
pip install -r requirements.txt

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env
    echo "Please edit backend/.env with your configuration"
fi

cd ..

# Install frontend dependencies
echo "🎨 Installing frontend dependencies..."
cd frontend
npm install

cd ..

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Edit backend/.env with your configuration"
echo "2. Start MongoDB (or use Docker: docker-compose up mongodb)"
echo "3. Run the development servers:"
echo "   Backend:  ./scripts/start-backend.sh"
echo "   Frontend: ./scripts/start-frontend.sh"
echo "   Or both:  ./scripts/start-dev.sh"
echo ""
echo "🌐 Application URLs:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:8000"
echo "   API Docs: http://localhost:8000/docs"

# Writer & Screenwriter Assistant

A modern, offline-first tool for writers, screenwriters, and content creators. Built with React + FastAPI, featuring an advanced text editor, chapter/scene organization, export capabilities, and future AI integrations.

## 🎯 Features

- **Project Management**: Create and organize multiple writing projects
- **Chapter & Scene Structure**: Hierarchical organization with drag-and-drop reordering
- **Advanced Text Editor**: Rich text editing with Slate.js, autosave, and version control
- **Offline-First**: Full offline support with IndexedDB and background sync
- **Export Options**: PDF, DOCX, Markdown, and Fountain format exports
- **Modern UI**: Responsive design with dark/light mode support
- **Upcoming**: AI integration for writing assistance and collaboration features

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **TailwindCSS** for styling and theming
- **Slate.js** for rich text editing
- **IndexedDB** (via Dexie) for offline storage
- **React Router** for navigation
- **Zustand** for state management

### Backend
- **FastAPI** for high-performance API
- **MongoDB** with Beanie ODM for data persistence
- **JWT** authentication with refresh tokens
- **Python libraries** for document export (python-docx, reportlab)

### DevOps
- **Docker** for containerization
- **GitHub Actions** for CI/CD
- **Pytest & Jest** for testing
- **Playwright** for E2E testing

## 📁 Project Structure

```
/writer-assistant/
├── /frontend/           # React + Vite frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── editor/      # Slate.js editor configuration
│   │   ├── storage/     # IndexedDB and offline logic
│   │   ├── api/         # API client and interceptors
│   │   └── utils/       # Helper functions
│   └── public/          # Static assets
├── /backend/            # FastAPI backend
│   ├── features/        # Feature modules (auth, projects, scenes)
│   ├── tests/           # Backend tests
│   ├── main.py          # FastAPI app entry point
│   └── config.py        # Configuration settings
├── /.docs/              # Documentation
└── docker-compose.yml   # Development environment
```

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 18+
- MongoDB (local or Atlas)

### Backend Setup

1. **Create and activate virtual environment:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\\Scripts\\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment configuration:**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Run the development server:**
   ```bash
   python main.py
   # Or: uvicorn main:app --reload
   ```

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest
```

### Frontend Tests
```bash
cd frontend
npm test              # Unit tests
npm run test:e2e      # E2E tests with Playwright
```

## 📝 Development Workflow

1. **Code Quality:**
   ```bash
   # Backend
   black .              # Code formatting
   isort .              # Import sorting
   
   # Frontend
   npm run lint         # ESLint
   npm run format       # Prettier
   ```

2. **Git Hooks:** Pre-commit hooks ensure code quality (configured in project setup)

## 🐳 Docker Development

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d
```

## 📚 Documentation

- [API Documentation](/.docs/API.md)
- [Project Planning](/.docs/PLANNING.md)
- [Development Tasks](/.docs/TASKS.md)

## 🗺️ Roadmap

- **Phase 1**: ✅ Project setup and architecture
- **Phase 2**: 🚧 Frontend components and editor
- **Phase 3**: 🚧 Backend API and authentication
- **Phase 4**: 📋 Offline sync implementation
- **Phase 5**: 📋 Export functionality
- **Phase 6**: 📋 Testing and deployment
- **Phase 7**: 📋 AI integration and advanced features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Slate.js](https://slatejs.org/) for the rich text editor
- [FastAPI](https://fastapi.tiangolo.com/) for the excellent backend framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first styling approach

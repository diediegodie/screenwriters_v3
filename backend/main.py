"""
Main FastAPI application entry point for Writer & Screenwriter Assistant.

This module sets up the FastAPI app with middleware, CORS, and route registration.
Following the project's modular architecture pattern.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
import logging

# TODO: Import route modules as they are created
# from features.auth.routers import auth_router
# from features.projects.routers import projects_router
# from features.scenes.routers import scenes_router

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI app instance
app = FastAPI(
    title="Writer & Screenwriter Assistant API",
    description="Backend API for managing writing projects, chapters, scenes, and exports",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Security middleware
app.add_middleware(TrustedHostMiddleware, allowed_hosts=["localhost", "127.0.0.1"])


@app.get("/")
async def root():
    """Root endpoint for health check."""
    return {
        "message": "Writer & Screenwriter Assistant API",
        "status": "running",
        "version": "1.0.0",
    }


@app.get("/health")
async def health_check():
    """Health check endpoint for monitoring."""
    return {"status": "healthy", "service": "writer-assistant-api"}


# TODO: Register feature routers as they are implemented
# app.include_router(auth_router, prefix="/api/auth", tags=["authentication"])
# app.include_router(projects_router, prefix="/api/projects", tags=["projects"])
# app.include_router(scenes_router, prefix="/api/scenes", tags=["scenes"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, log_level="info")

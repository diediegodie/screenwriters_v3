"""
Configuration settings for the Writer & Screenwriter Assistant backend.

Uses python-decouple for environment variable management.
All sensitive data should be stored in environment variables.
"""

from decouple import config
from typing import Optional


class Settings:
    """Application settings loaded from environment variables."""

    # Database configuration
    MONGODB_URL: str = config("MONGODB_URL", default="mongodb://localhost:27017")
    DATABASE_NAME: str = config("DATABASE_NAME", default="writer_assistant")

    # JWT and Security
    SECRET_KEY: str = config(
        "SECRET_KEY", default="your-secret-key-change-in-production"
    )
    ALGORITHM: str = config("ALGORITHM", default="HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = config(
        "ACCESS_TOKEN_EXPIRE_MINUTES", default=30, cast=int
    )
    REFRESH_TOKEN_EXPIRE_DAYS: int = config(
        "REFRESH_TOKEN_EXPIRE_DAYS", default=30, cast=int
    )

    # Application settings
    DEBUG: bool = config("DEBUG", default=True, cast=bool)
    ENVIRONMENT: str = config("ENVIRONMENT", default="development")

    # CORS settings
    ALLOWED_ORIGINS: list = config(
        "ALLOWED_ORIGINS",
        default="http://localhost:3000,http://localhost:5173",
        cast=lambda x: [item.strip() for item in x.split(",")],
    )

    # File upload settings
    MAX_FILE_SIZE: int = config("MAX_FILE_SIZE", default=10485760, cast=int)  # 10MB
    UPLOAD_FOLDER: str = config("UPLOAD_FOLDER", default="uploads")

    # Export settings
    EXPORT_FOLDER: str = config("EXPORT_FOLDER", default="exports")

    class Config:
        """Pydantic configuration."""

        case_sensitive = True


# Global settings instance
settings = Settings()

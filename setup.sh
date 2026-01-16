#!/bin/bash

# Setup script for candice-fu-portfolio-website
# This script installs all required dependencies

set -e  # Exit on error

echo "🚀 Setting up candice-fu-portfolio-website..."
echo ""

# Install React dependencies
echo "📦 Installing React dependencies..."
npm i react react-dom

# Install Tailwind CSS
echo "📦 Installing Tailwind CSS..."
npm i tailwindcss @tailwindcss/vite

# Install Material UI
echo "📦 Installing Material UI..."
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material

# Install React Router DOM
echo "📦 Installing React Router DOM..."
npm i react-router-dom

# Install Lottie React
echo "📦 Installing Lottie React..."
npm i lottie-react

# Install Vite and React plugin (dev dependencies)
echo "📦 Installing Vite and React plugin..."
npm i -D vite @vitejs/plugin-react

echo ""
echo "✅ Setup complete! All dependencies have been installed."


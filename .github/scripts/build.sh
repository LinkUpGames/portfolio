#!/usr/bin/bash

# Build the file from the specific runner
echo "Installing Project Dependencies"
echo "Vite ID: $VITE_CLIENT_ID"

# Install Dependencies
npm ci

npm run build

cp ./dist/index.html ./dist/404.html

#!/usr/bin/bash

# Build the file from the specific runner
echo "Installing Project Dependencies"

# Install Dependencies
npm ci

npm run build

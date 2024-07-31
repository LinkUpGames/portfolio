#!/usr/bin/bash

# Build the file from the specific runner
echo "Installing Project Dependencies"
echo "Build started by: ${{ github.event_name }}"

# Install Dependencies
npm ci

npm run build

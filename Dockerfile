# Use official Node.js LTS image
FROM node:lts-buster

# Install system-level dependencies
RUN apt-get update && \
  apt-get install -y ffmpeg imagemagick webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Create app directory and copy dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

# Copy all remaining source files
COPY . .

# Expose default port (not used but good practice)
EXPOSE 3000

# Start the bot
CMD ["npm", "start"]
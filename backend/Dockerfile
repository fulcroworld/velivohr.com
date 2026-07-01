# Use the official Node.js image as the base
FROM node:23.11.0-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Setting the production environment
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 5000

# Command to execute
CMD ["npm", "run", "start"]

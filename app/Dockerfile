# Base image
FROM node
# Set working directory
# WORKDIR ./

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Start the application
CMD ["npm", "start"]

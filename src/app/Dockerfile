# ----------------- Build Stage -----------------
FROM node:20 AS build

# Set working directory inside container
WORKDIR /app/src/app

# Copy package.json and package-lock.json
COPY src/app/package*.json ./

# Install dependencies
RUN npm install

# Copy Angular app code
COPY src/app ./

# Build Angular app for production
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from build stage
COPY --from=build /app/src/app/dist/my-new-app /usr/share/nginx/html

# Copy custom nginx configuration
COPY src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

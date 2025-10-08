# ----------------- Build Stage -----------------
FROM node:20 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json from src/app
COPY src/app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of Angular code
COPY src/app ./

# Build Angular app
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/dist/my-new-app /usr/share/nginx/html

# Copy nginx config
COPY src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

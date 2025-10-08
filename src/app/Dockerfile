# ----------------- Build Stage -----------------
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from Angular folder
COPY src/app/package*.json ./

# Install dependencies
RUN npm install

# Copy Angular app source
COPY src/app ./

# Build Angular app
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine

# Remove default Nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output
COPY --from=build /app/dist/my-new-app /usr/share/nginx/html

# Copy nginx config
COPY src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

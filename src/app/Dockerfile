# ----------------- Build Stage -----------------
FROM node:20 AS build
WORKDIR /app

# Copy package.json and package-lock.json from repo root
COPY package*.json ./  

# Install dependencies
RUN npm install

# Copy rest of the app (Angular files)
COPY src/app ./src/app

# Build Angular app for production
RUN npm run --prefix src/app build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy built Angular app from build stage
COPY --from=build /app/src/app/dist/my-new-app .

# Copy nginx config
COPY src/app/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

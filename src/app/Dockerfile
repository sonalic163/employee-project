# ----------------- Build Stage -----------------
FROM node:20 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build Angular app for production
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx static files
RUN rm -rf ./*

# Copy built Angular app from build stage
COPY --from=build /app/dist/<my-new-app> .

# Copy custom nginx config (optional, for routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]


# ----------------- Build Stage -----------------
FROM node:20 AS build
WORKDIR /app

# Copy package.json from parent folder (one level up)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project from parent folder
COPY . .

# Build Angular app for production
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy the build output from the previous stage
COPY --from=build /app/dist/* ./

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]


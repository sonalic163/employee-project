# ----------------- Build Stage -----------------
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json from Angular folder
COPY src/app/package*.json ./

# Install dependencies
RUN npm install

# Copy all Angular app files
COPY src/app ./

# Build Angular app for production
RUN npm run build --prod

# ----------------- Serve Stage -----------------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output
COPY --from=build /app/dist/my-new-app /usr/share/nginx/html

# Copy nginx config
COPY src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

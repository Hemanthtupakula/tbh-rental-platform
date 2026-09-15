# ==============================================================================
# TBH Rental Platform — Frontend Dockerfile
# Multi-Stage Build: Node 20 Alpine Builder -> Nginx Alpine Production Server
# ==============================================================================

# Stage 1: Build Frontend Assets
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build Vite production bundle
COPY . .

# Build argument for configurable public API Base URL (default is relative /api)
ARG VITE_API_BASE_URL=""
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ARG VITE_CLERK_PUBLISHABLE_KEY="pk_test_ZGVlcC16ZWJyYS02MTUxLmNsZXJrLmFjY291bnRzLmRldiQ"
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

RUN npm run build

# Stage 2: Serve with Hardened Nginx
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Clean default Nginx html
RUN rm -rf ./*

# Copy production build artifacts from builder
COPY --from=builder /app/dist ./

# Copy Nginx SPA & reverse proxy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Container Healthcheck
HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]

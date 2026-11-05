FROM node:24-bookworm-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

RUN npm install --global pnpm@10.34.9

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install all dependencies.
RUN pnpm install --frozen-lockfile

# Copy local code to the container image.
COPY . .

# Build the app
RUN pnpm build && chown -R node:node /usr/src/app

ENV NODE_ENV=production
USER node

# Run the web service on container startup.
CMD [ "pnpm", "start" ]

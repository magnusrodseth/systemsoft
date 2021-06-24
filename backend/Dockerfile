# Install dependencies only when needed
FROM node:14.17.1-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /backend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14.17.1-alpine AS builder
WORKDIR /backend
COPY . .
COPY --from=deps /backend/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:14.17.1-alpine AS runner
WORKDIR /backend

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001


# Copy Strapi specific folders and files
COPY --from=builder /backend/public ./public
COPY --from=builder /backend/favicon.ico ./favicon.ico
COPY --from=builder --chown=strapi:nodejs /backend/.cache ./.cache
COPY --from=builder --chown=strapi:nodejs /backend/api ./api
COPY --from=builder --chown=strapi:nodejs /backend/extensions ./extensions
COPY --from=builder --chown=strapi:nodejs /backend/components ./components
COPY --from=builder --chown=strapi:nodejs /backend/config ./config

COPY --from=builder /backend/node_modules ./node_modules
COPY --from=builder /backend/package.json ./package.json

USER strapi

EXPOSE 1337

CMD ["yarn", "start"]
FROM node:22-alpine AS deps
RUN corepack enable
WORKDIR /app
COPY src/package.json src/pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src ./
ENV NODE_ENV=production
RUN pnpm run build

FROM node:22-alpine AS runner
RUN apk add --no-cache nginx curl bash
RUN corepack enable
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

CMD ["pnpm start"]

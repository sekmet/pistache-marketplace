FROM node:16.15-alpine as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install 

FROM node:16.15-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npx hardhat compile
RUN npm run build

FROM node:16.15-alpine as runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/typechain ./typechain

EXPOSE 3000
CMD ["npm", "run",  "start"]
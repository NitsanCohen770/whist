FROM node:lts as dependencies
WORKDIR /whist
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /whist
COPY . .
COPY --from=dependencies /whist/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /whist
ENV NODE_ENV production
COPY --from=builder /whist/public ./public
COPY --from=builder /whist/.next ./.next
COPY --from=builder /whist/node_modules ./node_modules
COPY --from=builder /whist/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]


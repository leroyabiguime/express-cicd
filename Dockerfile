FROM node:16 as runner
WORKDIR /express-cicd
ENV NODE_ENV production
ARG COMMIT_ID
ENV COMMIT_ID=${COMMIT_ID}
COPY . .
RUN npm start --only=production
EXPOSE 3000
CMD ["node", "index.js"]
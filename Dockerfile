FROM node:18 as builder
WORKDIR /opt
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /opt/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
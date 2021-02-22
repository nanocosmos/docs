# stage1 - build app first 
FROM node:14-slim as build

WORKDIR /app
COPY . /app
ENV DOCS_ENV gitlab-develop
ENV PATH /app/website/node_modules/.bin:$PATH
WORKDIR /app/website
RUN npm i
#RUN npm run build
RUN npm run build-quick
WORKDIR /app
RUN bash build_searchindex
RUN ls -l .
#CMD [ "npm", "start"]

# stage 2 - build the final image and copy the react build files
FROM nginx:1.18
COPY --from=build /app/website/build /usr/share/nginx/html
RUN ls -l /usr/share/nginx/html /usr/share/nginx/html/docs
RUN rm /etc/nginx/conf.d/default.conf
COPY dockerfile-setup/nginx.conf /etc/nginx/conf.d
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]

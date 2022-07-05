# 一阶段的 node 镜像
FROM node:alpine as builder

WORKDIR /code

# 单独分离 package.json，为了安装依赖可最大化依赖缓存
# ADD package.json yarn.lock /code/

ADD . /code

RUN yarn && yarn vite build

# 二阶段的 nginx 镜像
FROM nginx:alpine

# 把一阶段中部署好的资源传入二阶段的部署目录
COPY --from=builder code/dist /usr/share/nginx/html
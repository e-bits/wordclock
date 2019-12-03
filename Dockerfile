FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY wc_* /usr/share/nginx/html/
COPY wc_langPacks /usr/share/nginx/html/wc_langPacks/
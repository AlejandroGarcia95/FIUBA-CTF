FROM busybox

ADD index1.html /www/index.html
EXPOSE 8000
CMD trap "exit 0;" TERM INT; httpd -p 8000 -h /www -f & wait

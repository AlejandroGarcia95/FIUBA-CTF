#!/bin/sh
while sleep 7; do 
  phantomjs --ignore-ssl-errors=true --local-to-remote-url-access=true --web-security=false --ssl-protocol=any xss-bot.js; 
done;

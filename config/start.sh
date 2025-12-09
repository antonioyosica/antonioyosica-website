#!/usr/bin/env bash
set -euo pipefail

export PORT=3000

pnpm start &

NEXT_PID=$!

# Start nginx in foreground (daemon off)
# nginx reads /etc/nginx/nginx.conf we copied
nginx -g "daemon off;" &

NGINX_PID=$!

# Wait for either process to exit
wait -n $NEXT_PID $NGINX_PID
exit $?

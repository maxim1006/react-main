#!/bin/sh

# динамическая генерация из переменных окружения в докере

echo "--- adopt envs for Kuber"

ROUTE_FILE="./public/route.js"

echo "--- generate route.js"
touch "$ROUTE_FILE"
echo "window.route = {" \
  "ENV1: '${ENV1}'," \
  "ENV2: '${ENV2}'," \
  "ENV3: '${ENV3}'," \
  "LOG_LEVEL: '${LOG_LEVEL}'," \
  "}" > "$ROUTE_FILE"


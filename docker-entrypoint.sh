#!/bin/sh

echo "Launching REST API for env: $NODE_ENV"

env NODE_ENV=production node app.js

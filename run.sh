#!/bin/bash

env=$1;
if [ $env != "production" ] && [ $env != "development" ];
then
    echo "$env is not a valid environment setting.";
    echo "Valid options:";
    echo "  - development";
    echo "  - production";
    exit 0;
fi

docker-compose down

if [ $env = "development" ];
then
    docker-compose -f docker-compose.dev.yml up -d --build
fi

if [ $env = "production" ];
then
    cd client && npm run build && cd ..
    docker-compose -f docker-compose.yml up -d --build
fi


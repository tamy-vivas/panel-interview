Prevent docker compose cached

$ docker compose build --no-cache
$ docker compose -f "docker-compose.yml" up -d --build 
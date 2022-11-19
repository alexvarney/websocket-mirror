FROM denoland/deno:latest

EXPOSE 8888

WORKDIR /app

ADD . /app

CMD ["run", "--allow-net", "main.ts"]

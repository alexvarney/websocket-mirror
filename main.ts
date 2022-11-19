import { Application, type Context } from "https://deno.land/x/oak/mod.ts";

const PORT = 8888;

const app = new Application();

app.use(async (ctx: Context) => {
  console.log(JSON.stringify(ctx));

  if (!ctx.request.hasBody) {
    ctx.throw(415);
  }

  const reqBody = await ctx.request.body().value;

  console.log(reqBody);

  ctx.response.body = reqBody;
});

console.log(`Starting server on port ${PORT}`);

await app.listen({ port: PORT });

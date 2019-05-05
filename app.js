const Koa = require("koa2");

const app = new Koa();

const PORT = process.env.PORT || 3000;
app.use((ctx)=>{
    ctx.body = "Hello World!\nthe path is "+ctx.url;
});

app.listen(PORT);


console.log("server listen at http://localhost:"+PORT );
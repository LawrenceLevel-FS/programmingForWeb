const { app, port, router } = require("./app/index");

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

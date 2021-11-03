const { app } = require("./server-side/routes/routes");

app.listen(8080, (req, res) => {
  console.log("The server is running on 8083");
});

// app.get("/index-page", (req, res) => {
//   res.render("index");
// });
// app.get("/selection-form", (req, res) => {
//   res.render("selection_form");
// });
// app.get("/cancel", (req, res) => {
//   res.render("index");
// });

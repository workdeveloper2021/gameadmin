const { authJwt } = require("../middlewares");
const controller = require("../controllers/event.controller");
const filecontroller = require("../controllers/file.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/file", filecontroller.upload);
  app.post("/api/events", controller.create);
  app.get("/api/events", controller.findAll);
  app.get("/api/events/:id", controller.findOne);
  app.put("/api/events/:id", controller.update);
  app.delete("/api/events/:id", controller.delete);
  app.delete("/api/events", controller.deleteAll);

};

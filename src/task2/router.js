const { Router } = require("express");
const controller = require("./controller");

const router = new Router();

router.route("/schedule").post(controller.schedule);

module.exports = router;

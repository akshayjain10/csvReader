// const { Router } = require("express");
// const controller = require("./controller");
// const upload = require("./middlewareUpload");
// const router = new Router();

// router.route("/").get((...args) => controller.find(...args));

//   module.exports = router;

const { Router } = require("express");
const controller = require("./controller");
const upload = require("./middlewareUpload");

const router = new Router();

router.route("/").get((...args) => controller.findOne(...args));
router.route("/byuser").get((...args) => controller.byuser(...args));
router.route("/upload").post(upload.single("file"), controller.upload);

module.exports = router;

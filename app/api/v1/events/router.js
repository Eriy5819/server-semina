const express = require("express");
const router = express();
const {create, destroy, find, index, update} = require("./controller");

router.get("/events", index);
router.get("/events/:id", find);
router.put("/events/:id", update);
router.delete("/events/:id", destroy);
router.post("/events", create);

module.exports = router;

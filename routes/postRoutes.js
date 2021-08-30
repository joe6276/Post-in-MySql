const express = require('express')
const postController= require("../controllers/postControllers")
const router=express.Router();

router.route("/").get(postController.getAllPost)
.post(postController.addPost)

router.route("/:id").get(postController.getPost)

module.exports=router;
var express = require('express');
var router = express.Router();
var postsController = require("../controllers/posts");
const handleErrorAsync = require("../service/handleErrorAsync");


router.get('/',postsController.getPosts);

router.post('/',handleErrorAsync(postsController.createPost));


module.exports = router;

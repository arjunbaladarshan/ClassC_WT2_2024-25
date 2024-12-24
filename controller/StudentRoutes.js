const express = require('express');

const router = express.Router();

testMiddleware = (req,res,next)=>{
    //middleware logic
}

router.use('/',testMiddleware)

router.get('/',(req,res)=>{
    res.send("Student All")
});

module.exports = router;
const express = require('express');
const UserModel=require('../userModule/modules.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post("/createUSer",async function(req,res){
    let data=req.body
    let saveData=await UserModel.create(data)
    res.send({
        msg:saveData
    })
})
module.exports = router;
// adding this comment for no reasoncd 
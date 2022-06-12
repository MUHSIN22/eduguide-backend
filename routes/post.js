const express = require('express')
const router = express();
const Post = require('../models/job');

router.post('/add',async (req,res) => {
    const {title,qualification,hyperLink,date,type} = req.body
    const post = new Post({
        title,
        qualification,
        hyperLink,
        date,
        type
    })

    try{
        const check = await post.save();
        console.log(check);
        res.send({status:"success",data:check})
    }catch(err){
        res.send({status:"error",data:err})
    }
})

router.get('/get/:type', async (req,res) => {
    const {type} = req.params
    let data = await Post.find({type: type})
    if(data){
        res.send({status:"success",message:"Find",data:data})
    }else{
        res.send({status:"error",message:"Not found",data})
    }
})

router.delete('/del/:id', async (req,res) => {
    const id = req.params.id
    let response =  await Post.deleteOne({_id: id})
    if(response){
        res.send({status: "success",message:"Deleted Successfully!"})
    }else{
        res.send({status: "error",message:"Something went wrong!!"})
    }
})

module.exports = router
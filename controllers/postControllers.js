
const Post = require('../models/Post')
exports.getAllPost= async(req,res,next)=>{
try {

    const [post,_] = await Post.findAll();
    res.status(200).json({count:post.length,post});
    
} catch (error) {

    console.log(error);
    next(error);
    
}
}
exports.addPost= async(req,res,next)=>{
    try {
        let{title,body}= req.body;
        let post= new Post(title, body)
        post= await post.save()
        console.log(post)
        res.status(201).json({Message: "Post created"});
        
    } catch (error) {
        console.log(error);
        next(error);
}
}
exports.getPost= async(req,res,next)=>{
    try {
        let postId= req.params.id;
        let[ post,_]= await Post.findById(postId)
            res.status(200).json({post: post[0]})

    } catch (error) {
        console.log(error);
        next(error);
    }
}




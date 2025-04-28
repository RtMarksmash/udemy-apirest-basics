exports.getPosts = (req, res, next) => {
    res.status(200).json({
        post: [{ title: 'first post', content: 'this is my first post' }]
    })

};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'post created sucessfully!!',
        post: { id: new Date(), title: title, content: content }
    })
};
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Create associations between different models such as User and Post, Post and Comment, and User and Comment
User.hasMany(Post, {
    foreignKey:'user_id'
});

Post.belongsTo(User, {
    foreignKey:'user_id'
});

User.hasMany(Comment, {
    foreignKey:'user_id'
});

Comment.belongsTo(User, {
    foreignKey:'user_id'
});

Post.hasMany(Comment, {
    foreignKey:'post_id',
    onDelete:'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete:'CASCADE'
});

module.exports = { User, Post, Comment };
const post = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    });

    Post.associate = models => {
        Post.belongsTo(models.User);
        //Post.hasMany(models.Comment);
        Post.hasMany(models.Tag);
    };

    return Post;
};

export default post;

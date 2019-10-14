const tag = (sequelize, DataTypes) => {
    const Tag = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
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

    Tag.associate = models => {
        Tag.belongsTo(models.Post);
    };

    return Tag;
};

export default tag;

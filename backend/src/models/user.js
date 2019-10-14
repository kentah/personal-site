const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
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

    // associate the user with the message db
    User.associate = models => {
        //User.hasMany(models.Message, { onDelete: 'CASCADE' });  // cascade delete on user delete
        User.hasMany(models.Post, { onDelete: 'CASCADE' });
    };

    User.findByLogin = async login => {
        let user = await User.findOne({
            where: { username: login },     /// find login by email`
        });

        if(!user) {
            user = await User.findOne({
                where: { email: login },
            });
        }

        return user;
    }

    return User;
};

export default user;

module.exports = (Sequelize, DataTypes) => {
    const Users = Sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: true
        },
        otpExpiry: {
            type: DataTypes.BIGINT, // Store as a timestamp (milliseconds)
            allowNull: true
        }
    }, {
        tableName: 'users',
        timestamps: true
    });
    return Users;
}
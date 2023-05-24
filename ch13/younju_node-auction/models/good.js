const Sequelize = require('sequelize');

class Good extends Sequelize.Model {
    static initate(sequelize) {
        Good.init({
            name: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'good',
            tableName: 'goods',
            charset: utf8,
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Good.belogsTo(db.User, { as: 'Owner' });
        db.Good.belogsTo(db.User, { as: 'Sold' });
        db.Good.hasMany(db.Auction);
    }
};


module.exports = Good;
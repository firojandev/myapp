module.exports = (sequelize, Sequelize) => {
    const Warehouse = sequelize.define("warehouses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });

    return Warehouse;
};
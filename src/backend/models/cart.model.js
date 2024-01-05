const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const User = require("./user.model.js");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    item_quantity: {
      type: DataTypes.STRING,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id"
      }
    }
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done).
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "cart",
    sequelize,
    modelName: "Cart",
  }
);

module.exports = Cart;

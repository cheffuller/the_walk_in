const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./index.js");
const Vendor = require("./vendor.model.js");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    pack_size: {
      type: DataTypes.STRING,
    },
    weight_value: {
      type: DataTypes.STRING,
    },
    weight_unit: {
      type: DataTypes.STRING,
    },
    nutrition_info: {
      type: DataTypes.STRING,
    },
    vendor_id: {
      type: DataTypes.UUID,
      references: {
        model: Vendor,
        key: "id",
      },
    },
  },
  {
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done).
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,

    // disable the modification of tablenames
    freezeTableName: true,

    tableName: "product",
    sequelize,
    modelName: "Product",
  }
);

module.exports = Product

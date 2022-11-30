const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return issue.init(sequelize, DataTypes);
}

class issue extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    supportId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'support',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'issue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "supportId",
        using: "BTREE",
        fields: [
          { name: "supportId" },
        ]
      },
    ]
  });
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = 'expressapp';
const username = 'root';
const password = 'thao2809';
exports.sequelize = new sequelize_1.Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});
exports.sequelize.authenticate();
//# sourceMappingURL=sequelize.js.map
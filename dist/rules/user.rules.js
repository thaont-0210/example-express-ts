"use strict";
// src/rules/user.rules.ts
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const check_1 = require("express-validator/check");
const user_1 = require("../models/user");
exports.userRules = {
    forRegister: [
        check_1.check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_1.User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
        check_1.check('password')
            .isLength({ min: 8 }).withMessage('Invalid password'),
        check_1.check('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Passwords are different')
    ],
    forLogin: [
        check_1.check('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_1.User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
        check_1.check('password')
            .custom((password, { req }) => {
            return user_1.User.findOne({ where: { email: req.body.email } })
                .then(u => bcrypt.compare(password, u.password));
        }).withMessage('Invalid email or password')
    ]
};
//# sourceMappingURL=user.rules.js.map
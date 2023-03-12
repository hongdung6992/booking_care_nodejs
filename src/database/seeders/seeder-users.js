"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                email: 'admin@gmail.com',
                password: '123123',
                firstName: 'Nguyen Hong',
                lastName: 'Dung',
                address: 'Da Nang',
                gender: 1,
                roleId: 'R1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {},
};

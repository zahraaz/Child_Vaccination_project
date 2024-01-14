const { EntitySchema } = require('typeorm');
const { Child } = require('./models/child')

module.exports = new EntitySchema({
    columns: {
      child_id: {
        type: Number,
        primary: true,
        generated: true,
      },
      first_name: {
        type: 'varchar',
        length: 20,
      },
      second_name: {
        type: 'varchar',
        length: 20,
      },
      third_name: {
        type: 'varchar',
        length: 20,
      },
      fourth_name: {
        type: 'varchar',
        length: 20,
      },
      family_name: {
        type: 'varchar',
        length: 20,
      },
      mother_name: {
        type: 'varchar',
        length: 20,
      },
      birth_date: {
        type: Date,
      },
      gender: {
        type: 'varchar',
        length: 10,
      },
      address_id: {
        type: 'int',
      },
      phone_number: {
        type: 'varchar',
        length: 20,
      },
      email: {
        type: 'varchar',
        length: 40,
      },
      password: {
        type: 'varchar',
        length: 20,
      },
      weight: {
        type: 'tinyint',
      },
      environment: {
        type: 'varchar',
        length: 20,
      },
      medical_center_id: {
        type: 'int',
      },
    },
    name: 'Child',
    target: Child,
  });
  
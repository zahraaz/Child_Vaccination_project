const { EntitySchema } = require('typeorm');
const { Vaccination } = require('./models/vaccination')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      vaccine_type: {
        type: 'varchar',
        length: 30,
      },
      vaccine_name: {
        type: 'varchar',
        length: 30,
      },
      vaccine_name_ar: {
        type: 'varchar',
        length: 30,
      },
      vaccine_date: {
        type: Date,
      },
      next_vaccine: {
        type: Date,
      },
      nurse_name: {
        type: 'varchar',
        length: 40,
      },
      child_age: {
        type: 'tinyint',
      },
    },
    name: 'Vaccination',
    target: Vaccination,
  });

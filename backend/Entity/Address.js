const { EntitySchema } = require('typeorm');
const { Address } = require('./models/address')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      city: {
        type: 'varchar',
        length: 20,
      },
      locality: {
        type: 'varchar',
        length: 20,
      },
      ally: {
        type: 'varchar',
        length: 20,
      },
      residence: {
        type: 'varchar',
        length: 20,
      },
    },
    name: 'Address',
    target: Address,
  });
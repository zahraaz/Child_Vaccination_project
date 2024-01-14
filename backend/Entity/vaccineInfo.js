const { EntitySchema } = require('typeorm');
const { VaccineInfo } = require('./models/vaccineInfo')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: 'varchar',
        length: 30,
      },
      package_number: {
        type: 'int',
      },
      expire: {
        type: Date,
      },
      produced_company: {
        type: 'varchar',
        length: 30,
      },
    },
    name: 'VaccineInfo',
    target: VaccineInfo,
  });
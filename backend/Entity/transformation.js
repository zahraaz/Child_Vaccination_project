const { EntitySchema } = require('typeorm');
const { Transformation } = require('./models/transformation')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      vaccine_name_ar: {
        type: 'varchar',
        length: 30,
      },
      dose_amount: {
        type: 'float',
      },
      dose_per_vial: {
        type:'float',
      },
      vaccine_name_en: {
        type: 'varchar',
        length: 30,
      },
      vaccine_product: {
        type: 'varchar',
        length: 30,
      },
    },
    name: 'Transformation',
    target: Transformation,
  });

const { EntitySchema } = require('typeorm');
const { MedicalCenter } = require('./models/medicalCenter')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: 'varchar',
        length: 20,
      },
    },
    name: 'medicalCenter',
    target: MedicalCenter
  });
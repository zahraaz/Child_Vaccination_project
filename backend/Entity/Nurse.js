const { EntitySchema } = require('typeorm');
const { Nurse } = require('./models/nurse')

module.exports = new EntitySchema({
    columns: {
      id: {
        type: Number,
        primary: true,
        generated: true,
      },
      name: {
        type: 'varchar',
        length: 40,
      },
      job_title: {
        type: 'varchar',
        length: 16,
      },
      role:{
        type:'tinyint',
        nullable: false,
      },
    },
    name: 'Nurse',
    target: Nurse,
  });

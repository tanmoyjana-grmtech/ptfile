/*
How to model a table?
https://sequelize.org/v5/manual/getting-started.html#modeling-a-table

id is string since we do not want it to be a auto incrementing integer.
*/

module.exports = (sequelize, Sequelize) => {
    const screensAssignedToPatient = sequelize.define("screensAssignedToPatients", {
      uuid: {
        type: Sequelize.STRING(64),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      screenUUID: {
        type: Sequelize.STRING(64)
      },
      patientUUID: {
        type: Sequelize.STRING(64)
      },
      notes: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      recordChangedByUUID: {
        type: Sequelize.STRING
      },
      recordChangedFromIPAddress: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    },{
      timestamps: false,
      freezeTableName: true
    });
  



    return screensAssignedToPatient;
  };
  
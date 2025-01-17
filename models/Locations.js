/* eslint-disable indent */
/* eslint-disable linebreak-style */
export default (sequelize, DataTypes) => {
    const Locations = sequelize.define(
        'locations',
        {
            sub_region_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            sub_region: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, 
        { freezeTableName: true, timestamps: false }
    );
    return Locations;
}
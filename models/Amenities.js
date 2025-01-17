export default (sequelize, DataTypes) => {
    const Amenities = sequelize.define(
        'amenities',
        {
            amenities_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            amenities_name: {
                type: DataTypes.STRING,
                allowNull: false,
            }  
        },
        { freezeTableName: true, timestamps: false }
    );
    return Amenities;
}
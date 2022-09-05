module.exports = (sequelize, DataTypes) => {
    const Associado = sequelize.define(
      'Associado',
      {
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        placa: DataTypes.STRING,
        endereco: DataTypes.STRING,
        telefone: DataTypes.STRING,
      },
      {
        timestamps: false,
      },
    );
    return Associado;
  };

const Associado = (sequelize, DataTypes) => {
    const Associado = sequelize.define(
      'Associado',
      {
        nome: DataTypes.STRING,
        CPF: DataTypes.STRING,
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
  
  module.exports = Associado;
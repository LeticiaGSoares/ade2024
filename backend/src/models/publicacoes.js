import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Sua conexão com o banco de dados

const Publicacao = sequelize.define('publicacoes', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  restaurante: {
    type: DataTypes.STRING,
    allowNull: false
  },
    endereco : {
      type: DataTypes.STRING,
      allowNull: false
  }
},
{
    tablename: 'publicacoes',
    timestamps: false
}
);

export default Publicacao;
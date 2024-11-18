import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Sua conexão com o banco de dados

const Comentario = sequelize.define('comentarios', {
    id_publicacao: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'publicacoes',
            key: 'id'
        }
    },
    id_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'usuarios',
          key: 'id'
      }
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: false
    }
},
{
    tablename: 'comentarios',
    timestamps: false
}
);

export default Comentario;
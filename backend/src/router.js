import { Router } from "express"
import Usuario from "./models/usuario.js";
import Publicacao from "./models/publicacoes.js";
import Feedback from "./models/feedbacks.js";
import Comentario from "./models/comentarios.js";

import jwt from 'jsonwebtoken'

const syncTables = async () => {
  Usuario.belongsToMany(Publicacao, {
    through: Feedback,
    foreignKey: 'id_usuario',
    others: 'id_publicacao'
  })
  Publicacao.belongsToMany(Usuario, {
    through: Feedback,
    foreignKey: 'id_publicacao',
    others: 'id_usuario'
  })
  Usuario.belongsToMany(Publicacao, {
    through: Comentario,
    foreignKey: 'id_usuario',
    others: 'id_publicacao'
  })
  Publicacao.belongsToMany(Usuario, {
    through: Comentario,
    foreignKey: 'id_publicacao',
    others: 'id_usuario'
  })

  await Usuario.sync()
  await Publicacao.sync()
  await Feedback.sync()
  await Comentario.sync()
}

syncTables()

const router = Router()


const jwtPass = 'secretPassword'

router.post('/login', async (req, res) => {
  const {email, senha} = req.body

  try {
    const isUserValid = await Usuario.findOne({where: {email: email, senha: senha}})

    if(!isUserValid) 
      res.status(401).json({error: "Email ou senha incorretos"})
    else{
      const token = jwt.sign({email}, jwtPass, {expiresIn: '1h'})
      res.status(200).json(token)

    }
    

  } catch (err) {
    console.error({error: err})
    res.status(500).json({error: err})
  }
})
router.post('/u', async (req, res) => {
  const {email} = req.body

  try {
    const user = await Usuario.findOne({where: {
        email: email
    }})
    
    const likes = await Feedback.count({
        where: {
          isLike: true
        }
      });
    const dislikes = await Feedback.count({
        where: {
          isLike: false
        }
      });

    

    res.status(200).json({user,  likes, dislikes})

  } catch (err) {
    console.error({error: err})
    res.status(500).json({error: err})
  }
})
router.post('/feedback', async (req, res) => {
  const {id_usuario, isLike, id_publicacao} = req.body

  try {
    const newLike = await Feedback.create({id_usuario, isLike, id_publicacao})

    res.status(200).json({message: "Post com novo feedback!"})

  } catch (err) {
    console.err({error: err})
    res.status(500).json({error: err})
  }
})
router.get('/getPosts', async (req, res) => {

  try {
    const publicacoes = await Publicacao.findAll()
    res.status(200).json(publicacoes)

  } catch (err) {
    console.err({error: err})
    res.status(500).json({error: err})
  }
})

export default router
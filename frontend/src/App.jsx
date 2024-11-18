import axios from 'axios'
import {useState, useEffect} from 'react'
import {
    PrimaryBtn, SecondaryBtn,
    Modal, ModalContent, Form,
    PageContent, BigContainer, SmallContainer,
    UserPic, Wrapper, Post, PostPic,
    Interactions, Details, Footer, SocialMedia

} from './assets/styles/style'
import Icones from './assets/Icones/index'
const baseUrl = 'http://localhost:3333'

const App = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    const [username, setUsername] = useState('Faça o Login')
    const [userLikes, setUserLikes] = useState(0)
    const [userDislikes, setUserDislikes] = useState(0)

    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${baseUrl}/getPosts`)
            setPosts(res.data)
            setLoading(false)
        }
        
        fetchPosts()
    }, [])

    const LoginModal = () => {
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [errors, setErrors] = useState({})

        const handleSubmit = async (e) => {
            e.preventDefault()

            const newErrors = {}
            if(!email) newErrors.email = true
            if(!senha) newErrors.senha = true

            setErrors(newErrors)

            if(Object.keys(errors).length === 0) {
                const login = await axios.post(`${baseUrl}/login`, {email, senha})
                
                localStorage.setItem('token', login.data)
                setIsLoginOpen(false)
                setIsLogged(true)

                const usuario = await axios.post(`${baseUrl}/u`, {email})
                setUsername(usuario.data.user.nome)
                setUserLikes(usuario.data.likes)
                setUserDislikes(usuario.data.dislikes)
            }

        }

        return (
            <Modal>
                <ModalContent>
                    <h4>Login</h4>
                    <Form onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />                        
                        <input 
                            type="password" 
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <Wrapper>
                            <SecondaryBtn onClick={() => {setIsLoginOpen(false)}}>
                                Cancelar
                            </SecondaryBtn>
                            <PrimaryBtn type='submit'>
                                Entrar
                            </PrimaryBtn>
                        </Wrapper>
                    </Form>
                </ModalContent>
            </Modal>
        )
    }
    const LogOut = () => {
        localStorage.removeItem('token')
        setUsername('Faça o Login')
        setUserLikes(0)
        setUserDislikes(0)
        setIsLogged(false)
        
    }
    const Publicacao = () => {
        const [isLiked, setIsLiked] = useState(false)
        const [isDisliked, setIsDisliked] = useState(false)

        return (
            <Post>
                <h3>Titulo</h3>
                <PostPic/>
                <Details>
                    <p>Local</p>
                    <p>Maceió-AL</p>
                </Details>
                <Details>
                    <div>
                        <img 
                            src={
                                !isLiked ? Icones.upVote : Icones.upVoteRed
                            }
                            onClick={() => {
                                if(!isLogged) setIsLoginOpen(true)
                                else{
                                    setIsLiked(!isLiked)
                                    setIsDisliked(false)
                                }
                                }
                            }
                        
                        />
                        <p>2</p>
                        <img src={
                            !isDisliked ? Icones.downVote : Icones.downVoteRed
                        }
                        onClick={() => {
                            if(!isLogged) setIsLoginOpen(true)
                            else {
                                setIsDisliked(!isDisliked)
                                setIsLiked(false)
                            }
                        }}
                        />
                        <p>1</p>
                    </div>
                    <div>
                        <img 
                            onClick={() => {
                                if(!isLogged) setIsLoginOpen(true)
                                else{
                                    console.log('Comentário aberto')
                                }
                            }}
                            src={Icones.chat}/>
                        <p>10</p>
                    </div>
                </Details>
            </Post>
        )
    }

    return (
        <>
            {
                isLoginOpen && <LoginModal/>
            }
            <PageContent>
                <SmallContainer>
                    <UserPic />
                    <h2>{username}</h2>
                    <Wrapper>
                        <div>
                            <h3>{userLikes}</h3>
                            <p>Quantidade Likes</p>
                        </div>
                        <div>
                            <h3>{userDislikes}</h3>
                            <p>Quantidade Dislikes</p>
                        </div>
                    </Wrapper>
                </SmallContainer>
                <BigContainer>
                    <h2>Publicações</h2>
                    
                        <Publicacao />
                        <Publicacao />
                        <Publicacao />
                    
                </BigContainer>
                <SmallContainer>
                    <PrimaryBtn onClick={
                        !isLogged ? (
                            () => setIsLoginOpen(true)
                        ) : (
                            () => LogOut()
                        )

                        }>
                        {
                            !isLogged ? "Entrar" : "Sair"
                        }
                    </PrimaryBtn>
                </SmallContainer>
            </PageContent>
            <Footer>
                <h3><strong>Restaurante Bom</strong></h3>
                <SocialMedia>
                    <a href="#a"><img src={Icones.Instagram}/></a>
                    <a href="#a"><img src={Icones.Twitter}/></a>
                    <a href="#a"><img src={Icones.Whatsapp}/></a>
                    <a href="#a"><img src={Icones.Globe}/></a>
                </SocialMedia>
                <h4>Copyright - 2024</h4>
            </Footer>
        </>
    )
}

export default App
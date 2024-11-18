import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

export const PrimaryBtn = styled(Button)`
    background-color: black;
    border-color:black;
    `
    export const SecondaryBtn = styled(Button)`
    background-color: transparent;
    border-color:black;
    color: black;

`
export const PageContent = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 500px) 1fr;
    min-height: 100vh;
    padding-bottom: 20px;
`
export const SmallContainer = styled.div`
    padding: 30px;
    display:flex;
    align-items:center;
    text-align: center;
    flex-direction: column;
    gap: 10px;

    h2{
    border-bottom: 2px solid black;]
    }
    
    *{
    width: 100%;}
`
export const BigContainer = styled.div`
    text-align: center;

    h2 {
    border: 1px solid black;
    border-width: 0 1px;
    margin: 0;
    padding: 10px 0;}
`
export const UserPic = styled.img`
    background-color: grey;
    height: 130px;
    width: 130px;
    border-radius: 100%;
`
export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap: 10px;
    
    div {
    width: 45%;
    text-align: center;}
`
export const Post = styled.div`
    border: 1px solid black;
    padding: 10px;
    text-align: start;
    display:flex;
    flex-direction: column;
    gap: 10px;

    *{
    font-weight: 700;}

    div{
    display:flex}
`
export const PostPic = styled.img`
    background-color: grey;
    height: 250px;
    width: 100%;
    border-radius: 15px;
`
export const Details = styled.div`
    justify-content: space-between;
    align-items: center;
    height: 40px;

    *{
    font-size: 20px;}

    div{
    display:flex;
    gap: 10px;}

    img{
        height: 30px;
        width: 30px;
    }
`
export const Interactions = styled.div`
    display:flex; 

`


export const Footer = styled.footer`
    padding: 50px 70px;
    background-color: black;
    display:flex;
    align-items:center;
    justify-content: space-between;

    *{color: white;}
`
export const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    *{
    height: 30px;}
`
export const ModalContent = styled.div`
    background-color: white;
    height: 300px;
    width: 500px;
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const Modal = styled.div`
    background-color: rgba(0,0,0, .5);
    overflow: auto;
    height: 100%;
    width: 100%;
    position: fixed;
    display:flex;
    align-items:center;
    justify-content: center;
`
export const Form = styled.form`
    width: 80%;
    display:flex;
    flex-direction:column;
    gap: 20px;
    align-items: center;

    *{
    width: 100%;
    }

    input{
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black}
`
import './App.css';
import styled from 'styled-components';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/section/main/Main";
import {Skills} from "./assets/layout/section/skills/Skills";
import {Works} from "./assets/layout/section/works/Works";
import {Testimony} from "./assets/layout/section/testimony/Testimony";
import {Contacts} from "./assets/layout/section/contacts/Contacts";
import {Slogan} from "./assets/layout/section/slogan/Slogan";
import {Footer} from "./assets/layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
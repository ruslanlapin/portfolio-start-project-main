import './App.css';
import styled from 'styled-components';
import {Header} from "./assets/layout/header/Header";
import {Main} from "./assets/layout/section/main/Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
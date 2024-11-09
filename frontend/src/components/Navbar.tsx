import styled from "styled-components";
import {Link} from "react-router-dom";


export default function Navbar(){


    return (
        <StyledContainer>
        <h1>ToDo App</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/mainpage"}>Todos</Link>
            <Link to={"/about"}>About</Link>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    text-align: center;
    margin: 0;
    padding: 5px;
    background-color:#2de2e6;
    box-shadow: 10px 10px 50px rgba(0,0,0,0.3);

    a {
        margin: 0 15px;
        text-decoration: none;
        color: #3498db;
        font-weight: bold;

        &:hover {
            color: #101010;
        }
    }
`;

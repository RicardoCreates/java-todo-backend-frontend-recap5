import {Link} from "react-router-dom";
import styled from "styled-components";

export default function HomePage(){
    return (
        <StyledDiv>
        <StyledContainer>
            <h1>Willkommen zu deiner persönlichen ToDo App </h1>
            <div>
                <StyledLink to="/mainpage">Inhalt ▶︎</StyledLink>
            </div>
        </StyledContainer>
        </StyledDiv>
    )
}

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #001e1d;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`

const StyledDiv = styled.div`
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 200px auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`
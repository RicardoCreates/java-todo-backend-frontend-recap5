import {Link} from "react-router-dom";
import styled from "styled-components";

export default function HomePage(){
    return (
        <StyledContainer>
            <h1>Willkommen zu deiner persönlichen ToDo App </h1>
            <div>
                <StyledLink to="/mainpage">Inhalt</StyledLink>
            </div>
        </StyledContainer>
    )
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #001e1d;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`
import styled from "styled-components";

export default function About() {
    return (
        <StyledDiv>
            <h1>This is the About Page</h1>
            <p>This is a App to organize you Todos</p>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
    text-align: center;
    padding: 20px;
    max-width: 800px;
    margin: 80px auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`
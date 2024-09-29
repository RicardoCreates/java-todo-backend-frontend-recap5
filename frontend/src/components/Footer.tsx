import styled from 'styled-components';



export default function Footer(){
    return (
        <>
            <FooterStyled>
                &copy; 2024 ToDo App.
            </FooterStyled>
        </>
    )
}


const FooterStyled = styled.div`
    background-color: #ffffff;
    color: black;
    text-align: center;
    padding: 1em;
    position: fixed;
    width: 100%;
    bottom: 0;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
`;
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
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 1em;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
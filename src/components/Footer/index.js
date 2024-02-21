import styled from "styled-components";


const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #002F52;
    color: #fff;
`

function Footer(){
    return (
        <FooterContainer>
            <p>© 2021</p>
        </FooterContainer>
    );
}

export default Footer;
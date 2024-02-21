import Logo from '../Logo/index.js';
import Options from '../OptionsHeader/index.js';
import Icons from '../IconsHeader/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <Options/>
            <Icons/>       
        </HeaderContainer>
    )
}

export default Header;
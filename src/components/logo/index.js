import logo from '../../images/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px; 
`
const LogoImg = styled.img`
    margin-right: 10px; 
`


function Logo(){
    return(
        <Link to={`/`}>
            <LogoContainer>
                <LogoImg 
                    src={logo} 
                    alt='logo' 
                    className='img-logo'>
                </LogoImg>
                <p><strong>Mundi</strong>Books</p>
            </LogoContainer>
        </Link>
    )
}

export default Logo;

import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';

const IconContainer = styled.li`
    margin-right: 40px;
    width: 25px;
    list-style: none;
    display: flex;
`

const IconHeader = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [profile, bag];

function Icons(){
    return(
        <div>
            <IconContainer>
            {
                icons.map((icon) => (
                    <IconHeader><img src={icon} alt={icon} /></IconHeader>
                ))
            }
            </IconContainer>
        </div>
    )
}

export default Icons;
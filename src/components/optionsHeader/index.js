import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainer = styled.ul`
    display: flex;
`
const OptionContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`


const textOptions = ['Categorias', 'Favoritos', 'Minha estante'];

function Options(){
    return (
        <div>
            <OptionsContainer>
            {
                textOptions.map((text) => (
                    <Link to={`/${text.toLowerCase()}`}><OptionContainer><p>{text}</p></OptionContainer></Link>
                ))
            }
            </OptionsContainer>
        </div>
    )
}

export default Options;

import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import './style.css'

const icons = [profile, bag];
function Icons(){
    return(
        <div>
            <ul className='icons'>
            {
                icons.map((icon) => (
                    <li className='icon'>
                        <img src={icon} alt={icon} />
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Icons;
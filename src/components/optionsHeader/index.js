import './style.css'

const textOptions = ['Categorias', 'Favoritos', 'Minha estante'];

function Options(){
    return (
        <div>
            <ul className='options'>
            {
                textOptions.map((text) => (
                <li className='option'><p>{text}</p></li>
                ))
            }
            </ul>
        </div>
    )
}

export default Options;
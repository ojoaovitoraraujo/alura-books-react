import Logo from '../logo/index.js';
import Options from '../optionsHeader/index.js';
import Icons from '../iconsHeader/index.js';
import './style.css'

function Header(){
    return(
        <header className="App-header">
            <Logo/>
            <Options/>
            <Icons/>       
        </header>
    )
}

export default Header;
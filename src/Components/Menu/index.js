import { AiOutlineFileSearch, AiOutlineFilePdf, AiOutlineFileSync } from 'react-icons/ai'

import "./style.css"
import logo from './icon.png'

function Menu() {
    return (
        <>
            <nav>
                <figure>
                    <img src={logo}/>
                </figure>
                <ul>
                    <li><AiOutlineFileSearch /> &nbsp; Análise</li>
                    <li><AiOutlineFilePdf /> &nbsp; Análise PDF</li>
                    <li><AiOutlineFileSync /> &nbsp; Pesquisar</li>
                </ul>
            </nav>

        </>

    )
}

export default Menu;
import { AiOutlineFileSearch, AiOutlineFilePdf, AiOutlineFileSync } from 'react-icons/ai'

import "./style.css"
import logo from './icon.png'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <nav>
                <figure>
                    <img src={logo} />
                </figure>
                <ul>
                    <Link to="/analise" className='link'><li><AiOutlineFileSearch /> &nbsp; Análise</li></Link>
                    <Link to="/pdf" className='link'><li><AiOutlineFilePdf /> &nbsp; Análise PDF</li></Link>
                    <Link to="/search" className='link'><li><AiOutlineFileSync /> &nbsp; Pesquisar</li></Link>
                </ul>
            </nav>

        </>

    )
}

export default Menu;
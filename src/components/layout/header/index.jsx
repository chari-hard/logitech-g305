import './style.css';
import logoMain from "../../../../src/assets/images/logitech-logo.png"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Header = () => {
    return (
        <header>
            <Link to = "/">
                <img src={logoMain} alt="logo da logitech" />
            </Link>

            <nav className='navegacao-header'>
                <ul>
                    <li>
                <HashLink smooth to="/#beneficios">Benefícios</HashLink>
                    </li>
                    <li>
                <HashLink to="/#showcase">Showcase</HashLink>
                    </li>
                    <li>
                <HashLink to="/#especificacoes">Especificações</HashLink>
                    </li>
                </ul>
            </nav>

            <div className='botao-de-comprar-header'>
                <Link to="/">
                    <button className='btn-primary'>Comprar</button>
                </Link>
            </div>

        </header>
    )
}
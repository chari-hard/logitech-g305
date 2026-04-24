import './style.css'
import { Link } from 'react-router-dom';
import logoMain from "../../../../src/assets/images/logitech-logo.png"
import { HashLink } from 'react-router-hash-link';


export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className='footer-top'>
                    <img src={logoMain} alt="logo logitech" loading='lazy' />

                    <div className='footer-indice'>
                        <div className='links-footer'>
                            <h3>Links:</h3>
                            <nav>
                                <ul>
                                    <li>
                                    <HashLink to="/#">Hero</HashLink>
                                    </li>
                                    <li>
                                    <HashLink to="/#beneficios">Benefícios</HashLink>
                                    </li>
                                    <li>
                                    <HashLink to="/#showcase">Showcase</HashLink>
                                    </li>
                                    <li>
                                    <HashLink to="/#especificacoes">Especificações</HashLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className='contato-footer'>
                            <h3>Contato / Atendimento</h3>
                            <p>(11) 2391-4999</p>
                            <p>contato@logitechstore.com.br</p>
                        </div>

                        <div className='suporte-footer'>
                            <h3>Suporte e Garantia</h3>
                            <p>11 3230-3580</p>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <p>© 2026 logitech. Todos os direitos reservados.</p>
                    <p>Política de privacidade: <Link to="/"><span>Termos de uso</span></Link></p>
                </div>
            </div>
        </footer>
    )
}
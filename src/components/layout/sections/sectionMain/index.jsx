import './style.css'
import mouseHero from "../../../../assets/images/mouse-icon-hero.png"
import pena from "../../../../assets/images/pena-icon.svg"
import planta from "../../../../assets/images/plant-icon.svg"
import raio from "../../../../assets/images/raio-icon.svg"
import { Link } from "react-router-dom"
import { motion } from 'motion/react'

export const SectionMain = () => {
    return (
        <section className="section-main">
            <div className='hero-box-maior'>
                <div className='hero-box-menor'>
                    <div className='hero-box-texto'>

                        <div className='titulo-hero'>
                            <h1>Logitech G305 LIGHTSPEED</h1>
                            <h2>Mouse Gamer Sem Fio</h2>
                        </div>

                        <div className='descricao-hero'>
                            <motion.div
                                className='elemento-hero'
                                initial={{ opacity: 0, x: -100, }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", }}
                                viewport={{ once: true, amount: 0.3 }}>
                                <img src={planta} alt="pequeno icon de planta" />
                                <h3>Conforto <span>ergonômico</span></h3>
                            </motion.div>
                            <motion.div
                                className='elemento-hero'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}>
                                <img src={raio} alt="pequeno icon de raio" />
                                <h3>Bateria <span>longa</span></h3>
                            </motion.div>
                            <motion.div
                                className='elemento-hero'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}>
                                <img src={pena} alt="pequeno icon de pena" />
                                <h3>Design <span>leve</span></h3>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut"}}
                        viewport={{ once: true, amount: 0.3 }}>
                        <img src={mouseHero} alt="icone mouse gigante" />
                    </motion.div>
                </div>

                <a href="https://www.logitechstore.com.br/mouse-sem-fio-para-jogos-logitech-g305-lightspeed/" target='blank'>
                    <button className='btn-primary'>Comprar agora</button>
                </a>
        </div>
        </section>
    )
}
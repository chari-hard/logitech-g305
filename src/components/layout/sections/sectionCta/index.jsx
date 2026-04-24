import './style.css'
import ImagemCTA from '../../../../assets/images/cta-image.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const SectionCTA = () => {
    return (
        <section className='section-cta'>
            <div className='cta-content'>
                <img src={ImagemCTA} alt="" />

                <div className='cta-text'>
                    <motion.div
                        className='elemento-hero'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 1 }}>
                        <h2>Eleve seu <span>nível</span></h2>
                    </motion.div>
                    <motion.div
                        className='elemento-hero'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: false, amount: 1 }}>
                        <p>Tenha precisão e velocidade com o mouseG305 LIGHTSPEED</p>
                    </motion.div>
                </div>
                <motion.div
                    className='elemento-hero'
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                    viewport={{ once: false, amount: 1 }}>
                    <Link to="/">
                        <button className='btn-primary'>Comprar agora</button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
import './style.css'
import ImagemSpecs from '../../../../assets/images/specs-img.png'
import { motion } from 'motion/react'

export const SectionSpecs = () => {
    return (
        <section className='section-specs'>
            <div className='specs-content'>
                <motion.div
                    className='elemento-hero'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut"}}
                    viewport={{ once: false, amount: 0.3 }}>
                <img src={ImagemSpecs} alt="" />
                </motion.div>

                <div className='specs-details' id='especificacoes'>
                    <h2>Especificações</h2>

                    <ul>
                        <li><span>Sensor:</span> HERO (Óptico).</li>

                        <li><span>Resolução:</span> 200 – 12.000 DPI (ajustável via Logitech G HUB).</li>

                        <li><span>Taxa de Transmissão:</span> 1.000 Hz (1 ms).</li>

                        <li><span>Conectividade:</span> Sem fio LIGHTSPEED (Radiofrequência).</li>

                        <li><span>Peso:</span> 99 gramas.</li>

                        <li><span>Botões:</span> 6 botões programáveis.</li>

                        <li><span>Bateria:</span> 1 pilha AA (inclusa).</li>

                        <li><span>Autonomia:</span> Até 250 horas em modo de desempenho (1 ms); até 9 meses em modo de economia de bateria.</li>

                        <li><span>Memória Interna:</span> Sim, para salvar configurações de DPI e perfis.</li>

                        <li><span>Compatibilidade:</span> Windows 7 ou posterior, macOS 10.11 ou posterior, Chrome OS. </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
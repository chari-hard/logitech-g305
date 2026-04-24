import IconBateria from '../../../../assets/images/c-bateria-icon.svg'
import IconMouse from '../../../../assets/images/c-mouse-icon.svg'
import IconVelocimetro from '../../../../assets/images/c-speedometer-icon.svg'
import { CardsBenefits } from '../../../cards/cardsBenefits'
import { motion } from 'motion/react'
import './style.css'

export const SectionBenefits = () => {
    return (
        <section className='section-benefits' id='beneficios'>
            <h2>Benefícios</h2>

            <div className='cards-section-benefits'>

                <motion.div
                    className='elemento-hero'
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut"}}
                    viewport={{ once: true, amount: 0.3 }}>
                    <CardsBenefits
                        icon={IconBateria}
                        alt="icon de bateria"
                        title="bateria longa"
                        description="O G305 oferece incríveis 250 horas de jogos ininterruptos em uma única pilha AA no modo de desempenho." />
                </motion.div>


                <motion.div
                    className='elemento-hero'
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8}}
                    viewport={{ once: true, amount: 0.3 }}>
                    <CardsBenefits
                        icon={IconMouse}
                        alt="icon de mouse"
                        title="sensor hero"
                        description="oferece desempenho, precisão e  capacidade de resposta excepcionais com sensibilidade de até 12.000 DPI."/>
                </motion.div>


                <motion.div
                    className='elemento-hero'
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                    viewport={{ once: true, amount: 0.3 }}>
                    <CardsBenefits
                        icon={IconVelocimetro}
                        alt="icon de velocimetro"
                        title="lightspeed"
                        description="Jogue sem fio e sem restrições. O LIGHTSPEED garante incrível capacidade de resposta para jogos sem atrasos." />
                </motion.div>
            </div>
        </section>
    )
}
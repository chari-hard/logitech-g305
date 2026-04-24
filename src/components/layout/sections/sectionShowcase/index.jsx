import './style.css'
import imagemDoShowcase from '../../../../assets/images/showcase-image.png'

export const SectionShowcase = () => {
    return (
        <section className="section-showcase" id='showcase'>

            <div className='showcase-content'>
                <h2>Showcase</h2>
                <img src={imagemDoShowcase} alt="" loading='lazy' />
            </div>
        </section>
    )
}
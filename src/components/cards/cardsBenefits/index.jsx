import './style.css'

export const CardsBenefits = ({ icon, alt, title, description, span }) => {
    return (
        <div className='card-beneficios'>
            <img src={icon} alt={alt} />

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    )
}
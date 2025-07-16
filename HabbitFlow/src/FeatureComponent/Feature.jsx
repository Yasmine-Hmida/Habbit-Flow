import './Feature.css'

const Feature = ({imgSrc , imgAlt ,title , description}) => {
    return (
        <div className='feature'>
            <img className='featureIcon' src={imgSrc} alt={imgAlt}/>  
            <h1 className="featureTitle">{title}</h1>
            <h2 className="featureDesc">{description}</h2>
        </div>
    )
}

export default Feature

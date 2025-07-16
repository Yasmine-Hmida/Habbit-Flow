// Importing CSS file
import './App.css'

// Importing Components
import Nav from './NavComponent/Nav.jsx'
import Welcome from './WelcomeComponent/Welcome.jsx'
import Feature from './FeatureComponent/Feature.jsx'

// Importing Images
import doneIcon from './assets/done.png';
import fireIcon from './assets/fire.png';
import riseIcon from './assets/rise.png';

const App = () => {

    // Array of features objects to pass as props later
    const features = [
        {
            id: 1,
            imgSrc: doneIcon, 
            imgAlt: 'doneIcon',
            title:'Simple Tracking' , 
            description:'Mark habits as complete with a single click.No complicated setup or overwhelming features'
        },
        
        {
            id: 2,
            imgSrc: fireIcon, 
            imgAlt: 'streakIcon',
            title:'Build Streaks' , 
            description:'Watch your streaks grow and stay motivated with progress Tracking per habbit'
        },

        {
            id: 3,
            imgSrc: riseIcon, 
            imgAlt: 'ProgressIcon',
            title:'Track Progress' , 
            description:'See your habit completion rates and celebrate your consistency and achievements over time'
        },
    ];


    return (
        <>
            <Nav/>
            <Welcome/> 
            <div className="features">
                {
                    features.map((feature) => (
                        <Feature key={feature.id} imgSrc={feature.imgSrc} imgAlt={feature.imgAlt} title={feature.title} description={feature.description}/>
                    ))
                }
            </div>
        </>
    )
}

export default App

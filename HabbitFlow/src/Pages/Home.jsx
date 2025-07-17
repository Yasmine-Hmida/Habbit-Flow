// Importing Components
import Nav from '../NavComponent/Nav.jsx';
import Welcome from '../WelcomeComponent/Welcome.jsx';
import Feature from '../FeatureComponent/Feature.jsx';
import Footer from '../FooterComponent/Footer.jsx';

// Importing Images
import doneIcon from '../assets/done.png';
import fireIcon from '../assets/fire.png';
import riseIcon from '../assets/rise.png';

import '../App.css'

const Home = () => {
    const features = [
        {
            id: 1,
            imgSrc: doneIcon,
            imgAlt: 'doneIcon',
            title: 'Simple Tracking',
            description:'Mark habits as complete with a single click. No complicated setup or overwhelming features',
        },
        {
            id: 2,
            imgSrc: fireIcon,
            imgAlt: 'streakIcon',
            title: 'Build Streaks',
            description:'Watch your streaks grow and stay motivated with progress tracking per habit',
        },
        {
            id: 3,
            imgSrc: riseIcon,
            imgAlt: 'ProgressIcon',
            title: 'Track Progress',
            description:'See your habit completion rates and celebrate your consistency and achievements over time',
        },
    ];

    return (
        <>
            <Nav />
            <Welcome />
            <div className="features">
                {
                    features.map((feature) => (
                        <Feature
                            key={feature.id}
                            imgSrc={feature.imgSrc}
                            imgAlt={feature.imgAlt}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))
                }
            </div>
            <Footer />
        </>
    );
};

export default Home;

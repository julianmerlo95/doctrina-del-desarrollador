import React from 'react';
import Categories from '../categories/Categories';
import './home.sass';
import img from '../../assets/test.png';

import WelcomeDD from '../documents/welcome-dd/Welcome-dd';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-title">
                <div className="home-container-title-left">
                    <div>
                        <h1>Doctrina del desarrollador</h1>
                        <h4>Una plataforma dedicada a compartir conocimiento, buenas prácticas y experiencias en el ámbito del desarrollo de software</h4>
                    </div>
                </div>
                <div className="home-container-title-right">
                    <img className="home-container-title-right-img" src={img} />
                </div>
            </div>
            <Categories />
            <WelcomeDD />
        </div >
    )
}

export default Home;
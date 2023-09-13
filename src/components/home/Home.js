import React from 'react';
import Categories from '../categories/Categories';
import './home.sass';
import img from '../../assets/test2.png';
import WelcomeDD from '../documents/welcome-dd/Welcome-dd';
import Information from '../information/Information';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-title">
                <div className="home-container-title-left">
                    <div>
                        <h1 className="home-container-title-left-h1">Doctrina del desarrollador</h1>
                        <h4>Una plataforma dedicada a compartir conocimiento, buenas prácticas y experiencias en el ámbito del desarrollo de software</h4>
                    </div>
                </div>
                <div className="home-container-title-right">
                    <img className="home-container-title-right-img" src={img} />
                </div>
            </div>
            <Categories />
            <Information />
            <WelcomeDD />
            <div className="home-container-work-with-us-container">
                <h2 className="home-container-work-with-us-container-title">¿Te gustaria participar de este proyecto?</h2>
                <p> ¡En la siguiente seccion te comentamos como hacerlo!</p>
                <button type="button" class="home-container-work-with-us-container-button btn">Mas detalles</button>
            </div>
        </div >
    )
}

export default Home;
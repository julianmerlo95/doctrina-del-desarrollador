import React from 'react';
import Categories from '../categories/Categories';
import './home.sass';
import img from '../../assets/home.png';
import WelcomeDD from '../documents/welcome-dd/Welcome-dd';
import Information from '../information/Information';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-title">
                <div className="home-container-title-left">
                    <div>
                        <h1 className="home-container-title-left-h1">Doctrina del desarrollador</h1>
                        <h4>Una plataforma dedicada a compartir
                            <span className="home-container-title-left-h1-span"> conocimiento</span>,
                            <span className="home-container-title-left-h1-span"> buenas prácticas</span> y
                            <span className="home-container-title-left-h1-span"> experiencias </span>
                            en el ámbito del desarrollo de software</h4>
                    </div>
                </div>
                <div className="home-container-title-right">
                    <img className="home-container-title-right-img" src={img} />
                </div>
            </div>
            <Categories />
            <Information />
            <WelcomeDD />
            <div className="home-container-other-authors-container">
                <h2 className="home-container-other-authors-container-title">¡Compartimos contenido de otros autores!</h2>
                <p> En la siguiente seccion te mostramos todas las publicaciones</p>
                <button type="button" class="home-container-other-authors-container-button btn">Mas detalles</button>
            </div>
        </div >
    )
}

export default Home;
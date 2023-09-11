import React from 'react';
import Categories from '../categories/Categories';
import './home.sass';
import img from '../../assets/test.png';
import HttpMethods from '../documents/http-methods/Http-methods';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-title">
                <div className="home-container-title-left">
                    <div>
                        <h1>Doctrina del desarrollador</h1>
                        <h3>Una plataforma donde compartimos conocimiento y experiencias</h3>
                    </div>
                </div>
                <div className="home-container-title-right">
                    <img className="home-container-title-right-img" src={img} />
                </div>
            </div>

            <Categories />
            <HttpMethods />
        </div >
    )
}

export default Home;
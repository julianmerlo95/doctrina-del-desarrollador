import React from 'react';
import './about-us.sass';
import img from '../../assets/about-us.png';

export default function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-container-left">
                <img className="about-us-container-left-img" src={img} />
            </div>
            <div className="about-us-container-right">
                <div>
                    <h2 className="about-us-container-right-title">Sobre nosotros</h2>
                    <h3>Somos un grupo de desarrolladores que nos apasiona el desarrollo de software. Este es un espacio creado para compartir
                        <span className="about-us-container-right-span"> conocimiento</span>,
                        <span className="about-us-container-right-span"> buenas prácticas</span> y
                        <span className="about-us-container-right-span"> experiencias </span> que hemos obtenido a lo largo de los años.
                        Nos apasiona seguir aprendiendo y mejorando dia a dia, por esto nos encanta compartir este espacio para superarnos todos juntos!
                    </h3>
                </div>
            </div>
        </div>
    );
}

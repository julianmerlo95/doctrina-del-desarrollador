import React, { PureComponent } from 'react';
import img from '../../../assets/logo2.png';
import './Footer.sass';

class Footer extends PureComponent {

    render() {
        return (
            <div class="footer-container card text-center">
                <div class="card-header"></div>
                <div class="footer-container-body card-body">
                    <div class="footer-container-body-left">
                        <img className="footer-container-body-left-img" src={img} />
                    </div>
                    <div class="footer-container-body-right">
                        <li><a href="/home">Inicio</a></li>
                        <li><a href="/about-us">Nosotros</a></li>
                        <li><a href="/other-authors">Otros autores</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    Doctrina del desarrollador. Todos los derechos reservados
                </div>
            </div>
        )
    }
}

export default Footer;
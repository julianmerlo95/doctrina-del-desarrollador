import React, { PureComponent } from 'react';
import img from '../../../assets/logo2.png';
import './footer.sass'

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
                        <li><a href="ruta.com">Inicio</a></li>
                        <li><a href="ruta.com">Temas</a></li>
                        <li><a href="ruta.com">Nosotros</a></li>
                        <li><a href="ruta.com">Participa del proyecto</a></li>
                        <li><a href="ruta.com">Contacto</a></li>
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
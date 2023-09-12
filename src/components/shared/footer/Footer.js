import React, { PureComponent } from 'react';
import './footer.sass'

class Footer extends PureComponent {

    render() {
        return (
            <div class="footer-container card text-center">
                <div class="card-header"></div>
                <div class="card-body">
                    <h5 class="card-title">¿Te gustaria aportar al proyecto?</h5>
                    <p class="card-text">Unite a nosotros a travez del siguiente correo: doctrina-del-desarrollador@gmail.com</p>
                    <a href="/home" class="btn btn-primary">Volver al Inicio</a>
                </div>
                <div class="card-footer text-muted">
                    Doctrina del desarrollador. Todos los derechos reservados
                </div>
            </div>
        )
    }
}

export default Footer;
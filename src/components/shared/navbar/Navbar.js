import React, { PureComponent } from 'react';
import './navbar.sass'
import img from '../../../assets/logo.png';

class Navbar extends PureComponent {

    render() {
        return (
            <nav class="navbar-container navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-container-left-section">
                    <img className="navbar-container-left-section-img" src={img} />
                </div>
                <div class="navbar-container-righ-section collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="navbar-container-item nav-link" href="/home">Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="navbar-container-item nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Temas
                            </a>
                            <div class="navbar-container-sections dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div>
                                    <h5 class="dropdown-item" href="/reports/sales">BUENAS PRACTICAS</h5>
                                    <a class="dropdown-item" href="/reports/sales">Another action</a>
                                    <a class="dropdown-item" href="/reports/sales">Something else here</a>
                                </div>
                                <div>
                                    <h5 class="dropdown-item" href="#">PATRONES DE DISEÑO</h5>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                                <div>
                                    <h5 class="dropdown-item" href="#">REFACTORIZACION</h5>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                                <div>
                                    <h5 class="dropdown-item" href="#">TESTING</h5>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="navbar-container-item nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="navbar-container-item nav-link" href="#">Participa del proyecto</a>
                        </li>
                        <li class="nav-item">
                            <a class="navbar-container-item nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav >
        )
    }
}

export default Navbar;


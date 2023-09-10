import React, { PureComponent } from 'react';
import './Footer.sass'

class Footer extends PureComponent {

    render() {
        return (
            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    Dojo
                </div>
            </div>
        )
    }
}

export default Footer;
import React, { PureComponent } from 'react';
import './information.sass'

class Information extends PureComponent {

    render() {
        return (
            <div class="information-container card text-center">
                <h3 className="information-container-title">¡Todos nuestros documentos están disponibles en formato PDF y son de libre descarga y uso!</h3>

                <div class="information-container">
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h4 class="information-container-card-title card-title">DESCARGABLES</h4>
                            <p class="card-text">Todos nuestros documentos se pueden descargar libremente</p>
                        </div>
                    </div>
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h4 class="information-container-card-title card-title">LIBRES DE MARCA DE AGUA</h4>
                            <p class="card-text">Todos nuestros documentos son libres de marca de agua, solo contienen nuestro logo el cual se puede quitar facilmente</p>
                        </div>
                    </div>
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h4 class="information-container-card-title card-title">REFERENCIAS</h4>
                            <p class="card-text">Todos nuestros documentos contienen referencias las cuales pueden ser consultadas de manera complementaria</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Information;
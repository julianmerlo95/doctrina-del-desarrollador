import React, { PureComponent } from 'react';
import './information.sass'

class Information extends PureComponent {

    render() {
        return (
            <div class="information-container card text-center">
                <div class="information-container">
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h3 class="information-container-card-title card-title">Descargables</h3>
                            <p class="card-text">Todos nuestros documentos se pueden descargar libremente</p>
                        </div>
                    </div>
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h3 class="information-container-card-title card-title">Libres de marca de agua</h3>
                            <p class="card-text">Todos nuestros documentos son libres de marca de agua, solo contienen nuestro logo el cual se puede quitar facilmente</p>
                        </div>
                    </div>
                    <div class="information-container-card card" style={{ width: '18rem;' }}>
                        <div class="card-body">
                            <h3 class="information-container-card-title card-title">Referencias</h3>
                            <p class="card-text">Todos nuestros documentos contienen referencias las cuales pueden ser consultadas de manera complementaria</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Information;
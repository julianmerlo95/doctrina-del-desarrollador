import React from 'react';
import PdfViewer from '../../pdf-viewer/Pdf-viewer';
import pdfFile from './welcome-dd.pdf';
import './welcome-dd.sass';

export default function WelcomeDD() {
    return (
        <div className="welcome-dd-container">
            <h2 className="welcome-dd-container-title">Les presentamos el formato de nuestros documentos</h2>
            <p className="welcome-dd-container-title-secondary">Simple y facil de leer</p>
            <div className="welcome-dd-container-pdf">
                <PdfViewer document={pdfFile} width="100%" />
            </div>

        </div>
    );
}

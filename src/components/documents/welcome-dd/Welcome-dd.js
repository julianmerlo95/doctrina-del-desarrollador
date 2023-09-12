import React from 'react';
import PdfViewer from '../../pdf-viewer/pdf-viewer';
import pdfFile from './welcome-dd.pdf';
import './welcome-dd.sass';

export default function WelcomeDD() {
    return (
        <div className="welcome-dd-container">
            <h2>¡Todos nuestros documentos están disponibles en formato PDF y son de libre descarga y uso!</h2>
            <PdfViewer document={pdfFile} />
        </div>
    );
}

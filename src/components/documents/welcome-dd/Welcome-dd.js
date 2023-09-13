import React from 'react';
import PdfViewer from '../../pdf-viewer/Pdf-viewer';
import pdfFile from './welcome-dd.pdf';
import './welcome-dd.sass';

export default function WelcomeDD() {
    return (
        <div className="welcome-dd-container">
            <PdfViewer document={pdfFile} />
        </div>
    );
}

import React from 'react';
import PdfViewer from '../../pdf-viewer/pdf-viewer';
import pdfFile from './welcomeDD.pdf';

export default function WelcomeDD() {
    return (
        <div className="http-method-container">
            <PdfViewer document={pdfFile} />
        </div>
    );
}

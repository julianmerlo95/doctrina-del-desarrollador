import React from 'react';
import PdfViewer from '../../pdf-viewer/pdf-viewer';
import pdfFile from './los-6-http-metodos-mas-usados.pdf';

export default function HttpMethods() {
    return (
        <div className="http-method-container">
            <PdfViewer document={pdfFile} />
        </div>
    );
}
import React from 'react';
import PdfViewer from '../../pdf-viewer/pdf-viewer';
import pdfFile from './http-methods.pdf';

export default function HttpMethods() {
    return (
        <div className="http-method-container">
            <PdfViewer document={pdfFile} />
        </div>
    );
}
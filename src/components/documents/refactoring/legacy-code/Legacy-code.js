import React from 'react';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';
import pdfFile from './codigo-legacy.pdf';
import './legacy-code.sass';

export default function LegacyCode() {
    return (
        <div className="http-method-container">
            <PdfViewer document={pdfFile} />
        </div>
    );
}
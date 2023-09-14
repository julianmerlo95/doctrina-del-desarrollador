import React from 'react';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';
import pdfFile from './codigo-legacy.pdf';
import './legacy-code.sass';

export default function LegacyCode() {

    const author = "Julian Merlo";
    const documentDate = "10/09/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="http-method-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
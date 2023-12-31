import React from 'react';
import pdfFile from './los-6-http-metodos-mas-usados.pdf';
import './http-methods.sass';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';

export default function HttpMethods() {

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
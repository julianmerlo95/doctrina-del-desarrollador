import React from 'react';
import pdfFile from './tdd.pdf';
import './tdd.sass';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';

export default function Tdd() {

    const author = "Julian Merlo";
    const documentDate = "18/09/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="tdd-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
import React from 'react';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';
import pdfFile from './code-smell-and-techniques.pdf';
import './code-smell-and-techniques.sass';

export default function CodeSmellAndTechniques() {

    const author = "Julian Merlo";
    const documentDate = "14/09/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="code-smell-and-techniques-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
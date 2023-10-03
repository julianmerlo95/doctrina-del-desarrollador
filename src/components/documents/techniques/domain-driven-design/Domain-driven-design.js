import React from 'react';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';
import pdfFile from './domain-driven-design.pdf';
import './domain-driven-design.sass';

export default function DomainDrivenDesign() {

    const author = "Julian Merlo";
    const documentDate = "03/10/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="domain-driven-design-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
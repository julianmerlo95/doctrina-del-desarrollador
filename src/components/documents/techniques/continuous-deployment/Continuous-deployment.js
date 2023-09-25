import React from 'react';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';
import pdfFile from './continuous-deployment.pdf';
import './continuous-deployment.sass';

export default function ContinuousDeployment() {

    const author = "Julian Merlo";
    const documentDate = "25/09/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="continuous-deployment-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
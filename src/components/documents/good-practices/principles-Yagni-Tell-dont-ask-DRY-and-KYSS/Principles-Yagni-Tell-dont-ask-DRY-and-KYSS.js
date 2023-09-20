import React from 'react';
import pdfFile from './principles-Yagni-Tell-dont-ask-DRY-and-KYSS.pdf';
import './principles-Yagni-Tell-dont-ask-DRY-and-KYSS.sass';
import Author from '../../../author/Author';
import PdfViewer from '../../../pdf-viewer/pdf-viewer';

export default function PrinciplesYagniTelldontaskDRYAndKYSS() {

    const author = "Julian Merlo";
    const documentDate = "20/09/23";
    const linkedin = "https://www.linkedin.com/in/julianmerlo/";
    const width = "60%";

    return (
        <div className="principles-Yagni-Tell-dont-ask-DRY-and-KYSS-container">
            <Author author={author} documentDate={documentDate} linkedin={linkedin} />
            <PdfViewer document={pdfFile} width={width} />
        </div>
    );
}
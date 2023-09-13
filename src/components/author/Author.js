import React from 'react';
import './author.sass';

export default function Author(props) {

    const author = props.author;
    const documentDate = props.documentDate;
    const linkedin = props.linkedin;

    return (
        <div className="author-container">
            <h4><u>Autor:</u> {author}</h4>
            <h4><u>Linkedin:</u> <a href={linkedin}>{linkedin}</a></h4>
            <h4><u>Fecha de publicacion:</u> {documentDate}</h4>
        </div >
    );
}
import React from 'react';
import './author.sass';

export default function Author(props) {

    const author = props.author;
    const documentDate = props.documentDate;
    const linkedin = props.linkedin;

    return (
        <div className="author-container">
            <h4><span className="author-container-span">Autor:</span> {author}</h4>
            <h4><span className="author-container-span">Linkedin:</span> <a href={linkedin}>{linkedin}</a></h4>
            <h4><span className="author-container-span">Fecha de publicacion:</span> {documentDate}</h4>
        </div >
    );
}
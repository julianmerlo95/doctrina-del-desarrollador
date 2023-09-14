import React, { useEffect, useRef } from 'react';

export default function PdfViewer(props) {

    const containerRef = useRef(null);
    const width = props.width;

    useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit;

        (async function () {
            PSPDFKit = await import('pspdfkit');

            PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.
            PSPDFKit.Annotation = false
            instance = await PSPDFKit.load({
                container,
                document: props.document,
                baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
                styleSheets: [
                    "./my-pspdfkit.css" // or local CSS file
                ],
                disableAnnotationList: true
            })
                .then((instance) => {
                    console.info("PSPDFKit loaded", instance);
                })
                .catch((error) => {
                    console.error(error.message);
                });

        })();

        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);

    return (
        <div ref={containerRef} style={{ width: props.width, height: '100vh', margin: '0 auto', padding: '2%' }} />
    );
}
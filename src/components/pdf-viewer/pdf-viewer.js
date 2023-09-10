import React, { useEffect, useRef } from 'react';

export default function PdfViewer(props) {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit;

        (async function () {
            PSPDFKit = await import('pspdfkit');

            PSPDFKit.unload(container); // Ensure that there's only one PSPDFKit instance.

            instance = await PSPDFKit.load({
                container,
                document: props.document,
                baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
            });
            console.log(instance);
        })();
        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);

    return (
        <div ref={containerRef} style={{ width: '80%', height: '100vh', margin: '0 auto' }} />
    );
}
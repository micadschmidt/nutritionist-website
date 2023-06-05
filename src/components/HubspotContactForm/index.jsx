import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '39730319',
                    formId: '91dcdb7b-3ddd-4e4a-a147-a78fe3e1ac69',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

        return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
}

export default HubspotContactForm
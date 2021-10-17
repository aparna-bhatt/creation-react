import React from 'react'
import CookieConsent from "react-cookie-consent";

const cookie_consent = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Okay!"
                cookieName="cookieconsent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                We use cookies to improve your experience and for analytical purposes. Read our Privacy Policy and Terms to know more.{" "}
                <span style={{ fontSize: "10px" }}> You consent to our cookies if you continue to use our website.</span>
            </CookieConsent>
        </div>
    )
}

export default cookie_consent;

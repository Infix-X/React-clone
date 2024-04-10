import React from "react";
import './Footer.css'



const Footer = () => {
    // const vars={
    //     '--cui-footer-min-height': "#{$footer-min-height}",
    //     '--cui-footer-padding-x': "#{$footer-padding-x}",
    //    ' --cui-footer-padding-y': "#{$footer-padding-y}",
    //     '--cui-footer-color': "#{$footer-color}",
    //     '--cui-footer-bg': "#{$footer-bg}",
    //     '--cui-footer-border-color': "#{$footer-border-color}",
    //     '--cui-footer-border': "#{$footer-border-width} solid var(--cui-footer-border-color)",
    // }
    // const var1={

    
    return (
        <div>
           <div style={{
                        minHeight: "400px",
                        color: "rgba(81, 142, 142, 0.4);",
                        display: "block",
                        margin: "52px",
                        textAlign: "center",
                        fontSize:"15px",
                        
                    }}>
                <div>
                    <a href="https://coreui.io">CoreUI</a>
                    <span>&copy; 2024 creativeLabs.</span>
                    <br/>
                </div>
                <div>
                    <span>Powered by</span><br/>
                    <a href="https://coreui.io">CoreUI</a>
                </div>
          </div>
        </div>
    );
}

export default Footer;

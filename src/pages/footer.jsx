
import '../assets/Styles/footer.scss';

import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div id='footer_coppright'>

            <div id='footer_content'>
                <div id='footer_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div id='footer_container'>
                    <div id='footer_address'>
                        <h3>Address</h3>
                        <p>98 Kirk Dr,
                            Thornhil,ON</p>
                    </div>
                    <div id='footer_phone'>
                        <h3>Phone</h3>
                        <p>(+1) 647-381-6883</p>
                    </div>
                    <div id='footer_email'>
                        <h3>Email</h3>
                        <p>miladamiri87@gmail.com</p>
                    </div>
                </div>
            </div>



            <p>All rights reserved &copy; 2025. This website is owned by Milad Amiri, Designer and Architect.</p>






        </div>
    );
};

export default Footer;

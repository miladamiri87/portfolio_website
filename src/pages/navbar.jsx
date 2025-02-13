import React from 'react'
import '../assets/Styles/responsive-page-break_point.scss';
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'


function Navbar({ scrollToServices }) {

    const location = useLocation(); // دریافت مسیر فعلی
    const navigate = useNavigate(); // برای هدایت به Home

    const handleScrollToServices = (e) => {
        e.preventDefault(); // جلوگیری از تغییر صفحه ناخواسته

        if (location.pathname !== "/portfolio_website") {
            // اگر در صفحه جزئیات هستیم، اول به Home برو و بعد اسکرول کن
            navigate("/portfolio_website");
            setTimeout(() => {
                if (scrollToServices.current) {
                    scrollToServices.current();
                }
            }, 100); // مقدار کم برای اطمینان از لود شدن صفحه
        } else {
            // اگر در Home هستیم، مستقیم اسکرول کند
            if (scrollToServices.current) {
                scrollToServices.current();
            }
        }
    };


    return (
        <div id='header'>
            <div id='contact_container'>
                <div id='address'>
                    <span ><i className='bx bx-map-pin'></i></span>
                    <p>98 Kirk Dr,
                        Thornhil,ON</p>
                </div>
                <div id="logo">
                    <img src={logo} alt="logo" />

                </div>
                <div id='phone'>
                    <span><i className='bx bxs-phone-call' ></i></span>
                    <p>(+1) 647-381-6883</p>

                </div>
            </div>
            <div id='menu'>
                <Link to="/portfolio_website">Home</Link>
                <a href="#" onClick={handleScrollToServices}>Services</a>
                <Link to="/all_projects">All Projects</Link>
                <Link to="/about">About</Link>


            </div>

        </div>
    )
}
export default Navbar;

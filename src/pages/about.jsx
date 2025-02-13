import React from 'react'
import '../assets/Styles/responsive-page-about-break_point.scss';
import photo_team from '../assets/photo_team.JPG'

export default function About() {
    return (
        <>
            <div id='about_div'>


                <div id='about_header'>
                    <h1>About Us</h1>
                    <h1>What You Want!! Fast, Fantastic, Favorites
                    </h1>
                </div>

                <div id='about_matn'>
                    <div id='about_text'>

                        <p >We are a team of expert architects and designers with extensive skills and experience in architectural and computational design. Our goal is to deliver innovative, high-quality, and precise digital models that enhance project visualization and execution. With our deep knowledge and advanced tools, we ensure that every project meets the highest standards of design and functionality.</p>
                        <h1>
                            Why Choose Us? ✅
                        </h1>
                        <p>
                            <strong>- Unlimited Revisions –</strong> We offer up to **10 revisions** until you are fully satisfied. 🔄
                        </p>
                        <p>
                            <strong>- Young and Up-to-Date –</strong> Our team stays current with the latest trends and technologies in architecture. 🚀
                        </p>
                        <p>
                            <strong>- Flexible and Customer-Oriented – </strong>We adapt to your specific needs and requests, ensuring a personalized experience. 🤝
                        </p>
                        <p>
                            <strong>- Comprehensive Consultation –</strong> We even provide expert advice on interior arrangements and home layouts to optimize your space. 🏡✨
                        </p>

                    </div>
                    <img src={photo_team} alt="" />
                </div>
            </div>


        </>
    )
}

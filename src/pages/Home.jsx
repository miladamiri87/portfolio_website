import team from '../assets/team.png'
import photo_team from '../assets/photo_team.JPG'


import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import '../assets/Styles/responsive-page-break_point.scss';
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useEffect, useState } from "react";




const Home = ({ scrollToServices }) => {

    const servicesRef = useRef(null);

    scrollToServices.current = () => {
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    const [projects, setProjects] = useState([]);
    useEffect(() => {
        console.log('در حال تلاش برای بارگذاری JSON...');
        fetch("/projects.json")
            .then((res) => {
                console.log('پاسخ دریافت شد:', res);
                if (!res.ok) {
                    throw new Error('خطا در بارگذاری فایل JSON');
                }
                return res.json();
            })
            .then((data) => {
                console.log('داده‌ها دریافت شدند:', data);
                setProjects(data.projects_example);
            })
            .catch((error) => {
                console.error('مشکلی در بارگذاری پروژه‌ها پیش آمد:', error);
            });
    }, []);



    return <>


        {/* about section */}

        <div id='about_container'>
            <div id='about_content'>
                <h3>About Company</h3>
                <h1>Design what You Want: Fast, Fantastic, Favorites</h1>
                <p>Our company has been delivering outstanding
                    architectural designs for 8 years, handling
                    projects of all scales, from intimate spaces to grand developments. Guided by our motto, "Design what You Want: Fast, Fantastic, Favorites," we bring visions to life with creativity, efficiency, and excellence. </p>
                <Link to='/about'>Read More </Link>
            </div>
            <div id='about_img'>
                <img src={photo_team} alt="logo" />
            </div>
        </div>


        {/* projects section */}

        <div id='projects'>

            <div id='projects_button'>
                <button>View All Projects</button>

            </div>

            <div id='projects_container'>
                <div id='projects_content'>
                    <h1>Our Projects</h1>
                    <p>Our company has been delivering outstanding
                        architectural designs for 8 years, handling
                        projects of all scales, from intimate spaces to grand developments. Guided by our motto, "Design what You Want: Fast, Fantastic, Favorites," we bring visions to life with creativity, efficiency, and excellence. </p>
                </div>
            </div>
        </div>

        {/* projects example */}

        <div id='projects_example_container'>

            {projects.map((project) => (

                <div id='projects_example_content' key={project.id}>


                    <img src={project.project_intro_img} alt={project.name_project} />
                    <div id='projects_example_detail'>
                        <h3>{project.name_project}</h3>
                        <Link to={`/detail_project/${project.id}`}>more Info.</Link>
                    </div>
                </div>
            ))}
        </div>

        {/* services section */}


        <div id='services_content'>
            <div id='description_service'>

                <h1>Our Services</h1>
                <p ref={servicesRef} >Our company has been delivering outstanding
                    architectural designs for 8 years, handling
                    projects of all scales, from intimate spaces to grand developments. Guided by our motto, "Design what You Want: Fast, Fantastic, Favorites," we bring visions to life with creativity, efficiency, and excellence. </p>
            </div>

            <div id='services_carts'>
                <div id='services_cart'>
                    <ArchitectureIcon id='servic_icon' />
                    <h3>Architectural Project</h3>
                    <p>We offer comprehensive architectural design services for projects of varying scales and complexities. For large-scale developments, we collaborate closely with planners to create master site plans, concept designs, and drawings required for zoning amendments, official plan changes, and site plan control applications. For smaller projects, including renovations, we take the lead as architects, coordinating with consultants to develop designs and drawings for building permits and construction. Our commitment is to deliver exceptional design quality while ensuring fast and dependable service for our clients.</p>
                </div>
                <div id='services_cart'>
                    < DesignServicesIcon id='servic_icon' />
                    <h3>Architectural Design/
                        Interior Design</h3>
                    <p>BRD AI Inc. specializes in designing
                        custom homes, whether modern or classic.
                        Over the past few years, our expertise
                        in custom home design has been recognized and valued by many clients across the Greater Toronto Area (GTA)
                        . We have successfully completed numerous high-profile residences that surpass client expectations.

                        Our team works closely with clients
                        to develop floor plans, elevations, and interior designs that align with their needs while maintaining aesthetic appeal. Additionally, we handle the building permit application process on behalf of our clients, coordinating with city officials until the permit is successfully issued.</p>
                </div>
                <div id='services_cart'>
                    <EngineeringIcon id='servic_icon' />
                    <h3>Construction administration</h3>
                    <p>During the construction phase, BRD AI Inc. provides
                        comprehensive support both in the office and on-site. Our team reviews shop drawings, responds to contractor Requests for Information (RFIs), conducts monthly site inspections, and prepares site visit reports. Upon project completion,
                        we perform a final site inspection and issue occupancy letters to formally close the permit.</p>
                </div>
            </div>
        </div>


        {/* footer */}




    </>;


};
export default Home;

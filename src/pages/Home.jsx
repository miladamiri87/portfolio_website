import team from '../assets/team.png'
import photo_team from '../assets/photo_team.JPG'
import projectImage1 from '../assets/kowsar/Enscape_2021-12-22-19-25-10-Photoroom.jpg'; // import کردن تصویر
import projectImage2 from '../assets/funzone/intro.jpg'; // import کردن تصویر
import projectImage3 from '../assets/nilofar/intro.jpg'; // import کردن تصویر



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


    const projects = [


        {
            "id": "1",
            "type_project": "Design of a residential tower",
            "name_project": "Kowsar Tower",
            "role_project": "My role was to design the residential tower and oversee its execution and coordination.",
            "description_project": "The project involves the design of a residential tower with a total floor area of 56,000 square meters. The tower was designed to provide a modern, functional living environment with attention to aesthetic details and user experience. The design focused on maximizing space efficiency while ensuring comfort for residents. The structure includes a mix of amenities, including recreational spaces, parking, and retail areas. Detailed architectural planning and coordination with structural, mechanical, and electrical systems were key to the project’s success.",
            "project_intro_img": projectImage1,
            "year_project": 2022,
            "location_project": "Mashhad, Iran",
            "area_project": "56,000 sqm",
            "project_detail_img": [
                "/assets/kowsar/42-Photoroom.jpg",
                "/assets/kowsar/43-Photoroom.jpg",
                "/assets/kowsar/44-Photoroom.jpg",
                "/assets/kowsar/45-Photoroom.jpg",
                "/assets/kowsar/Enscape_2021-12-22-19-25-10-Photoroom.jpg",
                "/assets/kowsar/Enscape_2021-12-22-19-31-13-Photoroom.jpg",
                "/assets/kowsar/Enscape_2021-12-22-19-35-17-Photoroom.jpg",
                "/assets/kowsar/Enscape_2021-12-22-19-42-20-Photoroom.jpg",
                "/assets/kowsar/Enscape_2022-02-12-11-40-06.png",
                "/assets/kowsar/24-12-99.mp4"
            ]
        },
        {
            "id": "2",
            "type_project": "Amusement park design",
            "name_project": "FUN ZONE",
            "role_project": "Architect was to design the project and oversee its execution.",
            "description_project": "The amusement park design is exposed, aligning with a VR and modern theme. The broken theme creates harmony between space and function. A suitable roof cover is achieved using metal boxes, and the lighting design is tailored to enhance the experience. The design is implemented using BIM, ensuring full coordination between architectural, mechanical, and lighting systems. This approach guarantees seamless integration of all elements, optimizing both aesthetic and functional aspects of the project.",
            "project_intro_img": projectImage2,
            "year_project": 2023,
            "location_project": "Mashhad, Iran",
            "area_project": "7,500 sqm",
            "project_detail_img": [
                "/assets/funzone/_MG_9646.JPG",
                "/assets/funzone/_MG_9652.JPG",
                "/assets/funzone/C0010S03.MP4",
                "/assets/funzone/C0053S03.MP4",
                "/assets/funzone/C0077S03.MP4",
                "/assets/funzone/C0085S03.MP4",
                "/assets/funzone/C0104S03.MP4",
                "/assets/funzone/C0088S03.MP4",
                "/assets/funzone/C0115S03.MP4",
                "/assets/funzone/C0118S03.MP4",
                "/assets/funzone/C0152S03.MP4",
                "/assets/funzone/_MG_9666.JPG",
                "/assets/funzone/_MG_9670.JPG",
                "/assets/funzone/_MG_9676.JPG",
                "/assets/funzone/_MG_9682.JPG",
                "/assets/funzone/_MG_9693.JPG",
                "/assets/funzone/_MG_9705.JPG",
                "/assets/funzone/_MG_9717.JPG",
                "/assets/funzone/_MG_9728.JPG",
                "/assets/funzone/_MG_9733.JPG",
                "/assets/funzone/_MG_9754.JPG",
                "/assets/funzone/_MG_9764.JPG",
                "/assets/funzone/_MG_9802.JPG",
                "/assets/funzone/_MG_9812.JPG",
                "/assets/funzone/_MG_9817.JPG",
                "/assets/funzone/C0193S03.MP4"
            ]
        },
        {
            "id": "3",
            "type_project": "Design Complex Residential",
            "name_project": "Daneshjoo Complex",
            "role_project": " My role was to design the residential complex and oversee its execution and coordination.",
            "description_project": "The project involves the design of a residential complex for 1,000 people, focusing on optimizing space and functionality. Graph analysis was used to study gathering areas, utilizing Depthmap software to assess spatial configurations and movement patterns. The Justified Plan Graph algorithm was applied to enhance connectivity and accessibility within the complex. The design integrates modern planning principles to ensure efficient circulation, community engagement, and a well-balanced living environment while maximizing comfort and usability for residents.",
            "project_intro_img": projectImage3,
            "year_project": 2017,
            "location_project": "Tehran, Iran",
            "area_project": "85,000 sqm",
            "project_detail_img": [
                "/assets/nilofar/1-1.png",
                "/assets/nilofar/2-1.png",
                "/assets/nilofar/3-1.png",
                "/assets/nilofar/37.jpg",
                "/assets/nilofar/38.jpg",
                "/assets/nilofar/39.jpg",
                "/assets/nilofar/40.jpg"
            ]
        }
    ]




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

import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../assets/Styles/responsive-page-detail-project-break_point.scss';
import projectImage1 from '../assets/kowsar/Enscape_2021-12-22-19-25-10-Photoroom.jpg'; // import کردن تصویر
import projectImage2 from '../assets/funzone/intro.jpg'; // import کردن تصویر
import projectImage3 from '../assets/nilofar/intro.jpg'; // import کردن تصویر

// project_detail_img kowsar

import project_detail_img1 from '../assets/kowsar/42-Photoroom.jpg'; // import کردن تصویر
import project_detail_img2 from '../assets/kowsar/43-Photoroom.jpg'; // import کردن تصویر
import project_detail_img3 from '../assets/kowsar/44-Photoroom.jpg'; // import کردن تصویر
import project_detail_img4 from '../assets/kowsar/45-Photoroom.jpg'; // import کردن تصویر
import project_detail_img5 from '../assets/kowsar/Enscape_2021-12-22-19-25-10-Photoroom.jpg'; // import کردن تصویر
import project_detail_img6 from '../assets/kowsar/Enscape_2021-12-22-19-31-13-Photoroom.jpg'; // import کردن تصویر
import project_detail_img7 from '../assets/kowsar/Enscape_2021-12-22-19-35-17-Photoroom.jpg'; // import کردن تصویر
import project_detail_img8 from '../assets/kowsar/Enscape_2021-12-22-19-42-20-Photoroom.jpg'; // import کردن تصویر
import project_detail_img9 from '../assets/kowsar/Enscape_2022-02-12-11-40-06.png'; // import کردن تصویر
import project_detail_img10 from '../assets/kowsar/24-12-99.mp4'; // import کردن تصویر

// project_detail_img funzon


import project_detail_img_funzone3 from '../assets/funzone/C0010S03.MP4'; // import کردن تصویر
import project_detail_img_funzone4 from '../assets/funzone/C0053S03.MP4'; // import کردن تصویر
import project_detail_img_funzone5 from '../assets/funzone/C0077S03.MP4'; // import کردن تصویر
import project_detail_img_funzone6 from '../assets/funzone/C0085S03.MP4'; // import کردن تصویر
import project_detail_img_funzone7 from '../assets/funzone/C0104S03.MP4'; // import کردن تصویر
import project_detail_img_funzone8 from '../assets/funzone/C0088S03.MP4'; // import کردن تصویر
import project_detail_img_funzone9 from '../assets/funzone/C0115S03.MP4'; // import کردن تصویر
import project_detail_img_funzone10 from '../assets/funzone/C0118S03.MP4'; // import کردن تصویر
import project_detail_img_funzone11 from '../assets/funzone/C0152S03.MP4'; // import کردن تصویرس
import project_detail_img_funzone26 from '../assets/funzone/C0193S03.MP4'; // import کردن تصویر

// project_detail_img nilu


import project_detail_img_nilu1 from '../assets/nilofar/1-1.png'; // import کردن تصویر
import project_detail_img_nilu2 from '../assets/nilofar/2-1.png'; // import کردن تصویر
import project_detail_img_nilu3 from '../assets/nilofar/3-1.png'; // import کردن تصویر
import project_detail_img_nilu37 from '../assets/nilofar/37.jpg'; // import کردن تصویر
import project_detail_img_nilu38 from '../assets/nilofar/38.jpg'; // import کردن تصویر
import project_detail_img_nilu39 from '../assets/nilofar/39.jpg'; // import کردن تصویر
import project_detail_img_nilu40 from '../assets/nilofar/40.jpg'; // import کردن تصویر


// Coffe
import project_detail_img_coffe01 from '../assets/custle/promo padideh 2.mp4'; // import کردن تصویر
import project_detail_img_01 from '../assets/custle/01 (1).jpg';
import project_detail_img_02 from '../assets/custle/01 (2).JPG';
import project_detail_img_03 from '../assets/custle/01 (3).JPG';
import project_detail_img_04 from '../assets/custle/01 (4).JPG';
import project_detail_img_05 from '../assets/custle/01 (5).JPG';
import project_detail_img_06 from '../assets/custle/01 (6).JPG';
import project_detail_img_07 from '../assets/custle/01 (7).JPG';
import project_detail_img_08 from '../assets/custle/01 (8).JPG';
import project_detail_img_09 from '../assets/custle/01 (9).JPG';
import project_detail_img_10 from '../assets/custle/01 (10).jpg';
import project_detail_img_11 from '../assets/custle/01 (11).jpg';
import project_detail_img_12 from '../assets/custle/01 (12).jpg';
import project_detail_img_13 from '../assets/custle/01 (13).jpg';
import project_detail_img_14 from '../assets/custle/01 (14).jpg';
import project_detail_img_15 from '../assets/custle/01 (15).jpg';
import project_detail_img_16 from '../assets/custle/01 (16).jpg';
import project_detail_img_17 from '../assets/custle/01 (17).jpg';
import project_detail_img_18 from '../assets/custle/01 (18).jpg';
import project_detail_img_19 from '../assets/custle/01 (19).jpg';
import project_detail_img_20 from '../assets/custle/01 (20).jpg';
import project_detail_img_21 from '../assets/custle/01 (21).jpg';
import project_detail_img_22 from '../assets/custle/01 (22).jpg';
import project_detail_img_23 from '../assets/custle/01 (23).jpg';
import project_detail_img_24 from '../assets/custle/01 (24).jpg';
import project_detail_img_25 from '../assets/custle/01 (25).JPG';
import project_detail_img_26 from '../assets/custle/01 (26).jpg';
import project_detail_img_27 from '../assets/custle/01 (27).JPG';


// ferdowsi


import project_detail_ferdosi from '../assets/ferdowsi/14.mp4';
import project_detail_ferdosi2 from '../assets/ferdowsi/3.jpg';
import project_detail_ferdosi3 from '../assets/ferdowsi/2.png';

import project_detail_vila from '../assets/vila/23-1-1400 (1).mp4';



export default function Detail_project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    const data = [


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
                project_detail_img1,
                project_detail_img2,
                project_detail_img3,
                project_detail_img4,
                project_detail_img5,
                project_detail_img6,
                project_detail_img7,
                project_detail_img8,
                project_detail_img9,
                project_detail_img10,
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
                
                project_detail_img_funzone3,
                project_detail_img_funzone4,
                project_detail_img_funzone5,
                project_detail_img_funzone6,
                project_detail_img_funzone7,
                project_detail_img_funzone8,
                project_detail_img_funzone9,
                project_detail_img_funzone10,
                project_detail_img_funzone11,
                project_detail_img_funzone26
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
                project_detail_img_nilu1,
                project_detail_img_nilu2,
                project_detail_img_nilu3,
                project_detail_img_nilu37,
                project_detail_img_nilu38,
                project_detail_img_nilu39,
                project_detail_img_nilu40
            ]
        }
        , {
            "id": "4",
            "type_project": "Design & Renovation Coffe",
            "name_project": "Health Museum Café",
            "role_project": " My role was to design and oversee the renovation of the Health Museum Café.",
            "description_project": "The project involved adding a mezzanine floor and creating a bridge to enhance the added value, offering an excellent view of the surroundings. A mix of industrial and modern elements was incorporated to create a dynamic design. Elements like light, water, and trees were added to enrich the project’s atmosphere. Using Grasshopper software, ceiling voids were modeled to maximize natural light throughout the year. The design also focused on preserving previous elements of the project to maintain social sustainability.",
            "project_intro_img": "/assets/custle/intor.jpg",
            "year_project": 2015,
            "location_project": "Mashhad, Iran",
            "area_project": "1,000 sqm",
            "project_detail_img": [
                project_detail_img_coffe01,
                project_detail_img_01,
                project_detail_img_02,
                project_detail_img_03,
                project_detail_img_04,
                project_detail_img_05,
                project_detail_img_06,
                project_detail_img_07,
                project_detail_img_08,
                project_detail_img_09,
                project_detail_img_10,
                project_detail_img_11,
                project_detail_img_12,
                project_detail_img_13,
                project_detail_img_14,
                project_detail_img_15,
                project_detail_img_16,
                project_detail_img_17,
                project_detail_img_18,
                project_detail_img_19,
                project_detail_img_20,
                project_detail_img_21,
                project_detail_img_22,
                project_detail_img_23,
                project_detail_img_24,
                project_detail_img_25,
                project_detail_img_26,
                project_detail_img_27

            ]
        },
        {
            "id": "5",
            "type_project": "Architectural Design",
            "name_project": "Office & Commercial Building",
            "role_project": " The architectural design blends traditional and modern styles, combining heritage with innovation.",
            "description_project": "The project was designed with a view of the garden, blending traditional architecture with inspiration from modern design based on the client's request. It includes the facade, office floors, commercial spaces, and the boardroom. Detailed phase two drawings have been provided to the client, ensuring the design captures both the aesthetic and functional needs while respecting the traditional elements and incorporating modern architectural principles.",
            "project_intro_img": "/assets/ferdowsi/1.jpg",
            "year_project": 2015,
            "location_project": "Mashhad, Iran",
            "area_project": "4,500 sqm",
            "project_detail_img": [
                project_detail_ferdosi,
                project_detail_ferdosi2,
                project_detail_ferdosi3
            ]
        }
        ,
        {
            "id": "6",
            "type_project": "Villa Complex Design",
            "name_project": "Ferdowsi Villa",
            "role_project": " Our role was the design of a modern villa complex with interior design, facade, and landscape.",
            "description_project": "The client requested a complete design for a villa, including both the interior and exterior spaces, as well as landscape design. The villa was to be designed in a modern style, reflecting contemporary architectural trends. The design aimed to create a seamless flow between the indoor and outdoor spaces, with careful attention to the surrounding landscape to enhance the villa's overall aesthetic. Every aspect of the design, from the facade to the interior layout, was planned to ensure a harmonious, modern living environment.",
            "project_intro_img": "/assets/vila/1.jpg",
            "year_project": 2015,
            "location_project": "Mashhad, Iran",
            "area_project": "4,500 sqm",
            "project_detail_img": [
                project_detail_vila
            ]
        }
    ]



    useEffect(() => {
        const foundProject = data.find((p) => p.id === id);
        setProject(foundProject);
    }, [id]);
    if (!project) {
        return <h2>پروژه یافت نشد</h2>;
    }






    return (
        <>


            {/* project detail */}
            <div id='project_detail_content'>
                <p id='type_project'>{project.type_project}</p>
                <h1 id='name_project'>{project.name_project}</h1>


                <div id='project_description'>


                    <div id='container_description'>
                        <div id='container_role'>

                            <p id='title_role_project'>
                                Role Project:
                            </p>

                            <p id='role_project'>

                                {project.role_project}
                            </p>
                            <p id='title_role_project'>
                                Project Description:
                            </p>
                            <p id='description_project'>
                                {project.description_project}
                            </p>
                        </div>
                        <div id='project_intro_img'>
                            <img src={project.project_intro_img} alt="logo" />
                        </div>
                    </div>

                </div>
                <div id='detail_project'>
                    <div id='container_detail'>
                        <span>Year</span>
                        <p id='year_project'>
                            {project.year_project}
                        </p>
                    </div>
                    <div id='container_detail'>
                        <span>Location</span>

                        <p id='location_project'>
                            {project.location_project}
                        </p>
                    </div>
                    <div id='container_detail'>
                        <span>Area</span>

                        <p id='area_project'>
                            {project.area_project}
                        </p>
                    </div>
                </div>

                <div id='project_detail_img'>
                    {project.project_detail_img.map((media, index) =>
                        media.toLowerCase().endsWith(".mp4") ? (
                            <video key={index} width="300" controls>
                                <source src={media} type="video/mp4" />
                            </video>
                        ) : (
                            <img key={index} src={media} alt={`Project Image ${index}`} width="300" />
                        )
                    )}
                </div>
            </div>







        </>
    )
}

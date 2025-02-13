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

import project_detail_img_funzone1 from '../assets/funzone/_MG_9646.jpg'; // import کردن تصویر
import project_detail_img_funzone2 from '../assets/funzone/_MG_9652.JPG'; // import کردن تصویر
import project_detail_img_funzone3 from '../assets/funzone/C0010S03.MP4'; // import کردن تصویر
import project_detail_img_funzone4 from '../assets/funzone/C0053S03.MP4'; // import کردن تصویر
import project_detail_img_funzone5 from '../assets/funzone/C0077S03.MP4'; // import کردن تصویر
import project_detail_img_funzone6 from '../assets/funzone/C0085S03.MP4'; // import کردن تصویر
import project_detail_img_funzone7 from '../assets/funzone/C0104S03.MP4'; // import کردن تصویر
import project_detail_img_funzone8 from '../assets/funzone/C0088S03.MP4'; // import کردن تصویر
import project_detail_img_funzone9 from '../assets/funzone/C0115S03.MP4'; // import کردن تصویر
import project_detail_img_funzone10 from '../assets/funzone/C0118S03.MP4'; // import کردن تصویر
import project_detail_img_funzone11 from '../assets/funzone/C0152S03.MP4'; // import کردن تصویر
import project_detail_img_funzone12 from '../assets/funzone/_MG_9666.JPG'; // import کردن تصویر
import project_detail_img_funzone13 from '../assets/funzone/_MG_9670.JPG'; // import کردن تصویر
import project_detail_img_funzone14 from '../assets/funzone/_MG_9676.JPG'; // import کردن تصویر
import project_detail_img_funzone15 from '../assets/funzone/_MG_9682.JPG'; // import کردن تصویر
import project_detail_img_funzone16 from '../assets/funzone/_MG_9693.JPG'; // import کردن تصویر
import project_detail_img_funzone17 from '../assets/funzone/_MG_9705.JPG'; // import کردن تصویر
import project_detail_img_funzone18 from '../assets/funzone/_MG_9717.JPG'; // import کردن تصویر
import project_detail_img_funzone19 from '../assets/funzone/_MG_9728.JPG'; // import کردن تصویر
import project_detail_img_funzone20 from '../assets/funzone/_MG_9733.JPG'; // import کردن تصویر
import project_detail_img_funzone21 from '../assets/funzone/_MG_9754.JPG'; // import کردن تصویر
import project_detail_img_funzone22 from '../assets/funzone/_MG_9764.JPG'; // import کردن تصویر
import project_detail_img_funzone23 from '../assets/funzone/_MG_9802.JPG'; // import کردن تصویر
import project_detail_img_funzone24 from '../assets/funzone/_MG_9812.JPG'; // import کردن تصویر
import project_detail_img_funzone25 from '../assets/funzone/_MG_9817.JPG'; // import کردن تصویر
import project_detail_img_funzone26 from '../assets/funzone/C0193S03.MP4'; // import کردن تصویر

// project_detail_img nilu


import project_detail_img_nilu1 from '../assets/nilofar/1-1.png'; // import کردن تصویر
import project_detail_img_nilu2 from '../assets/nilofar/2-1.png'; // import کردن تصویر
import project_detail_img_nilu3 from '../assets/nilofar/3-1.png'; // import کردن تصویر
import project_detail_img_nilu37 from '../assets/nilofar/37.jpg'; // import کردن تصویر
import project_detail_img_nilu38 from '../assets/nilofar/38.jpg'; // import کردن تصویر
import project_detail_img_nilu39 from '../assets/nilofar/39.jpg'; // import کردن تصویر
import project_detail_img_nilu40 from '../assets/nilofar/40.jpg'; // import کردن تصویر







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
                project_detail_img_funzone1,
                project_detail_img_funzone2,
                project_detail_img_funzone3,
                project_detail_img_funzone4,
                project_detail_img_funzone5,
                project_detail_img_funzone6,
                project_detail_img_funzone7,
                project_detail_img_funzone8,
                project_detail_img_funzone9,
                project_detail_img_funzone10,
                project_detail_img_funzone11,
                project_detail_img_funzone12,
                project_detail_img_funzone13,
                project_detail_img_funzone14,
                project_detail_img_funzone15,
                project_detail_img_funzone16,
                project_detail_img_funzone17,
                project_detail_img_funzone18,
                project_detail_img_funzone19,
                project_detail_img_funzone20,
                project_detail_img_funzone21,
                project_detail_img_funzone22,
                project_detail_img_funzone23,
                project_detail_img_funzone24,
                project_detail_img_funzone25,
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

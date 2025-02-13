import { Link } from "react-router-dom";
import projectImage1 from '../assets/kowsar/Enscape_2021-12-22-19-25-10-Photoroom.jpg'; // import کردن تصویر
import projectImage2 from '../assets/funzone/intro.jpg'; // import کردن تصویر
import projectImage3 from '../assets/nilofar/intro.jpg'; // import کردن تصویر


import { useEffect, useState } from "react";


function All_projects() {


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





    return (
        <>

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





        </>
    );
}

export default All_projects;

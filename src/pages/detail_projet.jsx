import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../assets/Styles/responsive-page-detail-project-break_point.scss';
import logo from '../assets/logo.png'




export default function Detail_project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const foundProject = data.all_projects.find((p) => p.id === id);
                setProject(foundProject);

            });
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

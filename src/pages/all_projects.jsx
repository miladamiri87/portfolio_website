import { Link } from "react-router-dom";

import { useEffect, useState } from "react";


function All_projects() {


    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data.all_projects));
    }, []);




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

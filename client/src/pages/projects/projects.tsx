import { useEffect, useState } from 'react';
import Card from '../../components/Projects/Card';
import CardSkeleton from '../../components/Loader/CardSkeleton';
const Projects = () => {
    const [isProjectsLoading, setIsProjectsLoading] = useState<boolean>(true);
    const [projectsData, setProjectsData] = useState<object[]>([]);
    useEffect(() => {
        setTimeout(() => {
            setIsProjectsLoading(false);
        }, 2000);
    }, []);
    useEffect(() => {
        setProjectsData([{ projectId: "123456" }, { projectId: "123456" }, { projectId: "123456" }, { projectId: "123456" }, { projectId: "123456" }, { projectId: "123456" }, { projectId: "123456" }]);
    }, [])
    return (
        <>
            <center>
                <h1 className=" text-2xl font-bold ">My Projects</h1>
                <p className="text-sm text-gray-500 mb-8 mt-2 w-[900px] max-lg:w-auto px-[10%] ">Here are some of the projects I've worked on. They showcase my skills and experience in various areas of software development.</p>
            </center>
            {
                isProjectsLoading ? (
                    <div className="flex flex-wrap w-auto justify-center  h-auto gap-5 ">
                        {
                            Array.from("VikashKum").map((_, index) => (
                                <CardSkeleton key={`CSPR-${index}`} />
                            ))
                        }
                    </div>
                ) : (
                    projectsData.length > 0 ? (
                        <div className="flex flex-wrap w-auto justify-center  h-auto gap-5 ">
                            {
                                projectsData.map((projectData, index) => (
                                    <Card key={`PD-${index}`} projectData={projectData} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-[50vh] w-full">
                            <h1 className="text-2xl font-bold text-gray-500">No Projects Found</h1>
                        </div>
                    )

                )
            }
        </>
    );
}

export default Projects;

import { Image } from "@nextui-org/react";

const ProjectsDetails = () => {
    return (
        <>
            <section className="dark:bg-[#0a0a0a] bg-[rgba(255,255,255,0.97)] drop-shadow-[0px_0px_2px_#d8d8d8] select-none  w-full h-[45vh] rounded-[10px] dark:drop-shadow-[inset_0px_0px_2px_#1c1c1c] border-[1px]  p-5 mt-5 border-[#d8d8d8] dark:border-[#1c1c1c]">
                <div className="w-[450px] h-full flex justify-center items-center">
                    <Image
                        width={500}
                        height={350}
                        className="rounded-[5px] shadow-[0px_0px_2px_#1c1c1c] border-[1px] border-[#1c1c1c] h-[40vh] w-full"
                        alt=""
                        src="/assets/images/images/first-project.png"
                    />
                </div>
            </section>
        </>
    );
}

export default ProjectsDetails;

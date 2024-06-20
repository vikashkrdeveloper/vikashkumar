import { Image } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
interface CartProps {
    projectData: object;
}
const Card: React.FC<CartProps> = ({ projectData }) => {
    return (
        <>
            <div className=" min-w-[300px] max-w-[350px] h-[260px]  gap-12 transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip my-2  shadow-[0px_0px_20px_#b9b9b9cc] dark:shadow-[0px_0px_20px_#0a0a0a] hover:dark:shadow-[inset_0px_0px_20px_#0a0a0a] bg- [#1a1a1a]">
                <div className="relative shadow-black/5 w-full h-[auto] shadow-none rounded-none" style={{ maxWidth: "fit-content;" }}>
                    <Image src="/assets/images/images/first-project.png" className=" rounded-bl-[0px] w-full h-[130px] rounded-br-[0px] rounded-tl-3xl rounded-tr-3xl" width={350} height={120} alt="First Project" />
                </div>
                <div className="grid justify-center p-[5%]">
                    <h1>TechKshitiz</h1>
                    <p className="text-sm text-gray-500  w-full h-[40px] truncate text-wrap">The Technical Club at Government Engineering College, Siwan, is a dynamic platform for innovation and technical excellence. Founded on January 18, 2024, the club aims to foster a culture of technological curiosity and practical skill development among students.
                    </p>
                    <NavLink to={`/projects/details/${Object(projectData).projectId}`} className="flex items-center text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity mt-2 text-sm font-semibold cursor-pointer">
                        View Details
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="m10 17 5-5-5-5v10z"></path></svg>
                    </NavLink>
                </div>
            </div>

        </>
    );
}

export default Card;

import { Request, Response } from "express";
import { projectModel } from "../../model/products/projects";

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await projectModel.find();
        res.status(200).json({ message: "Project data fetch sucessfully", data: projects, status: true, statusCode: 200 });
        return;
    } catch (error) {
        res.status(500).json({ message: "Project data fetch error", error: error, status: false, statusCode: 500 });
        return;
    }
};
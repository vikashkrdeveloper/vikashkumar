import express from "express";
import { getProjects } from "../../controllers/un_authorize/projects";
export const unAuthorizeRoute = express.Router();

unAuthorizeRoute.get('/projects', getProjects);


import { dbConnection } from "../../config/db";
const projectSchema = new dbConnection.Schema({
    projectId: {
        type: String,
        required: true,
        unique: true
    },
    projectName: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    projectType: {
        type: String,
        trim: true,
        required: true
    },
    projectAuthor: {
        type: String,
        required: true
    },
    projectAuthorId: {
        type: String,
        required: true
    },
    projectAuthorEmail: {
        type: String,
        required: true
    },
    projectAuthorPhone: {
        type: String,
        required: true
    },
    projectAuthorRole: {
        type: String,
        required: true
    },
    projectAvatar: {
        type: String,
        required: true
    },
    projectAuthorAvatar: {
        type: String,
        required: true
    },
    projectAuthorBio: {
        type: String,
        required: true
    },
    projectAuthorSkills: {
        type: Array,
        required: true
    },
    projectAuthorLocation: {
        type: String,
        required: true
    },
    projectAuthorSocials: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const projectModel = dbConnection.model("projects", projectSchema);
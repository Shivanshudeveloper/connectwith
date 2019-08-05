const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required: true
    },
    ProjectOwner: {
        type: String,
        required: true
    },
    ProjectCategory: {
        type: String,
        required: true
    },
    ProjectKeyPoints: {
        type: String,
        required: true
    },
    ProjectVisibility: {
        type: String,
        required: true
    },
    ProjectRepositoryLink: {
        type: String,
        required: true
    },
    ProjectCreatedBy: {
        type: String,
        required: true
    },
    ProjectID: {
        type: String,
        required: true
    },
    ProjectDescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Project = mongoose.model('projects', projectSchema)
module.exports = Project
// Express
const express = require('express')
const router = express.Router()
// User Module
const User = require('../models/Users')
// Project Module
const Project = require('../models/Project')
// UUID
const uuidV1 = require('uuid/v1')
// @For valid authentication page
const { ensureAuthenticated } = require('../config/auth')

// @Functions
function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

// Welcome Page
router.get('/', (req, res) => {
    res.render('welcome')
})
// Dashboard Page
router.get('/dashboard',ensureAuthenticated, (req, res) => {
    let noProject = []
    req.session.name = req.user.name
    req.session.email = req.user.email
    req.session.admission = req.user.admission
    req.session.id = req.user.id
    User.find( {email: req.session.email} )
        .then(user => {
            Project.find( {} )
                .then(project => {
                    if (isEmptyObject(project)) {
                        noProject.push({ msg: 'No Projects Yet!' });
                        res.render('dashboard', {
                            user: user,
                            project: project,
                            noProject
                        })
                    } else {
                        res.render('dashboard', {
                            user: user,
                            project: project
                        })
                    }
                })
        })
        .catch(err => console.log(err))
})
// Mentor Page
router.get('/mentor', ensureAuthenticated, (req, res) => {
    User.find( {email: req.session.email} )
        .then(user => {
            res.render('mentor', {
                user: user
            })
        })
        .catch(err => console.log(err))
})
// View Project Page
router.get('/viewproject/:id', ensureAuthenticated, (req, res) => {
    const projectId = req.params.id
    User.find( {email: req.session.email} )
            .then(user => {
                Project.find({ ProjectID: projectId })
                .then(project => {
                    res.render('viewproject', {
                        user: user,
                        project: project
                    })
                })
            })
        .catch(err => console.log(err))
})

// Message Page
router.get('/message', ensureAuthenticated, (req, res) => {
    User.find( {email: req.session.email} )
        .then(user => {
            res.render('message', {
                user: user
            })
        })
        .catch(err => console.log(err))
})
// Apps Page
router.get('/apps', ensureAuthenticated, (req, res) => {
    User.find( {email: req.session.email} )
        .then(user => {
            res.render('apps', {
                user: user
            })
        })
        .catch(err => console.log(err))
})
// Initiative Project
router.get('/initiativeproject', ensureAuthenticated, (req, res) => {
    User.find( {email: req.session.email} )
        .then(user => {
            res.render('initiativeproject', {
                user: user
            })
        })
        .catch(err => console.log(err))
})
// Launch Project @POST Request
router.post('/launchproject', (req, res) => {
    const { projectName, projectOwner, projectCategory, keyPoints,  visibility, links } = req.body
    var description = req.body.description
    let errors = []
        success = []
    if (!projectName || !projectOwner || !keyPoints || !description) {
        errors.push({ msg: 'Please enter all fields' });
    }
    if (errors.length > 0) {
        User.find( {email: req.session.email} )
        .then(user => {
            res.render('initiativeproject', {
                user: user,
                errors,
                projectName,
                projectOwner,
                keyPoints,
            })
        })
        .catch(err => console.log(err))
    } else {
        var category = req.body.categoryProject
            repLinks = req.body.repository
            email = req.session.email
            
        const projectId = uuidV1()
        const newProject = new Project({
            ProjectName: projectName,
            ProjectOwner: projectOwner,
            ProjectCategory: category,
            ProjectKeyPoints: keyPoints,
            ProjectVisibility: visibility,
            ProjectRepositoryLink: repLinks,
            ProjectCreatedBy: email,
            ProjectID: projectId,
            ProjectDescription: description
        })
        newProject.save()
            .then(() => {
                User.find( {email: req.session.email} )
                .then(user => {
                    Project.find({ ProjectID: projectId })
                    .then(project => {
                        res.render('viewproject', {
                            user: user,
                            project: project
                        })
                    })
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
})

module.exports = router
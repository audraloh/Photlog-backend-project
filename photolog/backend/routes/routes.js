const express = require('express')
const router = express.Router()
const ProfileSchema = require('../models/Nuevan.js')
const PhotoSchema = require('../models/photo.js')

//get for ProfileSchema
router.get('/', (req, res) => {
    ProfileSchema.find(req.query)
    //'then' happens if find is succesful
    .then(profile => {
      console.log("succesfully got entire db!")
      console.log(profile)
      res.json(profile)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

//get for PhotoSchema
router.get('/getphoto', (req, res) => {
  PhotoSchema.find(req.query)
  //'then' happens if find is succesful
  .then(photo => {
    console.log("succesfully got entire db!")
    console.log(photo)
    res.json(photo)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
    res.json(err)
  })
})

//post for ProfileSchema
//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
  ProfileSchema.create(req.body)
    .then(profile => {
      console.log(profile)
      res.send(profile)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

//post for PhotoSchema
//we will be using the '/add' to do a POST request
router.post('/add/photo', (req, res) => {
  PhotoSchema.create(req.body)
    .then(photo => {
      console.log(photo)
      res.send(photo)
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})


//push for ProfileSchema
router.put('/:id', (req, res) => {
    ProfileSchema.findByIdAndUpdate(req.params.id, req.body)
      .then(updated => {
        // returns the previously saved model
        res.send(updated)
      })
      .catch(err => {
        res.json(err)
      })
})

//push for PhotoSchema
router.put('/:id/photo', (req, res) => {
  PhotoSchema.findByIdAndUpdate(req.params.id, req.body)
    .then(updated => {
      // returns the previously saved model
      res.send(updated)
    })
    .catch(err => {
      res.json(err)
    })
})

//delete for ProfileSchema
router.delete('/:id', (req, res) => {
  ProfileSchema.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})

//delete for PhotoSchema
router.delete('/:id/delete/photo', (req, res) => {
  PhotoSchema.findByIdAndDelete(req.params.id)
  .then(deleted => {
    res.send(deleted)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router
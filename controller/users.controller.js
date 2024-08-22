const express = require('express'),
router = express.Router()

const { raw } = require('body-parser')
//https:localhost:3000/opi/employees/

const service = require('../services/users.service')



router.get('/', async (req, res)=>{

  const users =  await service.getAllUsers()

   res.send(users)
})

router.get('/:id', async (req, res)=>{

  const users =  await service.getUsersById(req.params.id)

  if(users==undefined)
    res.status(404).json('no record with given id :' +req.params.id)
  else
   res.send(users)
})

router.delete('/:id', async (req, res)=>{

  const affectedRows =  await service.deleteUsers(req.params.id)

  if(affectedRows==0)
    res.status(404).json('no record with given id :' +req.params.id)
  else
  
   res.send('deleted successfuly')
})

router.post('/', async (req, res)=>{

   await service.addOrEditUsers(req.body)

   res.status(201).send('created successfully')
  
})
router.put('/:id', async (req, res)=>{

  const affectedRows =await service.addOrEditUsers(req.body, req.params.id)

  if(affectedRows==0)
    res.status(404).json('no record with given id :' +req.params.id)
  else
  
   res.send('update successfuly')  
 
})

module.exports = router
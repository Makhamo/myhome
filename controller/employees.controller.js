const express = require('express'),
router = express.Router()

const { raw } = require('body-parser')
//https:localhost:3000/opi/employees/

const service = require('../services/employees.service')



router.get('/', async (req, res)=>{

  const employees =  await service.getAllEmployees()

   res.send(employees)
})

router.get('/:id', async (req, res)=>{

  const employees =  await service.getEmployeesById(req.params.id)

  if(employees==undefined)
    res.status(404).json('no record with given id :' +req.params.id)
  else
   res.send(employees)
})

router.delete('/:id', async (req, res)=>{

  const affectedRows =  await service.deleteEmployee(req.params.id)

  if(affectedRows==0)
    res.status(404).json('no record with given id :' +req.params.id)
  else
  
   res.send('deleted successfuly')
})

router.post('/', async (req, res)=>{

   await service.addOrEditEmployees(req.body)

   res.status(201).send('created successfully')
  
})
router.put('/:id', async (req, res)=>{

  const affectedRows =await service.addOrEditEmployees(req.body, req.params.id)

  if(affectedRows==0)
    res.status(404).json('no record with given id :' +req.params.id)
  else
  
   res.send('update successfuly')  
 
})

module.exports = router
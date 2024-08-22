const db=require('../db')

module.exports.getAllUsers = async() =>{

    const [records] = await db.query("SELECT * FROM users")
  

    return records;
}

module.exports.getUsersById = async(id) =>{

    const [[record]] = await db.query("SELECT * FROM users WHERE id =?" ,[id] )
    

    return record;
} 

module.exports.deleteUsers = async(id) =>{

    const [{affectedRows}] = await db.query("DELETE FROM users WHERE id =?" ,[id])
   
 
    return affectedRows;
}  

module.exports.addOrEditUsers = async(obj,id=0) =>{

    const [[[{affectedRows}]]] = await db.query("CALL usp_users_add_or_edit(?,?,?,?,?,?,?,?)" ,[id, obj.name, obj.email, obj.Password, obj.Contacts, obj.Age, obj.isActive, obj.CreatedAt])
   
 
    return affectedRows;
}  
const mongoose = require(`mongoose`)

const Task = require(`./task`)
const { json } = require("body-parser")


exports.getAll = async (req,res, next) =>{
    try {
        const tasks = await Task.find()

        
     if (!tasks && tasks === 0 ) { return res.status(404).json({
        message:'no tasks'})
     }
    
     return res.status(200).json({tasks})

    } catch (error) {
        console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
   
   

},


exports.addTask = async (req, res, next) =>{
    try{
    const {task} = req.body

    const newTask = new Task ({
        task,

    })

    if (!task) {return res.status(400).json({message:`all fields are required`})
        
    }

    const savedTask = await newTask.save()
    return res.status(201).json({message: `new task added`, task})

    }
    catch (error) {
        console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    
},

exports.updateTask = async (req, res, next) => {
    const taskId = req.params.id 
    const {completed} =req.body
    try {
       const task = await Task.findByIdAndUpdate(taskId, {completed,}, 
        {new:true}
       )
        if (!task) { return res.status(400).json({message: `task doesn't exist`})
        }
         if (!mongoose.isValidObjectId(taskId)) {
            return res.status(400).json({message: `task doesn't exist`})
            
         }
         return res.status(201).json({task})


    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

exports.deleteTask = async(req, res, next) => {
    const taskId = req.params.id
    try {
        const task = await Task.findByIdAndDelete(taskId)

        if (!task) {
            return res.status(400).json({message: `task wasn't deleted`})
            }

            return res.status(201).json({message: `task deleted auccesfully`})
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
},

exports.getTask = async (req, res, body) => {
const taskId= req.params.id
try {
    const task = await Task.findById(taskId)
    if (!task) {
        return res.status(400).json({message: `task doesn't exist`})
        }

        return res.status(201).json({task})

} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
}
},


exports.getAllCompleted = async (req,res, next) =>{
    try {
        const tasks = await Task.find({completed: true}).select(`task`)

        
     if (!tasks && tasks === 0 ) { return res.status(404).json({
        message:'no tasks'})
     }
    
     return res.status(200).json({tasks})

    } catch (error) {
        console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
   
   

}
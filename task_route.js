const express = require(`express`)
const { getAll, addTask, updateTask, deleteTask, getTask, getAllCompleted, updateCompleted } = require("./task_controller")

const router = express.Router()

router.get(`/all`, getAll)

router.get(`/completed`, getAllCompleted)

router.post(`/add`, addTask)

router.put(`/update/:id`, updateTask)

router.put(`/update/:id`, updateCompleted)

router.delete(`/delete/:id`, deleteTask)

router.get(`/:id`, getTask)


module.exports = router
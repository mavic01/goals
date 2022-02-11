//in order not to use .then .catch or async await.. we can install and use the EXPRESS-ASYNC-HANDLER package
const asyncHandler = require("express-async-handler")

// @desc    Get goals
// @route   GET api/goals
// @access  Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:"This is a get GOALS request"})
})

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const setGoals = asyncHandler(async(req, res) => {
    if (!req.body.text){
        res.status(400) //instead of using this...json({message: "Please add a text field"}).. u can use the express error handler
        throw new Error("please add a text field now")
    }
    res.status(200).json({message:"set goals"})
})

// @desc    Update goals
// @route   PUT api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:"update goals"})
})

// @desc    Delete goals
// @route   DELETE api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}
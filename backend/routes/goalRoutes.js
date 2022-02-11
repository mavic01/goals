const router = require("express").Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require("../controllers/goalControllers")

router.route("/").get(getGoals).post(setGoals)
router.route("/:id").put(updateGoals).delete(deleteGoals)

// router.get("/", getGoals) - both were replaced by the code above
// router.post("/", setGoals)

// router.put("/:id", updateGoals) - also replaced
// router.delete("/:id", deleteGoals)

module.exports = router
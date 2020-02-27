const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({router:'Cohorts'})
})

module.exports = router;
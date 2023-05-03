const express = require("express");
const router = express.Router();
const CounterPartyDetail = require('./FormModel');

router.get('/', (req, res) => {
    res.send('Backend for form working!!');
})

router.post('/CounterPartyDetails', async (req, res) => {
    const formDetails = await CounterPartyDetail.create({ ...req.body });
    console.log(formDetails);
    //saving the document
    await formDetails.save();
    res.send('Posted');
})

module.exports = router;
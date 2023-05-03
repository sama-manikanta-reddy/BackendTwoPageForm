const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    counterpartyname: {
        type: String,
        required: true
    },
    counterpartysignername: {
        type: String,
        required: true
    },
    counterpartyaddress: {
        type: String,
        required: true
    },
    counterpartyemail: {
        type: String,
        required: true
    },
    counterpartycontact: {
        type: String,
        required: true
    },
    governinglaw: {
        type: String,
        required: true
    },
    agreementdate: {
        type: Date,
        required: true
    },
    dateoftermination: {
        type: Date,
        required: true
    },
    indemnity: {
        type: String,
        required: true
    },
    breachofobligation: {
        type: String,
        required: true
    }
});

const CounterPartyDetail = mongoose.model('CounterPartyDetail', formSchema);

module.exports = CounterPartyDetail;
import express from 'express'

const LineGateway = express();

LineGateway.post('/webhook', function (req, res, next) {
    console.log(req.body);
    
    res.status(200).json({success:true})
})

export default LineGateway
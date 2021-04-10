import express from 'express'

const LineGateway = express();

LineGateway.post('/webhook', function (res, req, next) {
    console.log(req);
})

export default LineGateway
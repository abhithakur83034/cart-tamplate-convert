const Address = require('../model/address');

const address =async(req,res)=>{
    // console.log(req.body)
    try {
        let Add = await Address.insertMany(req.body)
        return res.status(201).json({ Add })
    } catch (error) {
        console.error('Error in sending  feedback:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports={
    address
}
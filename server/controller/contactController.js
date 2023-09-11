const Contact = require('../model/contact');

const addcontact=async(req,res)=>{
    console.log("contact",req.body)
    try {
        const contact = await Contact.insertMany(req.body)
        return res.status(201).json({ contact })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addcontact
}
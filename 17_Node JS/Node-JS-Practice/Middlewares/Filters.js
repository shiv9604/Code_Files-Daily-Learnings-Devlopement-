    const ageFilter = (req,res,next)=>{
        if(req.query.age==undefined){
            res.send("Please provide your age.")
        }
        else if(req.query.age<18){
            res.send('You Cannot acess this url, as your age is not 18+.')
        }
        else{
            next()
        }
    }

module.exports = ageFilter
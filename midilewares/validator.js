exports.validate = () => {
    return (req, res, next) => {
        if(!req.body.name){
            res.status(400)
            res.json({error:"validation_error",error_description:"name is required"})
            return
        }
      next()
    }
}

const validationBodyMovies = (req, res, next) => {
    let {title, year} = req.body

    if(title === undefined || year === undefined){
        res.json({
            message: "Title and Year are Required"
        })
    }else{
        next()
    }
}

module.exports = {validationBodyMovies}
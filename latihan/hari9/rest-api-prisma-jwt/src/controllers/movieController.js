
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()



const createMovie = async (req, res) => {
    let {title, year, categoryId} = req.body
        try{
            const movies = await prisma.movies.create({
                data: {
                    title, year, categoryId
                },
                })

                res.json({
                    info : movies,
                    message : "Movie was succesfully Created",
                    status: "Success"
                })
                return
        }catch(err){
            res.json({
                info: err.message,
                message: "Movie was unsuccesfully Created",
                status: "Unsuccess"
            })
        }
}

const readMovie = async (req, res) => {
    try{
    const movies = await prisma.movies.findMany()
        res.json({
            movies,
            message : "Movie was succesfully Fetch",
            status: "Success"
        })
        return
    }catch(err){
        res.status(404).json({
            data : null,
            message : "Movie was Unsuccesfully Fetch",
            status: "Error"
        })
    }
}


const readMovieById = async (req, res) => {
    let {id} = req.params
    try{
    const movies = await prisma.movies.findUnique({
    where: {
        id: Number(id)
    }
    })

    if(movies){
        message="Movie Was Succesfully Fetch"
        stat="Success"
        status=200
    }else{
        message="Movie Was not Found"
        stat="Not Found"
        status=404
    }

    res.status(status).json({
        info: movies,
        message,
        status:stat
    })
    return
    }catch(err){
        res.json({
            info: movies,
            message: err.message,
            status: "error"
        })
    }
}


const updateMovie = async (req, res) => {
    let {title, year} = req.body
    let {id} = req.params
    
    try{
    const movies = await prisma.movies.update({
        where: {
            id: Number(id),
        },
        data: {
            title,
            year
        },
    })

    res.json({
        info : movies,
        message : "Movie was Successfuly Updated",
        status: "success"
    })
    return
    }catch(err){
        res.json({
        info : null,
        message : "Movie was Notfound",
        status: "not found"
    })
    }
}

const deleteMovie = async (req, res) => {
    let {id} = req.params
    try{
    const movies = await prisma.movies.delete({
        where: {
            id: Number(id),
        },
    })

    res.json({
        info: null,
        message: "Movie was successfully Deleted",
        status : "success"
    })
    
    }catch(err){
        res.json({
            info: null,
            message: err.message,
            status : "error"
        })
    }
    
}

module.exports = {createMovie, readMovie, readMovieById, updateMovie, deleteMovie}
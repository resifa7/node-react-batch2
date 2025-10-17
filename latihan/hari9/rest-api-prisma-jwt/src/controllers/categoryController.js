
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()


const createCategory = async (req, res) => {
    let {name} = req.body
        try{
            const categoryCreate = await prisma.category.create({
                data: {
                    name
                },
                })

                res.json({
                    info : categoryCreate,
                    message : "Category was succesfully Created",
                    status: "Success"
                })
                return
        }catch(err){
            res.json({
                info: null,
                message: "Category was unsuccesfully Created",
                status: "Unsuccess"
            })
        }
}

const readCategory = async (req, res) => {
    try{
    const categoryRead = await prisma.movies.findMany()
        res.json({
            info : categoryRead,
            message : "Category was succesfully Fetch",
            status: "Success"
        })
        return
    }catch(err){
        res.status(404).json({
            data : err.message,
            message : "Category was Unsuccesfully Fetch",
            status: "Error"
        })
    }
}


const readCategoryById = async (req, res) => {
    let {id} = req.params
    try{
    const categoryRead = await prisma.category.findUnique({
    where: {
        id: Number(id)
    }
    })

    if(categoryRead){
        message="Category Was Succesfully Fetch"
        stat="Success"
        status=200
    }else{
        message="Category Was not Found"
        stat="Not Found"
        status=404
    }

    res.status(status).json({
        info: categoryRead,
        message,
        status:stat
    })
    return
    }catch(err){
        res.json({
            info: categoryRead,
            message: err.message,
            status: "error"
        })
    }
}


const updateCategory = async (req, res) => {
    let {title, year} = req.body
    let {id} = req.params
    
    try{
    const categoryUpdate = await prisma.category.update({
        where: {
            id: Number(id),
        },
        data: {
            title,
            year
        },
    })

    res.json({
        info : categoryUpdate,
        message : "Category was Successfuly Updated",
        status: "success"
    })
    return
    }catch(err){
        res.json({
        info : null,
        message : "Category was Notfound",
        status: "not found"
    })
    }
}

const deleteCategory = async (req, res) => {
    let {id} = req.params
    try{
    await prisma.category.delete({
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

module.exports = {createCategory, readCategory, readCategoryById, updateCategory, deleteCategory}

console.log("test")
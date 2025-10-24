const express = require('express');
const { handleInsertCategory, handleReadCategory, handleUpdateCategory, handleDeleteCategory, handleReadCategoryByName } = require('../controller/controllerCategory');
const { handleJWTauth } = require('../midleware/jwtAuth');
const routerCategory = express.Router();


routerCategory.post("/add", handleInsertCategory)
routerCategory.get("/view", handleReadCategory)
routerCategory.get("/view/name", handleReadCategoryByName)
routerCategory.put("/change/:id", handleUpdateCategory);
routerCategory.delete("/remove/:id", handleDeleteCategory);

module.exports = {routerCategory}


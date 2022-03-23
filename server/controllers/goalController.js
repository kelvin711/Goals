const asyncHandler = require('express-async-handler')

module.exports = {
    showAllGoals: asyncHandler(async (req, res) => {
        res.status(200).json({ message: "Still Goal og" })
        // Product.find() //mongoose built in queries
        //     .then( Products => res.json({ allProducts : Products}))//Products is all of the prods, then 
        //     //responding with a json object and putting it in the allProducts variable
    }),
    createGoal: asyncHandler(async (req,res) => { //create is the restful pattern
        if (!req.body.text) {
            res.status(400)
            throw new Error("Please add a text field")
        }
        res.status(200).json({ message: "Set Goal baby og" })
        // Product.create(req.body) //mongoose built in queries
        //     .then( newlyCreatedProduct => res.json({ createProduct : newlyCreatedProduct }))
        //     .catch( err => res.json(err.errors));
    }),
    updateGoal: asyncHandler(async (req, res) => {
        res.status(200).json({ message: `Update that goal og ${req.params.id}` })
        // Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new : true})
        //     .then( updatedProduct => res.json({ updateProduct: updatedProduct }))
        //     .catch( err => res.json(err.errors));
    }), 
    destroyGoal: asyncHandler(async (req, res) => {
        res.status(200).json({ message: `Delete goal kinda sad tho og ${req.params.id}` })
        // Product.deleteOne({ _id: req.params.id })
        // .then( ProductToDelete => res.json({ ProductToDelete : ProductToDelete }))
        // .catch(err => res.json(err.errors));
    }),
    show: asyncHandler(async (req, res) => {
        Product.findOne({ _id: req.params.id})
            .then( oneProduct => res.json({ showProduct : oneProduct }))
            .catch( err => res.json(err.errors));
    }),
}
const asyncHandler = (reqHandler) => {
    (req, res, next) => {
        return Promise.resolve(reqHandler(req, res, next))
        .catch((error) => next(error))
    }
}

export {asyncHandler}







// async handler bandle with try catch 
// const asyncHandler = (function) => async (req, res, next) => {
//     try {
//         await function(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500)
//         .json({
//             success: false,
//             message: error.message
//         })
        
//     }
// }
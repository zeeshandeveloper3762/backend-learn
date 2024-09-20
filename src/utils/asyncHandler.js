const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

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

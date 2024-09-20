import { asyncHandler } from "../utils/asyncHandler.js";

const register = asyncHandler( async (req, res ) => {
  res.status(200).json({message: "all ok"})
})

const registerUser = asyncHandler(async (req, res) => {
  console.log("Register route hit");
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser, register };

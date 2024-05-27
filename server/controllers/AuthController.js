
import  getPrismaInstance  from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const {email} = req.body;
    if(!email){
      return res.status(400).json({message:"Email is required", status: false} );
    }
    const prisma = getPrismaInstance();
  

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (!user) {
      return res.send(user);
      // return res.status(404).json({ message: "User not found", status: false, data: user });
    }
    else{
      return res.send(user);
      // return res.status(200).json({ message: "User found", status: true, data: user });
    }
  } catch (error) {
    next(error);
  }
}; 

export const onBoardUser = async (req, res, next) => {
try {
  const { email, name, about, image:profilePicture } = req.body;
  if (!name || !about || !email || !profilePicture) {
    return res.send("All fields are required");
  }
  const prisma = getPrismaInstance();
  const user = await prisma.user.create({
    data: {
      name,
      about,
      email,
      profilePicture,
    },
  });
  return res.json({ message: "User created", status: true , user});
}
catch (error) {
  next(error);
}
};


export const getAllUsers = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const users = await prisma.user.findMany({
      orderBy:{name:"asc"},
      select:{
        id:true,
        name:true,
        email:true,
        profilePicture:true,
        about:true,
      },
    });
    const usersGroupByInitialLetter={};
    users.forEach((user)=>{
      const initialLetter = user.name.charAt(0).toUpperCase();
      if(!usersGroupByInitialLetter[initialLetter]){
        usersGroupByInitialLetter[initialLetter]=[];
      }
      usersGroupByInitialLetter[initialLetter].push(user);
    });
    return res.status(200).send({ users: usersGroupByInitialLetter });
  } catch (error) {
    next(error);
  }
};
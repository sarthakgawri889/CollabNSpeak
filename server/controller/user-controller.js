import User from "../model/User.js"

export const addUser = async(request,response)=>{
    try{
        let exist = await User.findOne({nickname:request.body.nickname})
        if(exist){
            response.status(200).json({msg: 'user already exist'});
            return;
        }

        const newUser = new User(request.body)
        await newUser.save();
        response.status(200).json(newUser);
    }catch(error){
        return response.status(500).json(error.message)
    }
}
import User from "../model/User.js"

export const addUser = async(request,response)=>{
    try{
        let exist = await User.findOne({sub:request.body.sub})
        if(exist){
            response.status(200).json({msg: 'user already exist'}); 
            return;
        }

        const newUser = new User({
            ...request.body,
            gender: 'choose',
            level: 'Take Test', 
          });
        await newUser.save();
        response.status(200).json(newUser);
    }catch(error){
        return response.status(500).json(error.message)
    }
}

export const getUsers = async (request,response) => {
    try{
        const users = await User.find({});
        return response.status(200).json(users);
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const updateUser = async (req, res) => {
    const { sub, nickname, gender } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate(
            { sub }, // Find the user by their unique identifier
            { nickname, gender }, // Update the nickname and gender
            { new: true } // Return the updated document
        );
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile' });
    }
};
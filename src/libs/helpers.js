import bcrypt from 'bcryptjs'

export const encryptpwd = async (password) => {
    console.log('encrypt pass: ', password)
    const salt = await bcrypt.genSalt(10)
    //Encrypt  Password
    const hash = await bcrypt.hash(password, salt)
    console.log('hash: ',hash)
    return hash
};

export const machpwd = async (password, savePassword) => 
{
    try 
    {
       const  hash = await bcrypt.compare(password,savePassword)
       return hash
    } 
    catch (error) 
    {
        console.log(error)
    }
    
}

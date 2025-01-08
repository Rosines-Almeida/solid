import UserCreate from "./userCreate";
import UserValidation from "./userValidation";

const cliente = new UserCreate('João', 'email');
const clienteValidation = new UserValidation('email', cliente.email);

function  isValidSaveEmail(){
    try{
        clienteValidation.validate();
        cliente.save();
    }
   
    catch(error){
    }
}
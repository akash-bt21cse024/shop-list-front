
import { deletewishlist,postwishlist,getallwishlist } from "../api"




export const wishfilter= async (product,type)=>{
    


    switch(type){
    

        case 'post':{
            await postwishlist(product);
            
            const data= await getallwishlist();
           
            return data;

        }
        case 'delete':{
            await deletewishlist(product);
            const data= await getallwishlist();
            return data;

        }
        default :{
            const data= await getallwishlist();
            return data;
        }
    }
}
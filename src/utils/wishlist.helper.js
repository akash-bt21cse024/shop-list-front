
import { deletewishlist,postwishlist,getallwishlist } from "../api"




export const wishfilter= async (product,type,userid)=>{
    


console.log("wishfilter--",userid)
    switch(type){
    

        case 'post':{
            await postwishlist({userid,product});
            console.log(userid);
            const data= await getallwishlist(userid);
           console.log(data);
            return data;

        }
        case 'delete':{
            const productid=product._id;
            console.log(productid);
            await deletewishlist({userid,productid});
            const data= await getallwishlist(userid);
            return data;

        }
        default :{
            console.log("default--",userid)
            const data= await getallwishlist(userid);
            
            return data;
        }
    }
}
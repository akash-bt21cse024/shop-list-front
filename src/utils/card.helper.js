
import { getallcard,postcard,deletecard } from "../api"




export const cardfilter= async (product,type)=>{

    switch(type){
    

        case 'post':{
            await postcard(product);
            
            const data= await getallcard();
            
            return data;

        }
        case 'delete':{
            await deletecard(product);
            const data= await getallcard();
            return data;

        }
        default :{
            const data= await getallcard();
            return data;
        }
    }
}
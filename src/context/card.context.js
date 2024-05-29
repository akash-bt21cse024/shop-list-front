import {
    useContext,
    createContext,
    useReducer,
    useState 
  } from "react";
import { cardfxn } from "../reducer/card.reducer";
  
  
  const Cardcontext = createContext();
  
  const initialvalue = {   
    type: "",
    product: {}
  };
  
  export const Cardprovider = ({ children }) => {
    const [product,setproduct]=useState({});
    const [card, setcard] = useState([]);
    const [cardreducer, setcardreducer] = useReducer(
      cardfxn,
      initialvalue
    );
    return (
      <Cardcontext.Provider
        value={{ card,product,setproduct, setcard,cardreducer, setcardreducer }}
      >
        {children}
      </Cardcontext.Provider>
    );
  };
  
  export const useCard= () => useContext(Cardcontext);
  
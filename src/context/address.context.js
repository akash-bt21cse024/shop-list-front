import {
    useContext,
    createContext,
    useReducer,
    useState 
  } from "react";
import { addressfxn } from "../reducer/address.reducer";
  

  const Addresscontext = createContext();
  
  const initialvalue = {   
    type: "",
    product: {}
  };
  
  export const Addressprovider = ({ children }) => {
    const [status,setstatus]=useState({})
    const[addrflag,setaddrflag]=useState(true);
    const [address, setaddress] = useState([]);
    const [addressreducer, setaddressreducer] = useReducer(
      addressfxn,
      initialvalue
    );
  
    return (
      <Addresscontext.Provider
        value={{address,addrflag,setaddrflag, setaddress,status,setstatus, addressreducer, setaddressreducer}}
      >
        {children}
      </Addresscontext.Provider>
    );
  };
  
  export const useAddress = () => useContext(Addresscontext);
  
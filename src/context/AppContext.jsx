import {useState,useEffect, createContext, useContext} from "react"
import {useNavigate} from "react-router-dom"



const AppContext = createContext();

export const useAppContext = ()=>{
    return useContext(AppContext);
}



export const AppProvider = ({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const navigate = useNavigate();



    // useEffect(()=>{
    //     fetch("http://localhost:4455/api",{credentials:"include"})
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log("res",res)
    //     })
    // })

    useEffect(()=>{
        console.log('CheckForSession useEffect fired');
        fetch("http://localhost:4455/checkforsession",{credentials:"include"})
        .then(res=>res.json())
        .then(res=>{
            console.log("res",res)
            if(res.status){
                setIsAuth(true);
                navigate("/")
            }
        })
    },[]);


    const handleLogin = async()=>{
        console.log("handleLogin fired!")
        fetch("http://localhost:4455/login",{credentials:"include"})
        .then(res=>res.json())
        .then(res=>{
            console.log("res",res)
        })
  
    }

    const values={
        isAuth,
        handleLogin
    }

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>)
}
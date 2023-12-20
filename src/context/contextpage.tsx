/* eslint-disable @typescript-eslint/no-explicit-any */
import {useContext, createContext, useState, useEffect} from "react"


interface User  {
    id: string
    name: string
    lastName: string 
    email: string
    password: string

}

interface ContextProps {
    user: User  
    setUser: (user: User  ) => void
}



const ContextPage = createContext({} as ContextProps )

export const ContextPageProvider = ({children}: {
    children: React.ReactNode
}) => {

    const [user, setUser] = useState<User | undefined>()

    useEffect(() => {
        const token = localStorage.getItem('user')

        setUser(JSON.parse(token))
        
    }, [])


    return <ContextPage.Provider value={{
        user,
        setUser
    }}>{children}</ContextPage.Provider>
}


export const useContextGlobas = () => useContext(ContextPage)
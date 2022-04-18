import { createContext, useEffect, useState } from "react";
import { dragonsApi } from "../../API";
import { Dragon } from "../../Interfaces";

type DragonsContextType = {
    currentDragons: Dragon[];
    setDragons: any;
};

export const DragonsContext = createContext<DragonsContextType>({
    currentDragons:[{
        id:0,
        name:'',
        histories:'',
        createdAt:'',
        type:''
    }],
    setDragons: () => null
})

export const DragonsProvider = ({children}:any) => {
    const [currentDragons, setDragons] = useState<Dragon[]>([])
    useEffect(() => {
        dragonsApi.get('dragon')
        .then(response => {
            const dragonsSorted = response.data.sort((a:Dragon,b:Dragon) => a.name.localeCompare(b.name))
            setDragons(dragonsSorted)
        })
    }, [])  
    const value = {currentDragons, setDragons}
    return <DragonsContext.Provider value={value}>{children}</DragonsContext.Provider>
}
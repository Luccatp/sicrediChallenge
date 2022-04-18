import { createContext, useEffect, useState } from "react";
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
    const value = {currentDragons, setDragons}
    return <DragonsContext.Provider value={value}>{children}</DragonsContext.Provider>
}
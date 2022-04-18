export interface Dragon {
    createdAt: string,
    name: string,
    type: string,
    histories: string,
    id: number
}

export interface NewDragon {
    name:string,
    type:string
}

export type DragonsContextType = {
    currentDragons: Dragon[];
    setDragons: any;
  };
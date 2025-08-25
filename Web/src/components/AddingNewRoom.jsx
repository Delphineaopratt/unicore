import React, { createContext, useState } from "react";

export const AddingNewRoom = createContext();

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  return (
    <AddingNewRoom.Provider value={{ rooms, setRooms}}>
        {children}
    </AddingNewRoom.Provider>
  );
};

import React, { createContext, useContext } from "react";
import { useState } from "react";

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
    const [selectedMenu, setSelectedMenu] = useState("students");
    const [mainModal, setMainModal] = useState(false);
    const [paginatedData, setPaginatedData] = useState("");
    const [contentModal, setContentModal] = useState(false);

    return (
        <DataStoreContext.Provider
            value={{
                selectedMenu,
                setSelectedMenu,
                mainModal,
                setMainModal,
                paginatedData,
                setPaginatedData,
                contentModal,
                setContentModal,
            }}
        >
            {children}
        </DataStoreContext.Provider>
    );
}

export function useDataStore() {
    return useContext(DataStoreContext);
}

import { useDataStore } from "@/Context/DataStoreContext";
import React from "react";

const Sidebar = ({ items }) => {
    const { setSelectedMenu, selectedMenu } = useDataStore();

    return (
        <div className="">
            <ul className="menu rounded-box w-56 gap-1">
                {items.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => setSelectedMenu(item.name)}
                        className={`${
                            selectedMenu == item.name ? "bg-slate-300" : ""
                        } select-none hover:bg-slate-300 hover:cursor-pointer p-2 rounded-md capitalize transition-all duration-500 ease-in-out`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;

import { useDataStore } from "@/Context/DataStoreContext";
import React from "react";

const ModalMain = ({ children }) => {
    const { mainModal, setMainModal } = useDataStore();

    return (
        <dialog className={`modal ${mainModal ? "modal-open" : ""}`}>
            <div className="modal-box bg-white w-11/12">{children}</div>

            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setMainModal(false)}>close</button>
            </form>
        </dialog>
    );
};

export default ModalMain;

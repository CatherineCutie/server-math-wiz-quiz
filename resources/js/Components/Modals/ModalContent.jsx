import { useDataStore } from "@/Context/DataStoreContext";
import React from "react";

const ModalContent = ({ children }) => {
    const { contentModal, setContentModal } = useDataStore();

    return (
        <dialog className={`modal ${contentModal ? "modal-open" : ""}`}>
            <div className="modal-box bg-white w-11/12">{children}</div>

            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setContentModal(false)}>close</button>
            </form>
        </dialog>
    );
};

export default ModalContent;

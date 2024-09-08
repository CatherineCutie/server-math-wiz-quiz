import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import ModalMain from "../Modals/ModalMain";
import toast from "react-hot-toast";
import { useDataStore } from "@/Context/DataStoreContext";
import { useQueryClient } from "@tanstack/react-query";

const FormCreateSection = () => {
    const { setMainModal } = useDataStore();

    const queryClient = useQueryClient();

    const [sectionName, setSectionName] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/api/sections", {
                sectionName,
            });

            if (data) {
                setSectionName("");
                queryClient.invalidateQueries({
                    queryKey: ["fetchDatasections"],
                });
                setMainModal(false);
            }

            toast.success(data.message);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <ModalMain>
            <div className="flex justify-between">
                <h1 className="text-xl">Add Section</h1>
                <button
                    className="btn btn-xs btn-error"
                    onClick={() => setMainModal(false)}
                >
                    <AiOutlineClose />
                </button>
            </div>
            <div className="divider"></div>
            <form onSubmit={handleSubmit}>
                <input
                    name="setSectionName"
                    type="text"
                    placeholder="Section Name"
                    className="input input-bordered w-full bg-transparent my-1"
                    value={sectionName}
                    onChange={(e) => setSectionName(e.target.value)}
                />

                <button className="btn btn-primary w-full text-white mt-10">
                    Create
                </button>
            </form>
        </ModalMain>
    );
};

export default FormCreateSection;

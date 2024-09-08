import React from "react";
import ModalContent from "../ModalContent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineClose } from "react-icons/ai";
import { useDataStore } from "@/Context/DataStoreContext";

const Content = ({ model, id }) => {
    const { setContentModal } = useDataStore();
    const fetchSingleData = async () => {
        try {
            const { data } = await axios.get("/api/" + model + "/" + id);

            console.log(data);

            return data;
        } catch (error) {}
    };

    const { data, isLoading } = useQuery({
        queryKey: ["fetchSingleData" + model + id],
        queryFn: fetchSingleData,
        enabled: model && id ? true : false,
    });

    return (
        <ModalContent>
            {isLoading ? (
                <></>
            ) : (
                <>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">Details:</h1>
                        <button
                            className="btn btn-xs btn-error"
                            onClick={() => setContentModal(false)}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="divider"></div>
                    {model == "students" ? (
                        <>
                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Name:
                                </span>{" "}
                                {data.first_name + " " + data.last_name}
                            </p>

                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Email:
                                </span>{" "}
                                {data.email}
                            </p>

                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Grade:
                                </span>{" "}
                                {data.grade.level}
                            </p>

                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Section:
                                </span>{" "}
                                {data.section.name}
                            </p>
                        </>
                    ) : null}

                    {model == "grades" ? (
                        <>
                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Name:
                                </span>{" "}
                                {data.level}
                            </p>
                        </>
                    ) : null}

                    {model == "sections" ? (
                        <>
                            <p className="justify">
                                {" "}
                                <span className="font-semibold">
                                    Name:
                                </span>{" "}
                                {data.name}
                            </p>
                        </>
                    ) : null}
                </>
            )}
        </ModalContent>
    );
};

export default Content;

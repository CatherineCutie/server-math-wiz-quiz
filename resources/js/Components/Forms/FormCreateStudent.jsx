import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import ModalMain from "../Modals/ModalMain";
import toast from "react-hot-toast";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useDataStore } from "@/Context/DataStoreContext";

const FormCreateStudent = () => {
    const { setMainModal } = useDataStore();
    const queryClient = useQueryClient();

    const [studentFirstName, setStudentFirstName] = useState("");
    const [studentLastName, setStudentLastName] = useState("");
    const [studentEmailName, setStudentEmailName] = useState("");
    const [studentPasswordName, setStudentPasswordName] = useState("");
    const [gradeId, setGradeId] = useState("");
    const [sectionId, setSectionId] = useState("");
    const [selectedTab, setSelectedTab] = useState("single");
    const [studentBatchData, setStudentBatchData] = useState("single");

    const dataGrades = queryClient.getQueryData(["fetchDatagrades"]);
    const dataSections = queryClient.getQueryData(["fetchDatasections"]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("/api/students", {
                studentFirstName,
                studentLastName,
                studentEmailName,
                studentPasswordName,
                gradeId,
                sectionId,
            });

            if (data) {
                setStudentFirstName("");
                setStudentLastName("");
                setStudentEmailName("");
                setStudentPasswordName("");
                setGradeId("");
                setSectionId("");
                queryClient.invalidateQueries({
                    queryKey: ["fetchDatastudents"],
                });
                setMainModal(false);
            }

            toast.success(data.message);
        } catch (error) {
            console.error(error);
        }
    };

    const handleBatchSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                "/api/studentsBatch",
                { studentBatchData },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (data) {
                toast.success(data.message);
                e.target.reset();
                setMainModal(false);
                queryClient.invalidateQueries({
                    queryKey: ["fetchDatastudents"],
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ModalMain>
            <div className="flex justify-between">
                <h1 className="text-xl">Add Student</h1>
                <button
                    className="btn btn-xs btn-error"
                    onClick={() => setMainModal(false)}
                >
                    <AiOutlineClose />
                </button>
            </div>
            <div className="divider"></div>
            <div role="tablist" className="tabs tabs-boxed">
                <div
                    role="tab"
                    onClick={() => setSelectedTab("single")}
                    className={`tab ${
                        selectedTab == "single" ? "tab-active" : ""
                    }`}
                >
                    Single
                </div>
                <div
                    role="tab"
                    onClick={() => setSelectedTab("batch")}
                    className={`tab ${
                        selectedTab == "batch" ? "tab-active" : ""
                    }`}
                >
                    Batch
                </div>
            </div>
            {selectedTab == "single" ? (
                <form onSubmit={handleSubmit}>
                    <input
                        name="studentFirstName"
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered w-full bg-transparent my-1"
                        value={studentFirstName}
                        onChange={(e) => setStudentFirstName(e.target.value)}
                    />

                    <input
                        name="studentLastName"
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered w-full bg-transparent my-1"
                        value={studentLastName}
                        onChange={(e) => setStudentLastName(e.target.value)}
                    />

                    <input
                        name="studentEmailName"
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full bg-transparent my-1"
                        value={studentEmailName}
                        onChange={(e) => setStudentEmailName(e.target.value)}
                    />

                    <input
                        name="studentPasswordName"
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full bg-transparent my-1"
                        value={studentPasswordName}
                        onChange={(e) => setStudentPasswordName(e.target.value)}
                    />

                    <select
                        className="select select-bordered w-full bg-transparent my-1"
                        onChange={(e) => setGradeId(e.target.value)}
                    >
                        <option value="">--Grade--</option>

                        {dataGrades?.map((item) => (
                            <option key={item.level} value={item.id}>
                                {item.level}
                            </option>
                        ))}
                    </select>

                    <select
                        className="select select-bordered w-full bg-transparent my-1"
                        onChange={(e) => setSectionId(e.target.value)}
                    >
                        <option value="">--Section--</option>

                        {dataSections?.map((item) => (
                            <option key={item.name} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    <button className="btn btn-primary w-full text-white mt-10">
                        Create
                    </button>
                </form>
            ) : null}
            {selectedTab == "batch" ? (
                <form onSubmit={handleBatchSubmit}>
                    <div className="mt-4">
                        <label
                            htmlFor="fileInput"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Upload File
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            name="fileInput"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                            onChange={(e) =>
                                setStudentBatchData(e.target.files[0])
                            }
                        />
                    </div>
                    <button className="btn btn-primary w-full text-white mt-10">
                        Submit
                    </button>
                </form>
            ) : null}
        </ModalMain>
    );
};

export default FormCreateStudent;

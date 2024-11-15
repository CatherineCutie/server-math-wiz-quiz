import { useDataStore } from "@/Context/DataStoreContext";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment, useState } from "react";
import FormCreateStudent from "./Forms/FormCreateStudent";
import FormCreateSection from "./Forms/FormCreateSection";
import FormCreateGrade from "./Forms/FormCreateGrade";
import Content from "./Modals/Partials/Content";
import useResponsive from "@/Hooks/useResponsive";

const Table = () => {
    const { selectedMenu, setMainModal, setContentModal, setSelectedMenu } =
        useDataStore();
    const { isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();

    const queryClient = useQueryClient();

    const dataStudents = queryClient.getQueryData(["fetchDatastudents"]);
    const dataGrades = queryClient.getQueryData(["fetchDatagrades"]);
    const dataSections = queryClient.getQueryData(["fetchDatasections"]);

    const fetchDataQuiz = queryClient.getQueryData(["fetchDataQuiz1"]);

    const [modelSelectedId, setModelSelectedId] = useState(null);

    // const fetchData = async () => {
    //     try {
    //         const { data } = await axios.get("/api/" + selectedMenu);

    //         console.log(data);

    //         return data.data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["fetchData" + selectedMenu],
    //     queryFn: fetchData,
    // });

    return (
        <div className="overflow-x-auto">
            {selectedMenu == "students" ? <FormCreateStudent /> : null}
            {selectedMenu == "grades" ? <FormCreateGrade /> : null}
            {selectedMenu == "sections" ? <FormCreateSection /> : null}

            {modelSelectedId ? (
                <Content model={selectedMenu} id={modelSelectedId} />
            ) : null}

            <div
                className={`flex ${
                    !isSmallScreen ? "justify-end" : "justify-between gap-2"
                }`}
            >
                {selectedMenu != "quiz" ? (
                    <>
                        {isSmallScreen ? (
                            <select
                                className="select select-sm select-bordered bg-white w-full text-xs"
                                onChange={(e) =>
                                    setSelectedMenu(e.target.value)
                                }
                            >
                                <option value="students">Student</option>
                                <option value="grades">Grade</option>
                                <option value="sections">Section</option>
                            </select>
                        ) : null}
                        <button
                            className="btn btn-sm btn-primary text-white"
                            onClick={() => {
                                setMainModal(true);
                            }}
                        >
                            Add
                        </button>
                    </>
                ) : null}
            </div>
            <div className="h-[50vh] overflow-y-auto my-2">
                <table className="table table-xs  rounded-t-md">
                    <thead className="sticky top-0 bg-slate-400 shadow-lg text-white">
                        {selectedMenu == "students" ? (
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Grade</th>
                                <th>Section</th>
                                <th></th>
                            </tr>
                        ) : null}

                        {selectedMenu == "grades" ? (
                            <tr>
                                <th></th>
                                <th>Level</th>
                                <th></th>
                            </tr>
                        ) : null}

                        {selectedMenu == "sections" ? (
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        ) : null}

                        {selectedMenu == "quiz" ? (
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Score</th>
                                {/* <th></th> */}
                            </tr>
                        ) : null}
                    </thead>
                    <tbody>
                        {/* <Fragment> */}
                        {selectedMenu == "students" ? (
                            <>
                                {dataStudents.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-slate-300 transition-all duration-300 ease-in-out"
                                    >
                                        <th>{index + 1}</th>
                                        <td>
                                            {item.first_name +
                                                " " +
                                                item.last_name}
                                        </td>
                                        <td> {item.email}</td>
                                        <td> {item.grade.level}</td>
                                        <td> {item.section.name}</td>
                                        <td>
                                            <button
                                                className="btn btn-xs btn-ghost"
                                                onClick={() => {
                                                    setModelSelectedId(item.id);
                                                    setContentModal(true);
                                                }}
                                            >
                                                view
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : null}

                        {selectedMenu == "grades" ? (
                            <>
                                {dataGrades.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-slate-300 transition-all duration-300 ease-in-out"
                                    >
                                        <th>{index + 1}</th>
                                        <td> {item.level}</td>
                                        <td>
                                            <button
                                                className="btn btn-xs btn-ghost"
                                                onClick={() => {
                                                    setModelSelectedId(item.id);
                                                    setContentModal(true);
                                                }}
                                            >
                                                view
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : null}

                        {selectedMenu == "sections" ? (
                            <>
                                {dataSections.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-slate-300 transition-all duration-300 ease-in-out"
                                    >
                                        <th>{index + 1}</th>
                                        <td> {item.name}</td>
                                        <td>
                                            <button
                                                className="btn btn-xs btn-ghost"
                                                onClick={() => {
                                                    setModelSelectedId(item.id);
                                                    setContentModal(true);
                                                }}
                                            >
                                                view
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ) : null}

                        {selectedMenu == "quiz" ? (
                            <>
                                {fetchDataQuiz.scores?.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-slate-300 transition-all duration-300 ease-in-out"
                                    >
                                        <th>{index + 1}</th>
                                        <td>
                                            {item.student.first_name +
                                                " " +
                                                item.student.last_name}
                                        </td>
                                        <td>
                                            {item.score}/
                                            {fetchDataQuiz.questions_count}
                                        </td>
                                        {/* <td>
                                        <button
                                            className="btn btn-xs btn-ghost"
                                            onClick={() => {
                                                setModelSelectedId(item.id);
                                                setContentModal(true);
                                            }}
                                        >
                                            view
                                        </button>
                                    </td> */}
                                    </tr>
                                ))}
                            </>
                        ) : null}
                        {/* </Fragment> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;

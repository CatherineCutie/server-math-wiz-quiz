import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { useDataStore } from "@/Context/DataStoreContext";
import { useQueries } from "@tanstack/react-query";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Table from "@/Components/Table";

const Scores = ({ auth }) => {
    const { selectedMenu, setSelectedMenu, setQuizScoreData, quizScoreData } =
        useDataStore();

    const [downloadButton, setDownloadButton] = useState(false);

    useEffect(() => {
        setSelectedMenu("quiz");
    }, []);

    const scoreItems = [{ name: "quiz", id: 1 }];

    const fetchData = async (menu) => {
        try {
            const { data } = await axios.get("/api/getScoresByQuizId/" + menu);

            setQuizScoreData(data);

            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const queries = useQueries({
        queries: scoreItems.map((item) => ({
            queryKey: ["fetchDataQuiz" + item.id],
            queryFn: () => fetchData(item.id),
        })),
    });

    const isLoading = queries.some((query) => query.isLoading);
    const isError = queries.some((query) => query.isError);
    const data = queries.find((query) => query.data)?.data || [];

    const downloadCSV = async () => {
        setDownloadButton(true);
        try {
            const response = await axios.post(
                "/api/download-quiz-csv",
                quizScoreData,
                {
                    responseType: "blob", // important to set this to handle the file
                }
            );

            // Generate the current date in YYYY-MM-DD format
            const currentDate = new Date().toISOString().slice(0, 10);

            // Create the filename with the current date
            const filename = `quiz_scores_${currentDate}.csv`;

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename); // Set the dynamic filename
            document.body.appendChild(link);

            link.click();

            setTimeout(() => {
                setDownloadButton(false);
            }, 6000);
        } catch (error) {
            setDownloadButton(false);
            console.error("Error downloading the CSV:", error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl uppercase">
                                {selectedMenu}
                            </h1>
                            <div className="divider"></div>
                            <div className="flex gap-10">
                                <Sidebar items={scoreItems} />
                                <div className="overflow-x-auto flex-1">
                                    <div className="flex justify-end">
                                        {downloadButton ? (
                                            <button
                                                className="btn btn-primary btn-sm"
                                                disabled
                                            >
                                                <span className="loading loading-spinner loading-xs"></span>
                                                Download
                                                <BsDownload size={15} />
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-primary btn-sm"
                                                onClick={downloadCSV}
                                            >
                                                Download
                                                <BsDownload size={15} />
                                            </button>
                                        )}
                                    </div>
                                    {isLoading ? (
                                        <p>Loading...</p>
                                    ) : isError ? (
                                        <p>Error loading data.</p>
                                    ) : (
                                        <Table data={data} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Scores;

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Sidebar from "@/Components/Sidebar";
import TextInput from "@/Components/TextInput";
import { useDataStore } from "@/Context/DataStoreContext";
import useResponsive from "@/Hooks/useResponsive";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Uploads({ auth }) {
    const { selectedMenu, setSelectedMenu } = useDataStore();
    const { isSmallScreen, isMediumScreen, isLargeScreen } = useResponsive();

    const fetchQuiz = async (menu) => {
        try {
            const { data } = await axios.get("/api/quizzes");

            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const {
        data: quizData,
        isLoading: quizDataIsLoading,
        refetch,
    } = useQuery({
        queryKey: ["fetchQuiz"],
        queryFn: fetchQuiz,
    });

    // console.log(quizData);

    useEffect(() => {
        setSelectedMenu("upload");
    }, []);

    const dashboardItems = [{ name: "upload" }];

    const { data, setData, post, processing, errors, reset } = useForm({
        quiz_title: "",
        description: "",
        fileInput: null,
    });

    const { flash } = usePage().props;

    const submit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("quiz_title", data.quiz_title);
        formData.append("description", data.description);
        formData.append("fileInput", data.fileInput);

        try {
            const { data } = await axios.post(route("uploads"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (data) {
                toast.success(data.message);
                e.target.reset();
                reset();
                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const removeQuiz = async () => {
        try {
            const { data } = await axios.get("/api/removeQuiz");

            console.log(data);

            if (data) {
                toast.success(data.message);
                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Upload
                </h2>
            }
        >
            <Head title="Upload" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl uppercase">
                                {selectedMenu}
                            </h1>
                            <div className="divider"></div>
                            <div className="flex gap-10">
                                {!isSmallScreen ? (
                                    <Sidebar items={dashboardItems} />
                                ) : null}

                                {quizDataIsLoading ? (
                                    <>Loading...</>
                                ) : (
                                    <>
                                        {quizData.length > 0 ? (
                                            <div className="w-full text-center">
                                                <div
                                                    role="alert"
                                                    className="alert alert-info w-full"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        className="h-6 w-6 shrink-0 stroke-current"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        ></path>
                                                    </svg>
                                                    <span>
                                                        A quiz is already
                                                        uploaded
                                                    </span>
                                                </div>
                                                <button
                                                    className="btn btn-primary mt-2"
                                                    onClick={removeQuiz}
                                                >
                                                    Remove Quiz
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="w-full">
                                                {/* Display success message */}
                                                {flash && flash.success && (
                                                    <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                                                        {flash.success}
                                                    </div>
                                                )}

                                                <form onSubmit={submit}>
                                                    {/* Quiz Title Input */}
                                                    <InputLabel
                                                        htmlFor="quiz_title"
                                                        value="Quiz Title"
                                                    />
                                                    <TextInput
                                                        id="quiz_title"
                                                        name="quiz_title"
                                                        value={data.quiz_title}
                                                        className="mt-1 block w-full"
                                                        autoComplete="quiz_title"
                                                        isFocused={true}
                                                        onChange={(e) =>
                                                            setData(
                                                                "quiz_title",
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    <InputError
                                                        message={
                                                            errors.quiz_title
                                                        }
                                                        className="mt-2"
                                                    />

                                                    {/* Quiz Description Input */}
                                                    <div className="mt-4">
                                                        <InputLabel
                                                            htmlFor="description"
                                                            value="Description"
                                                        />
                                                        <TextInput
                                                            id="description"
                                                            type="text"
                                                            name="description"
                                                            value={
                                                                data.description
                                                            }
                                                            className="mt-1 block w-full"
                                                            autoComplete="description"
                                                            onChange={(e) =>
                                                                setData(
                                                                    "description",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.description
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>

                                                    {/* File Input */}
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
                                                                setData(
                                                                    "fileInput",
                                                                    e.target
                                                                        .files[0]
                                                                )
                                                            }
                                                        />
                                                        <InputError
                                                            message={
                                                                errors.fileInput
                                                            }
                                                            className="mt-2"
                                                        />
                                                    </div>

                                                    {/* Submit Button */}
                                                    <div className="mt-4">
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

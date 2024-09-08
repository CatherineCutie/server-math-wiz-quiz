import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Sidebar from "@/Components/Sidebar";
import TextInput from "@/Components/TextInput";
import { useDataStore } from "@/Context/DataStoreContext";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

export default function Uploads({ auth }) {
    const { selectedMenu } = useDataStore();

    const dashboardItems = [
        { name: "quiz" },
        { name: "grades" },
        { name: "sections" },
    ];

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

            // console.log(response);

            if (data) {
                toast.success(data);
                // setSuccessMessage(data);
                reset();
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
                                <Sidebar items={dashboardItems} />
                                <div className="col-span-3">
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
                                            message={errors.quiz_title}
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
                                                value={data.description}
                                                className="mt-1 block w-full"
                                                autoComplete="description"
                                                onChange={(e) =>
                                                    setData(
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.description}
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
                                                        e.target.files[0]
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.fileInput}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

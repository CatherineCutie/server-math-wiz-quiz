import Sidebar from "@/Components/Sidebar";
import Table from "@/Components/Table";
import { useDataStore } from "@/Context/DataStoreContext";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useQueries } from "@tanstack/react-query";

export default function Dashboard({ auth }) {
    const { selectedMenu } = useDataStore();

    const dashboardItems = [
        { name: "students" },
        { name: "grades" },
        { name: "sections" },
    ];

    const fetchData = async (menu) => {
        try {
            const { data } = await axios.get("/api/" + menu);

            console.log(data);

            return data.data;
        } catch (error) {
            console.error(error);
        }
    };

    const queries = useQueries({
        queries: dashboardItems.map((item) => ({
            queryKey: ["fetchData" + item.name],
            queryFn: () => fetchData(item.name),
        })),
    });

    const isLoading = queries.some((query) => query.isLoading);
    const isError = queries.some((query) => query.isError);
    const data = queries.find((query) => query.data)?.data || [];

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
                                <Sidebar items={dashboardItems} />
                                <div className="overflow-x-auto flex-1">
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
}

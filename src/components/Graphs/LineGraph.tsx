import { FC } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Registering chart elements and plugins with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Defining the structure of a GraphData
interface GraphData {
    cases: Record<string, number>;
    recovered: Record<string, number>;
    deaths: Record<string, number>;
}

// component for creating Line Graph chart  of COVID-19  historical data
const LineGraph: FC = () => {
    //using useQuery from react-query from fetching graph data from api
    const graphQuery = useQuery<GraphData>({
        queryKey: ["graphData"],
        queryFn: async () => {
            const response = await axios.get<GraphData>(
                "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
            );
            const data = response.data;
            return data;
        },
    });

    // Handling loading and error states
    if (graphQuery.isLoading) return <h1 className="text-center text-lg my-2">Loading....</h1>;
    if (graphQuery.isError)
        return (
            <h1 className="text-center text-red-800 text-lg my-2">Error loading graph Data!!!</h1>
        );

    //extracting  graph data from the query
    const graphData = graphQuery.data;

    // preparing chart data for Line Component
    const chartData = {
        labels: Object.keys(graphData.cases || {}),
        datasets: [
            {
                label: "Cases",
                data: Object.values(graphData.cases || {}),
                borderColor: "#FF5733",
            },
        ],
    };

    return (
        <div className="bg-orange-50 w-full  p-4">
            <h1 className="text-xl font-semibold mb-2">Line Graph</h1>
            <div className=" p-2 mb-2 border-2 border-black my-auto">
                {/* Rendering line chart here */}
                <Line data={chartData} options={{ responsive: true }} />
            </div>
        </div>
    );
};

export default LineGraph;

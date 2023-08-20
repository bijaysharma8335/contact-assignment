import React, { FC } from "react";
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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface GraphData {
    cases: Record<string, number>;
    recovered: Record<string, number>;
    deaths: Record<string, number>;
}

const LineGraph: FC = () => {
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
    if (graphQuery.isLoading) return <h1>Loading....</h1>;
    if (graphQuery.isError) return <h1>Error loading graph Data!!!</h1>;
    const graphData = graphQuery.data;

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
            {" "}
            <h1 className="text-xl font-semibold mb-2">Line Graph</h1>
            <div className=" p-2 mb-10 border-2 border-black my-auto">
                {" "}
                <Line data={chartData} options={{ responsive: true }} />
            </div>
        </div>
    );
};

export default LineGraph;

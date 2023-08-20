import { FC ,useState,useEffect} from "react";
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
    const [chartWidth, setChartWidth] = useState("100%");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 400) {
                setChartWidth("240px");
            } else {
                setChartWidth("100%");
            }
        };

        handleResize(); // Initial call to set chart width based on window width

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
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
    if (graphQuery.isLoading) return <h1 className="text-center text-lg my-2">Loading Line Graph Data....</h1>;
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
        <div className="lg:w-full md:w-full   md:p-4 lg:p-4 p-1">
            <h1 className="text-xl font-semibold mb-2">Line Graph</h1>
            <div
                className="lg:p-2 md:p-2 sm:p-2 mb-2 border-2 border-black my-auto "
                style={{ minWidth: "200px", width: chartWidth }} 
            >
                {/* Rendering line chart here */}
                <Line data={chartData} options={{ responsive: true }} />
            </div>
        </div>
    );
};

export default LineGraph;

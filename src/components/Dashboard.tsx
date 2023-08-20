import { FC } from "react";
import LineGraph from "./Graphs/LineGraph";
import Map from "./Graphs/Map";

const Dashboard: FC = () => {
    return (
        <>
            <LineGraph />
            <Map />
        </>
    );
};

export default Dashboard;

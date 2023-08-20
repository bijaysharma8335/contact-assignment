import { FC } from "react";
import LineGraph from "./Graphs/LineGraph";
import Map from "./Graphs/Map";

const Dashboard: FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <LineGraph />
                <Map />
            </div>
        </>
    );
};

export default Dashboard;

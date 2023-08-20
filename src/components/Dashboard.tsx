import { FC } from "react";
import LineGraph from "./Graphs/LineGraph";
import Map from "./Graphs/Map";

const Dashboard: FC = () => {
    
    return (
       
            <div className="flex flex-col w-full bg-orange-50  md:px-5 lg:px-5">
                <LineGraph />
                <Map />
            </div>
       
    );
};

export default Dashboard;

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface WorldwideData {
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

interface CountryData {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    countryInfo: {
        flag: string;
        iso2: string;
        iso3: string;
        lat: number;
        long: number;
        _id: number;
    };
}

const Map: React.FC = () => {
    const worldwideDataQuery = useQuery<WorldwideData>(
        ["worldData"], // Use an array as the query key
        async () => {
            const response = await axios.get("https://disease.sh/v3/covid-19/all");
            return response.data;
        }
    );
    const countryDataQuery = useQuery<CountryData[]>(["countryData"], async () => {
        const response = await axios.get("https://disease.sh/v3/covid-19/countries");
        return response.data;
    });

    if (countryDataQuery.isLoading)
        return <h1 className="text-center text-lg my-2">Loading....</h1>;
    if (countryDataQuery.isError) return <h1>Error loading graph Data!!!</h1>;
    const countryData = countryDataQuery.data;

    const worldData = worldwideDataQuery.data;
    return (
        <div className="w-full p-4">
            <h1 className="text-xl font-semibold mb-2 ">Map</h1>
            <div className="bg-white  my-2 p-2">
                <span className="block"> Total Cases : {worldData?.cases}</span>
                <span> Total Active : {worldData?.active}</span>
                <span className="block"> Total Deaths : {worldData?.deaths}</span>
                <span className="block"> Total Recovered : {worldData?.recovered}</span>
            </div>
            <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Render markers and popups for each country */}
                {countryData &&
                    countryData.map((country) => (
                        <Marker
                            key={country.country}
                            position={[country.countryInfo.lat, country.countryInfo.long]}
                        >
                            <Popup>
                                <div>
                                    {/* <img
                            src={country.countryInfo.flag}
                            alt={`${country.country} flag`}
                            style={{ height: "50px", width: "auto" }}
                        /> */}
                                    <h2 className="text-lg font-semibold">{country.country}</h2>
                                    <p>Active: {country.active}</p>
                                    <p>Recovered: {country.recovered}</p>
                                    <p>Deaths: {country.deaths}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
            </MapContainer>
        </div>
    );
};

export default Map;

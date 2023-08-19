import axios from "axios";
import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import "chartjs-adapter-moment"; import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
interface CountryInfo {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    iso2: string;
  };
}
interface GraphData {
  cases: Record<string, number>;
  recovered: Record<string, number>;
  deaths: Record<string, number>;
}

const fetchWorldData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};
const fetchGraphData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data;
};

const fetchCountriesData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

const Dashboard: React.FC = () => {
  const worldQuery = useQuery('worldData', fetchWorldData);
  const graphQuery = useQuery('graphData', fetchGraphData);
  const countriesQuery = useQuery('countriesData', fetchCountriesData);

  const worldData = worldQuery.data;
  const graphData = graphQuery.data;
  const countriesData: CountryInfo[] = countriesQuery.data;
  console.log(graphQuery, countriesData);
  const chartData = {
    labels: Object.keys(graphData.cases || {}),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(graphData.cases || {}),
        borderColor: '#FF5733',
      },
      // Add datasets for recovered and deaths if needed
    ],
  };
  return (
    <div className="bg-orange-50 w-full  p-4">
      <div className=" p-2 mb-10 border-2 border-black my-auto">  <Line data={chartData} options={{ responsive: true }} /></div>
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-xl font-semibold mb-2">COVID-19 Map</h1>
        {/* <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countriesData.map((country) => (
            <Marker
              key={country.countryInfo.iso2}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2 className="text-lg font-semibold">{country.country}</h2>
                  <p>Cases: {country.cases}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                  <p>Active: {country.active}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer> */}
      </div>
    </div>
  );
};

export default Dashboard;

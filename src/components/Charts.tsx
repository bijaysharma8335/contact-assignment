import axios from 'axios';
import React from 'react'
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
interface CountryInfo {

  country: string,
  countryInfo: {
    lat: number, long: number, iso2: string
  }
}
interface GraphData {
  cases: Record<string, number>;
  recovered: number;
  deaths: number;
}

const fetchWorldData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  const data = response.data;
  return data;
}
const fetchGraphData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  const data = response.data;
  return data;
}
const fetchCountriesData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  const data = response.data;
  return data;
}

const Charts: React.FC = () => {
  const worldQuery = useQuery('worldData', fetchWorldData
  );
  const countriesQuery = useQuery('countriesData', fetchCountriesData
  );
  const graphQuery = useQuery('graphData', fetchGraphData
  );
  const worldData = worldQuery.data;
  const graphData = graphQuery.data;
  const countriesData = countriesQuery.data;
  console.log(graphQuery, countriesQuery, worldQuery)
  return (
    <div className='bg-orange-50 w-full  p-4'>
      <div className=' p-2 mb-10 border-2 border-black my-auto' >


      </div></div>
  )
}

export default Charts
import TodayWeather from "../../components/today-weather/TodayWeather";
import  Location  from "../../components/location/Location";
import  MiniWeatherCard  from "../../components/mini-weather-card/MiniWeatherCard";
import  SearchBar  from "../../components/search-bar/SearchBar";
import  WindCard  from "../../components/option-tab/WindCard";

import axios from 'axios';

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ConstructionOutlined } from "@mui/icons-material";

export interface ConsolidatedWeather {
    id: any;
    weather_state_name: string;
    weather_state_abbr: string;
    wind_direction_compass: string;
    created: Date;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    wind_direction: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
    predictability: number;
}

export interface Parent {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

export interface Source {
    title: string;
    slug: string;
    url: string;
    crawl_rate: number;
}

export interface WeatherData {
    consolidated_weather: ConsolidatedWeather[];
    time: Date;
    sun_rise: Date;
    sun_set: Date;
    timezone_name: string;
    parent: Parent;
    sources: Source[];
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}

export default function(){
    const [value, setValue] = React.useState('1');

    let [weatherData, setWeatherData] = React.useState<WeatherData|undefined>();
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    
    const getDaysWeather = (weatherData: WeatherData | undefined)=>{
        let daysWeather=[];
        if (weatherData){
            for (let i=0; i<6; i++){
                daysWeather.push(<MiniWeatherCard consolidatedWeather={weatherData?.consolidated_weather[i]}></MiniWeatherCard>);
            }
        }        
        return daysWeather;
    }

    const getWindStatus = (weatherData: WeatherData | undefined)=>{
        let daysWeather=[];
        if (weatherData){
            for (let i=0; i<6; i++){
                daysWeather.push(<WindCard consolidatedWeather={weatherData?.consolidated_weather[i]}></WindCard>);
            }
        }        
        return daysWeather;
    }

    React.useEffect( ()=>{
        fetchWeatherData(44418);
    },[]);

    const fetchWeatherData = async (woeid:number | undefined) => {
        if ( woeid !== undefined ){
            console.log('fetchWeatherData');
            const response = await axios.get(`http://www.metaweather.com/api/location/${woeid}/`);
            weatherData = response.data;
            setWeatherData(weatherData);
        } else {
            // Do nothing
        }
     }
    
    const getTodayWeather = (weatherData: WeatherData | undefined) =>{
        return (<TodayWeather consolidatedWeather={weatherData?.consolidated_weather[0]}></TodayWeather>);
    }
    
    const getLocation = (weatherData: WeatherData | undefined) =>{
        return (<Location locationName={weatherData?.title} 
                            locationType={weatherData?.location_type} 
                            applicable_date={weatherData?.consolidated_weather[0].applicable_date}
                            weather_state_name={weatherData?.consolidated_weather[0].weather_state_name}></Location>);
    }

    return (
        <div style={{width: "70rem", marginLeft: "auto", marginRight: "auto"}}>
            <div style={{marginTop: "2rem"}}>
            </div>
            <div style={{width: "40rem", marginLeft: "auto", marginRight: "auto"}}>
                <SearchBar callBack={fetchWeatherData}></SearchBar>
            </div>
            <div style={{width: "70rem", display: "inline-flex", justifyContent: "space-between"}}>
                {getTodayWeather(weatherData)}
                {getLocation(weatherData)}
            </div>
            <div style={{width: "70rem"}}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Wind" value="1" />
                            <Tab label="Precipitation" value="2" />
                            <Tab label="Temperature" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" style={{width: "70rem", display: "flex", justifyContent: "space-evenly", padding: 0, marginTop: "1rem", marginBottom:"1rem"}}>
                        {getWindStatus(weatherData)}
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </div>
            <div style={{width: "70rem", display: "flex", justifyContent: "space-evenly"}}>
                {getDaysWeather(weatherData)}
            </div>
        </div>
    );
}

import Divider from "@mui/material/Divider/Divider";
import { ConsolidatedWeather, WeatherData } from "../../pages/weather/Weather";
import { roundInt } from "../../utils/number";

export interface ITodayWeather{
    consolidatedWeather?: ConsolidatedWeather;
}

export default function(props: ITodayWeather){
    return(
        <span style={{width: "50%"}}>
            <img src={`http://www.metaweather.com/static/img/weather/${props.consolidatedWeather?.weather_state_abbr}.svg`} style={{width: "7rem", height: "7rem"}}/>
            <span style={{width:"7rem", height:"7rem", fontSize:"7rem"}}>{roundInt(props.consolidatedWeather?.the_temp)}</span>
            <span style={{width: "2rem", height:"2rem", fontSize:"2rem", position: "relative", top: "-4.2rem"}}>
                <span>°C</span>
            </span>
            <span style={{fontSize:"1.5rem", display: "inline-flex", flexDirection: "column", position:"relative", top: "-3em", marginLeft: "1rem", color: "#70757a"}}>
                <span>Visibiliry: {roundInt(props.consolidatedWeather?.visibility)}</span>
                <span>Humidity: {roundInt(props.consolidatedWeather?.humidity)}%</span>
                <span>Wind: {roundInt(props.consolidatedWeather?.wind_speed)} mph</span>
            </span>
        </span>
    );
}

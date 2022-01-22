import { ConsolidatedWeather } from "../../pages/weather/Weather";
import { getDayOfWeek } from "../../utils/date";
import { roundInt } from "../../utils/number";

export interface IMiniWeatherCard{
    consolidatedWeather?: ConsolidatedWeather;
}

export default function(props: IMiniWeatherCard){
    return (
        <span style={{width: "10rem", height: "14rem", display: "inline-flex", flexDirection: "column", backgroundColor: "#f8f9fa", borderRadius: "1rem"}}>
            <span style={{textAlign: "center", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "1rem"}}>{ getDayOfWeek(props.consolidatedWeather?.applicable_date)}</span>
            <img src={`https://www.metaweather.com/static/img/weather/${props.consolidatedWeather?.weather_state_abbr}.svg`} style={{width: "5rem", height: "5rem", marginLeft: "auto", marginRight: "auto", marginTop: "0.5rem"}}/>
            <span style={{display: "inline-flex", justifyContent: "space-between", fontSize: "1.5rem", position: "relative", top: "1rem"}}>
                <span style={{marginLeft: "1.5rem"}}>{ roundInt(props.consolidatedWeather? props.consolidatedWeather.min_temp : undefined) }°</span>
                <span style={{color: "#70757a", marginRight: "1.5rem"}}>{ roundInt(props.consolidatedWeather? props.consolidatedWeather.max_temp : undefined) }°</span>
            </span>
        </span>
    ); 
}

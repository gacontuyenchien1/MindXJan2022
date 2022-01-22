import { ConsolidatedWeather } from "../../pages/weather/Weather";
import { roundInt } from "../../utils/number";

export interface IWindCard{
    consolidatedWeather?: ConsolidatedWeather;
}

export default (props: IWindCard)=>{
    return(
        <span style={{width: "10rem", display: "inline-flex", flexDirection: "column", backgroundColor: "rgb(248, 249, 250)", borderRadius: "1rem"}}>
            <span style={{color: "#70757a", textAlign: "center", fontSize: "1.5rem"}}>{roundInt(props.consolidatedWeather?.wind_speed)} mph</span>
            <span style={{width: "100%", textAlign: "center", marginTop: "1rem"}}>
                <img src="//ssl.gstatic.com/m/images/weather/wind_unselected.svg" 
                    alt={`${props.consolidatedWeather ? props.consolidatedWeather.wind_direction_compass : "Unknown" }`} 
                    style={{transformOrigin: "50% 50%", transform: `rotate(${roundInt(props.consolidatedWeather? props.consolidatedWeather.wind_direction + 90: undefined)}deg)`, width: "3rem"}} 
                    aria-hidden="true" data-atf="0" data-frt="0"></img>
            </span>
            
        </span>
    );
}

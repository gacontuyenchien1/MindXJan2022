import {getDayOfWeek} from "../../utils/date";

export interface ILocation{
    locationName?: string;
    locationType?: string;
    applicable_date?: string;
    weather_state_name?: string;
}

export default function(props: ILocation){

    return (
        <span style={{ width: "50%", position: "relative", display: "inline-flex", flexDirection: "column"}}>
            <span style={{fontSize: "2rem", textAlign: "end"}}>{ props.locationName? props.locationName : "N"}, {props.locationType? props.locationType: "N"}</span>
            <span style={{color: "#70757a", fontSize: "1.5rem", textAlign: "end"}}>{ props.applicable_date ? props.applicable_date : "Unknown"}</span>
            <span style={{color: "#70757a", fontSize: "1.5rem", textAlign: "end"}}>{ getDayOfWeek(props.applicable_date)}</span>
            <span style={{color: "#70757a", fontSize: "1.5rem", textAlign: "end"}}>{ props.weather_state_name? props.weather_state_name: "N"}</span>
        </span>
    );
}

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';
import { callbackify } from 'util';

export interface LocationData {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface ISearchBar{
  callBack(woeid:number): void;
}
export default function(props: ISearchBar) {
  const [seachValue, setSearchValue] = useState<string>("");
  const onChangeSeach = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = (e.target as HTMLInputElement).value;
    setSearchValue(value);
  }

  const fetchLocation = async (locationName: string) => {
    const response = await axios.get(`http://www.metaweather.com/api/location/search/?query=${locationName}`);
    const locationData: LocationData[] = response.data;
    console.log(locationData);
    props.callBack(locationData[0].woeid);
 }

  const onKeyPressSearch = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "Enter"){
      const value = (e.target as HTMLInputElement).value;
      fetchLocation( value );
    } else {
      // Do nothing
    }
  }

  return (
    <Paper
      component="div"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "50%", margin: "auto"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search city name"
        inputProps={{ 'aria-label': 'search city name' }}
        onChange={onChangeSeach}
        onKeyPress={onKeyPressSearch}
        value={seachValue}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

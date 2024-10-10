import styled from "styled-components";
import {debounce, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {PropsWithChildren, useEffect, useState} from "react";

export const Filters = ({updateFilter}: PropsWithChildren<{ updateFilter: (newFilter: string) => void }>) => {
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [species, setSpecies] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  
  const [updateTime, setUpdateTime] = useState<boolean>(true);
  
  useEffect(() => {
    setUpdateTime(true);
  }, [status, gender]);
  
  useEffect(() => {
    const debounced = debounce(() => setUpdateTime(true), 500);
    debounced();
    return debounced.clear;
  }, [name, species, type]);
  
  useEffect(() => {
    if (!updateTime) return;
    
    const newFilter = [{
      target: "name",
      value: name
    }, {
      target: "status",
      value: status
    }, {
      target: "species",
      value: species
    }, {
      target: "type",
      value: type
    }, {
      target: "gender",
      value: gender
    }]
      .filter(({value}) => !!value)
      .map(({target, value}) => `${target}=${value}`)
      .join("&");
    
    updateFilter(newFilter);
    setUpdateTime(false);
  }, [name, status, species, type, gender, updateTime, updateFilter]);
  
  return (
    <Container>
      <TextField value={name}
                 variant="standard"
                 label="Name"
                 autoComplete="off"
                 onChange={(e) => setName(e.target.value)}
                 sx={{m: 1, minWidth: 120}}
      />
      <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select value={status} labelId="status-label" onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="alive">Alive</MenuItem>
          <MenuItem value="dead">Dead</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
      <TextField variant="standard"
                 label="Species"
                 autoComplete="off"
                 onChange={(e) => setSpecies(e.target.value)}
                 sx={{m: 1, minWidth: 120}}
      />
      <TextField variant="standard"
                 label="Type"
                 autoComplete="off"
                 onChange={(e) => setType(e.target.value)}
                 sx={{m: 1, minWidth: 120}}
      />
      <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select value={gender} labelId="gender-label" onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="genderless">Genderless</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #fff;
	padding: 8px;
	gap: 16px;
`;
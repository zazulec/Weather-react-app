import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function RechartInput(props) {
    const classes = useStyles();
    const [rechartInputData, setRechartInputData] = useState('');

    const handleChange = (event) => {
        setRechartInputData(event.target.value);
    };
    const data = props.data
    return ( 
        <div>
        <FormControl className = { classes.formControl } >
        <InputLabel id = "demo-simple-select-helper-label" > Data </InputLabel> 
        <Select labelId = "demo-simple-select-helper-label"
        id = "demo-simple-select-helper"
        value = { rechartInputData }
        onChange = { handleChange } >
        <MenuItem value = "" >
        <em> None </em> </MenuItem> 
        <MenuItem value = {data } > 10</MenuItem> 
        <MenuItem value = { 20 } > Twenty </MenuItem> 
        <MenuItem value = { 30 } > Thirty </MenuItem>
        </Select> 
        <FormHelperText> Chose data to display forecast </FormHelperText> 
        </FormControl>
        </div>
        
    );
}
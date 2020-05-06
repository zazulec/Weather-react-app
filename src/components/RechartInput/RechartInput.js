import React, { useState, useContext } from 'react';
import { RechartInputContext } from '../../context/RechartInputContext';
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
  
    const dayOne = props.data.list[0].dt_txt.toString().slice(0, -8);
    const dayTwo = props.data.list[0 + 8].dt_txt.toString().slice(0, -8);
    const dayThree = props.data.list[0 + 16].dt_txt.toString().slice(0, -8);
    const dayFour = props.data.list[0 + 24].dt_txt.toString().slice(0, -8);
    const dayFive = props.data.list[0 + 32].dt_txt.toString().slice(0, -8);

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label"> Data </InputLabel>
                <Select labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={rechartInputData}
                    onChange={handleChange}>
                    <MenuItem value="" >
                        <em> None </em>
                    </MenuItem>
                    <MenuItem value={dayOne.toString()}>{dayOne}</MenuItem>
                    <MenuItem value={dayTwo.toString()}>{dayTwo}</MenuItem>
                    <MenuItem value={dayThree.toString()}>{dayThree}</MenuItem>
                    <MenuItem value={dayFour.toString()}>{dayFour}</MenuItem>
                    <MenuItem value={dayFive.toString()}>{dayFive}</MenuItem>
                </Select>
                <FormHelperText>Chose data to display forecast</FormHelperText>
            </FormControl>
        </div>

    );
}
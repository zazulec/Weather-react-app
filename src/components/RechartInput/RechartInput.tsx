import React, { useContext } from 'react';
import { RechartInputContext } from '../../context/RechartInputContext';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Text } from './styled/StyledText';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

interface Data {
    list: any;
    dt_txt: any | string;
};

interface RechartInputProps {
    data: Data;
    rechartInputData: any;
    setRechartInputData: any;
};


function RechartInput(props: RechartInputProps) {
    
    const classes: any = useStyles();
    const { rechartInputData, setRechartInputData }: any = useContext(RechartInputContext);
    
    const dayCurrent = props.data.list[0].dt_txt.toString().slice(0, -9);
    const dayOne = props.data.list[0 + 8].dt_txt.toString().slice(0, -9);
    const dayTwo = props.data.list[0 + 16].dt_txt.toString().slice(0, -9);
    const dayThree = props.data.list[0 + 24].dt_txt.toString().slice(0, -9);
    const dayFour = props.data.list[0 + 32].dt_txt.toString().slice(0, -9);
    const dayFive = props.data.list[0 + 39].dt_txt.toString().slice(0, -9);

    const handleInputChange = (event: any) => (
        setRechartInputData(event.target.value)
    );
  
    return (
        <div>
            <FormControl className={classes.form} >
                <InputLabel
                    id="demo-simple-select-helper-label"
                    style={{ color: 'white' }}>
                    Data
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={rechartInputData || ""}
                    onChange={handleInputChange}
                    style={{ color: 'white' }}
                >
                    <MenuItem aria-label={"None"} defaultValue="">None</MenuItem>
                    <MenuItem value={dayCurrent.toString()}>{dayCurrent}</MenuItem>
                    <MenuItem value={dayOne.toString()}>{dayOne}</MenuItem>
                    <MenuItem value={dayTwo.toString()}>{dayTwo}</MenuItem>
                    <MenuItem value={dayThree.toString()}>{dayThree}</MenuItem>
                    <MenuItem value={dayFour.toString()}>{dayFour}</MenuItem>
                    <MenuItem value={dayFive.toString()}>{dayFive}</MenuItem>
                </Select>
                <Text>
                    Chose data to display forecast
                </Text>
            </FormControl>
        </div>


    );
   
};

export  { RechartInput };
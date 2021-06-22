import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, FormControlLabel, Grid, MenuItem, RadioGroup, TextField } from '@material-ui/core';
import { useStyles } from './employee-preview.css'
import EmployeeDataJSON from '../../preview-data/employee.json';
import { Iemployee } from '../types/sample-data'
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import { useEffect } from 'react';


function EmployeePreview() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState<Iemployee>({
    name: '',
    age: null,
    nationality: '',
    gender: '',
    dob: '',
  })


  useEffect(() => {
    setFormValues(EmployeeDataJSON);
  }, [])

  const changeHandler = (event) => {
    console.log(event, event.target.name, event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = () => {
    console.log(formValues);
  }
  
  return (
    <div>
      <form noValidate autoComplete="off">
        <Grid container justify="center" alignItems="center" direction="column" className={classes.gridWrapper}>
          <Grid item className={classes.employeeDetail}>
            <strong className={classes.formLabel}>Name </strong>
            <TextField className={classes.textInputs} size='small' value={formValues.name} onChange={changeHandler} name="name" />
          </Grid>
          <Grid item className={classes.employeeDetail}>
            <strong className={classes.formLabel}>Age: </strong>
            <TextField className={classes.textInputs} size='small' value={formValues.age} onChange={changeHandler} name="age" />
          </Grid>
          <Grid item className={classes.employeeDetail}>
            <strong className={classes.formLabel}>DOB: </strong>
            <TextField
              id="dob"
              type="date"
              name="dob"
              className={classes.textInputs}
              value={formValues.dob}
              onChange={changeHandler}
            />
          </Grid>
          <Grid item className={classes.employeeDetail}>
            <strong className={classes.formLabel}>Nationality: </strong>
            <Select
              name='nationality'
              value={formValues.nationality}
              onChange={changeHandler}
              className={classes.textInputs}
            >
              <MenuItem value='America'>America</MenuItem>
              <MenuItem value='India'>India</MenuItem>
              <MenuItem value='Europe'>Europe</MenuItem>
              <MenuItem value='Australia'>Australia</MenuItem>
              <MenuItem value='Iran'>Iran</MenuItem>

            </Select>
          </Grid>
          <Grid item className={classes.employeeDetail}>
            <strong className={classes.formLabel}>Gender: </strong>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" className={[classes.textInputs, classes.radioGroupStyles].join(' ')} row={true} value={formValues.gender} onChange={changeHandler}>
                <FormControlLabel
                  control={<Radio checked={formValues.gender === 'M'} value="M" name="gender" color="primary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Radio checked={formValues.gender === 'F'} value="F" name="gender" color="primary" />}
                  label="Female"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item className={classes.employeeDetail}>
            <Button className={classes.formButton} color="primary" variant="contained" size="small" onClick={submitHandler}> Submit</Button>
          </Grid>
        </Grid>
      </form>

    </div>

  )
}


export default EmployeePreview



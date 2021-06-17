import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './employees-preview.css'
import { Iemployee } from '../types/sample-data'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { tableData } from '../constants/table-data';
import EmployeesDataJSON from '../../preview-data/employees.json';

// props: { data: Iemployee[] }

export default function EmployeePreview() {
  const classes = useStyles();

  return (
    <>

      <Grid container justify="center" alignItems="center" className={classes.tableWrapper}>
        <Grid item>
          <TableContainer component={Paper} className={classes.table}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow >
                  {
                    tableData.map((item) => (
                      <TableCell align='justify' className={classes.tableHeader}>{item.label}</TableCell>
                    ))
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {EmployeesDataJSON.map((row, index) => (
                  <TableRow key={row.id}>
                    {
                      tableData.map((item) => (
                        <TableCell align='justify'>{row[item.value] || index + 1}</TableCell>
                      ))
                    }
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

      </Grid>

    </>

  );
}
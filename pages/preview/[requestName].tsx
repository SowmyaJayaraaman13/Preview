import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import JsxParser from 'react-jsx-parser'
import Button from '@material-ui/core/Button';
import { FormControl, FormControlLabel, Grid, MenuItem, RadioGroup, TextField } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { tableData } from '../../src/constants/table-data';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import path from 'path';
import fs from 'fs'
import React from 'react';

function RequestName(props) {
  return (
    <div>
      <JsxParser
        bindings={{
          tableData: tableData,
          formValues: props.sampleData,
          renderTableHeader: item => <TableCell align='justify' className='tableHeader' >{item.label}</TableCell>,
          renderTableBody: (row, index) => {
            const renderTableContent = item => <TableCell align='justify' >{row[item.value] || index + 1}</TableCell>
            return (
              <TableRow key={row.id}>
                {
                  tableData.map(renderTableContent)
                }
              </TableRow>
            )
          }
        }}
        components={{
          Grid, TextField, Select, FormControl, Radio, FormControlLabel, RadioGroup, MenuItem, Button,
          Table, TableBody, TableCell, TableContainer, TableHead, TableRow
        }}
        jsx={` ${props.formData} `}

      />
    </div>
  )
}



export async function getStaticProps(context) {
  const { params } = context;
  const fileName = `${params.requestName}-preview`;
  const filePath = path.join(process.cwd(), 'data', `${fileName}.txt`)
  const fileData = fs.readFileSync(filePath);
  const sampleFilePath = path.join(process.cwd(), 'preview-data', `${params.requestName}.json`)
  const sampleFileData = fs.readFileSync(sampleFilePath);
  return {
    props: {
      formData: fileData.toString(),
      sampleData: JSON.parse(sampleFileData.toString()),
    }
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default RequestName;

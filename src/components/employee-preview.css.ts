import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
    gridWrapper: {
      height: '100vh',
    },
    formLabel:{
      width: '35%',
    },
    employeeDetail:{
      width: '30%',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      margin: '3px',
      // border: '2px solid red',
    },
    textInputs:{
      marginLeft: '12px',
      width: '350px',
    },
    radioGroupStyles:{
      display: 'flex',
    },
    formButton:{
      width:'25%',
      margin: '0 auto',
    }
  });
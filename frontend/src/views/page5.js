import React, { useState } from "react";
import Layout from './layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { getIntegration } from '../functions/functions';

import { useNavigate } from "react-router-dom";
import { useStyles } from './mystyle';


function Page5() {
  const mystyle = useStyles();
  const navigate = useNavigate();
  const [a, seta] = useState();
  const [b, setb] = useState();


  const [result, setresult] = useState();

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };

  const back = () => {
    navigate("/commath-pj");
  };
  return (

    <div>
      <Layout title={'บทที่ 5'} discription={'INTEGRATION'} />

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} sx={12}>
            <Paper className={mystyle.paper}>

              <span>ตัวอย่างข้อมูล</span>
              <p>a = 0</p>
              <p>b = 3</p>

            </Paper>

            <Paper className={mystyle.paper}>

              <Grid item lg={12}>
                <Grid container spacing={4}>
                  <InputText label={'a'} value={a} set={(e) => seta(e.target.value)} />
                </Grid>
              </Grid>

              <Grid item lg={12}>
                <Grid container spacing={4}>
                  <InputText label={'b'} value={b} set={(e) => setb(e.target.value)} />
                </Grid>
              </Grid>

            </Paper>
            <Paper className={mystyle.paper}>
              <h4>ผลลัพธ์: {result}</h4>
              <div className={mystyle.root}>
                <Button variant="contained" color="primary" onClick={generate}>
                  คำนวน
              </Button>
                <Button variant="contained" color="secondary" onClick={back}>
                  กลับ
              </Button>
              </div>
            </Paper>
            <Paper className={mystyle.warn}>
              ** หมายเหตุ  การค้นหาครั้งแรกอาจใช้เวลานานกว่าปกติ **
            </Paper>
          </Grid>
        </Grid>

      </Container>

    </div>
  );


}

function InputText(props) {


  return (
    <Grid item md={12} sm={12}>
      <TextField
        id="outlined-password-input"
        label={props.label}
        type="text"
        autoComplete="current-password"
        variant="outlined"
        value={props.value}
        onChange={props.set}
      />
    </Grid>

  )

}
export default Page5;
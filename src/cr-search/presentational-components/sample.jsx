import React, { useState } from 'react';
import Grid from 'terra-grid';
import axios from 'axios'
// import ReactTable from 'react-table-6';
import Picky from "react-picky";
import "react-picky/dist/picky.css";
// import 'react-table-6/react-table.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Sample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var atsData = [];
  for (let i = 0; i < 100; i++) {
    atsData.push({ name: i + 'adil' })
  }
  const railsCall = () =>{
    // axios.get('http://localhost:3001/welcome/index',{mode:'cors'}).then((response) => {
    //         console.log("response= ",response)
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    axios.get('http://localhost:6849/access/currentUser',{mode:'cors'}).then((response) => {
      if(response.data==false){
        console.log("truee")
        window.location.replace('https://associates.sandboxcerner.com/accounts/login/auto?returnTo=http://localhost:6684%2Fauth%2Fopenid%2Flogin%2Fcomplete%3Freferer%3D%252F')
      }
      //https://associates.sandboxcerner.com/accounts/login/auto?returnTo=http://localhost:6684%2Fauth%2Fopenid%2Flogin%2Fcomplete%3Freferer%3D%252F
            console.log("response= ",response)
        }).catch((error) => {
            console.log(error);
        })
  }
  return (
    <div className="mainmainmaincontainer">
     <Grid>
         <Grid.Row className="grid_row_spacing">
             <Grid.Column className="spacing" tiny={12} small={6} enormous={6} huge={6} large={6} medium={6}>
                <Picky/>
             </Grid.Column>
             <Grid.Column className="spacing" tiny={12} small={6} enormous={6} huge={6} large={6} medium={6}>
             <Picky/>
             </Grid.Column>
         </Grid.Row>
         <Grid.Row className="grid_row_spacing">
             <Grid.Column className="spacing" tiny={6} small={6} enormous={6} huge={6} large={6} medium={6}>
             <Picky/>
             </Grid.Column>
             <Grid.Column className="spacing" tiny={6} small={6} enormous={6} huge={6} large={6} medium={6}>
             <Picky/>
             </Grid.Column>
             <Grid.Row className="grid_row_spacing">
             <ReactTable
            data={atsData}
            columns={[{
              Header: <div className="ats_header" onClick={railsCall}>Recommended Test Plans from QC(ATS)</div>,
              columns: [
                {
                  Header: () => (
                    <div className="main">
                      <p className="ats_col">
                        Test Plan Name
                                                        </p>
                    </div>
                  ),
                  accessor: 'name',
                  sortable: false
                }
              ]
            }]}
            defaultPageSize={25}
          />
             </Grid.Row>
         </Grid.Row>
         <div className="footer_banner">
                        <span className="copyright">Copyright © {new Date().getFullYear()} Cerner Corporation. All rights reserved.</span>
                    </div>
     </Grid>
    </div>
  );
}
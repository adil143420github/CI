import React from 'react';
import Base from 'terra-base';
import './App.css';
import Button from 'terra-button/lib/Button';
import ExampleNavigation from './header'
import ApplicationNavigationTest from './header2'
import RouteProvider from './route-provider/route_provider';



function App() {
  return (
    <RouteProvider />
  );
}

export default App;
// <ExampleNavigation/>
// <ApplicationNavigationTest/>
    // <Base locale="en">

    //     <ExampleNavigation/>
    //     {/* <ApplicationNavigationTest/> */}
    // </Base>

import React, { Component } from "react";
// import LoopsSidebar from "../components/Sidebar";
// const Dashboard = require("../Dashboard/")


var __html = require('../Dashboard/dashboard.html');
var template = { __html: __html };

class Dashboard extends Component {
    // React.module.exports = React.createClass({
        render() {
          return(
            <div dangerouslySetInnerHTML={template} />
          );
        }
    //   });
}

export default Dashboard;
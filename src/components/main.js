import React from "react";
import "../main.css";
import Sidebar from "./sidebar";

class Main extends React.Component
{
    render()
        {

            return(
            <div className="main-container">
                    <h1 className="main-header">SpaceX Launch Program History</h1>
                    <div className="content-container">
                        <Sidebar/>
                        <div className="shuttle-data">
                        </div>
                    </div>
            </div>)

        }


}

export default Main;
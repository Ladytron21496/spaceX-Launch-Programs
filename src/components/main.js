import React from "react";
import "../main.css";
import Sidebar from "./sidebar";
import Spinner from "./spinner";
import ShuttleCard from "./shuttlecard";
import axios from "axios";

class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            shuttleData: []
        }
    }

    componentDidMount()
    {
        this.setState({loading:true});
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
        .then(res => {
          const shuttleData = res.data;
          this.setState({ loading:false, shuttleData});
        })
    }
    
    render()
        {
            const {shuttleData,loading} = this.state;
            return(<>
            {loading && <Spinner/>}
            <div className="main-container">
                    <h1 className="main-header">SpaceX Launch Program History</h1>
                    <div className="content-container">
                        <Sidebar/>
                        <div className="shuttle-container">
                        {shuttleData.map((item)=>{
                            return <ShuttleCard name={item.mission_name} badge={item.links.mission_patch} launch={item.launch_success} year={item.launch_year} count={item.flight_number}/>
                        })} 
                        </div> 
                    </div>
            </div>
            </>)
        }


}

export default Main;
import React from "react";
import { connect } from "react-redux";
import "../main.css";
import Sidebar from "./sidebar";
import Spinner from "./spinner";
import ShuttleCard from "./shuttlecard";
import axios from "axios";
import { setLoading } from "../redux/action";

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
        let {dispatchLoading} = this.props;
        dispatchLoading(true);
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
        .then(res => {
          const shuttleData = res.data;
          this.setState({shuttleData});
          dispatchLoading(false);
        })
      
    }
    
    render()
        {
            const {shuttleData} = this.state;
            let {loading} = this.props;
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


let mapStateToProps = (state) => 
{
    return {
        loading : state.loading
    }
}

let mapDispatchToProps = (dispatch) => 
{
    return {
        dispatchLoading: (payload) => dispatch(setLoading(payload))
      };
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
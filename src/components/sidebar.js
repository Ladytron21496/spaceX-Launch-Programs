import React from "react";
import {buttonYears , buttonLand , buttonLaunch} from "../data/button";
import {updateFilters , setLoading} from "../redux/action";
import { connect } from "react-redux";
import axios from "axios";
import "../main.css";

class Sidebar extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            six:false,
            seven:false,
            eight:false,
            nine:false,
            ten:false,
            eleven:false,
            twelve:false,
            thirteen:false,
            fourteen:false,
            fifteen:false,
            sixteen:false,
            seventeen:false,
            eighteen:false,
            nineteen:false,
            twenty:false,
            suslaunch:false,
            suslaunchfail:false,
            susland:false,
            suslandfail:false

        }
    }

    getSelected = (year) =>
    {
       let selectedYear = buttonYears.filter((item)=>{
           if(item.name===year)
           {
               return item;
           }
       })
      
       return selectedYear[0].value;
    }

    handleClick = (e) => 
    {
        let {dispatchUpdateFilters,dispatchLoading} = this.props;

        this.setState(()=>{
            if(e.target.name === "suslaunch" || e.target.name === "suslaunchfail")
            {
                return {
                    suslaunch:false,
                    suslaunchfail:false,
                    [e.target.name]:!this.state[e.target.name]
                }
            } else if(e.target.name === "susland" || e.target.name === "suslandfail")
            {
                return {
                    susland:false,
                    suslandfail:false,
                    [e.target.name]:!this.state[e.target.name]
                }
            }
            else
            {
                return  { six:false,
                    seven:false,
                    eight:false,
                    nine:false,
                    ten:false,
                    eleven:false,
                    twelve:false,
                    thirteen:false,
                    fourteen:false,
                    fifteen:false,
                    sixteen:false,
                    seventeen:false,
                    eighteen:false,
                    nineteen:false,
                    twenty:false,[e.target.name]:!this.state[e.target.name]}
            }
        }, ()=>{
            dispatchUpdateFilters(this.state);

            let yearArray = Object.keys(this.state).slice(0,15);
            let year = yearArray.find((item)=>{
                return this.state[item]==true
            })
            year = year !==undefined ? this.getSelected(year) : undefined
            let launch = this.state.suslaunch ? true : this.state.suslaunchfail ? false : "";
            let land = this.state.susland ? true : this.state.suslandfail ? false : "";
            if(launch!== "" || land!=="" || year !== undefined)
            {
                dispatchLoading(true);
                axios.get(`https://api.spacexdata.com/v3/launches?limit=50${launch!==""?`&launch_success=${launch}`:""}${land!==""?`&land_success=${land}`:""}${year!==undefined?`&launch_year=${year}`:""}`)
                .then(res => {
                    dispatchLoading(false);
                })
            }
            else
            {
                dispatchLoading(true);
                axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
                .then(res => {
                    dispatchLoading(false);
                })
            }

            })


       
    }

    render()
        {

            return(
           
                        <aside className="filter-area">
                                <div style={{padding:"12px",fontFamily:"goldman",fontSize:"17px"}}><h2>Filters</h2></div>
                                <section className="filter-section">
                                        <h3 className="filter-section-title">
                                            Launch Year
                                        </h3>
                                        <div className="buttons-container">
                                        {buttonYears.map((item)=>{
                                            return(<button className={this.state[item.name] == true ? "button-active" : "button"} onClick={this.handleClick} name={item.name}>{item.value}</button>)
                                        })}
                                        </div>
                                </section>
                                <section className="filter-section">
                                        <h3 className="filter-section-title">
                                        Successful Launch
                                        </h3>
                                        <div className="buttons-container">
                                           {buttonLaunch.map((item)=>{
                                            return(<button className={this.state[item.name] == true ? "button-active" : "button"} onClick={this.handleClick} name={item.name}>{item.value}</button>)
                                        })}     
                                        </div>
                                </section>
                                <section className="filter-section">
                                        <h3 className="filter-section-title">
                                        Successful Landing
                                        </h3>
                                        <div className="buttons-container">
                                        {buttonLand.map((item)=>{
                                            return(<button className={this.state[item.name] == true ? "button-active" : "button"} onClick={this.handleClick} name={item.name}>{item.value}</button>)
                                        })}                              
                                        </div>
                                </section>
                        </aside>
                      
                 
            )

        }


}

let mapDispatchToProps = (dispatch) => 
{
    return {
        dispatchUpdateFilters: (payload) => dispatch(updateFilters(payload)),
        dispatchLoading: (payload) => dispatch(setLoading(payload))

      };
}
export default connect(null,mapDispatchToProps)(Sidebar);
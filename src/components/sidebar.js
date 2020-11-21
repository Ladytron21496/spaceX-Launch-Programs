import React from "react";
import {buttonYears , buttonLand , buttonLaunch} from "../data/button";
import "../main.css";

class Sidebar extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            six:true,
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

    handleClick = (e) => 
    {
        this.setState({[e.target.name]:!this.state[e.target.name]}, ()=>{
            console.log("this is state",this.state)
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

export default Sidebar;
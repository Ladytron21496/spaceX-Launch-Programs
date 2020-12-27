import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ShuttleCard(props)
{
    let {name , year , launch , land , badge} = props;

    return(  <div className="shuttle-data">
    <LazyLoadImage className="shuttle-badge"src={badge} effect="blur" width={225} />
    <div className="shuttle-info">
<h3 className="shuttle-card-text-main">{name} #{props.count}</h3>
<p className="shuttle-card-text" >Mission Ids</p>
<p className="shuttle-card-text">Launch year: <span>{year}</span></p>
<p className="shuttle-card-text">Successful Launch: <span>{launch ? "true" : "false"}</span></p>
<p className="shuttle-card-text">Successful Landing: <span>{land ? "true" : "false"}</span></p>
    </div>
    
</div>)
}

export default ShuttleCard
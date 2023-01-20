
import React from "react";
import "../styles/road.css";

function Car(props:any) {
  const classname:string=`car-img ${props.classAdd} `

    return(
<React.Fragment>



<svg className={classname}  width="365" height="185">
    {/* <!-- Top --> */}
      <rect x="70" y="10" width="220" height="130" fill="transparent" rx="150" stroke="blue" stroke-width="10" />
    
    {/* <!-- Body --> */}
      <rect x="10" y="70" width="340" height="80" fill={props.color} rx="30" />
      
    <g>
    {/* <!-- Left line --> */}
      <line x1="145" y1="10" x2="145" y2="80" stroke="blue" stroke-width="10"/>

    {/* <!-- Right line --> */}
      <line x1="215" y1="10" x2="215" y2="80" stroke="blue" stroke-width="10"/>
    </g>
  
    <g>
    {/* <!-- Left bumper --> */}
      <rect x="0" y="110" width="40" height="20" fill="#999" rx="10" />
    
    {/* <!-- Right bumper --> */}
      <rect x="325" y="110" width="40" height="20" fill="#999" rx="10" />
    </g>  
  
    {/* <!-- Left wheel --> */}
    <g>
      <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="90" cy="140"/>    
      <circle r="15px" fill="#555" cx="90" cy="140"/>
    </g>
  
    {/* <!-- Right wheel --> */}
    <g>
      <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="270" cy="140"/>
      <circle r="15px" fill="#555" cx="270" cy="140"/>
    </g>  

    <g>
    {/* <!-- Gold light --> */}
      <circle r="15px" fill="gold" cx="340" cy="90"/>
      
    {/* <!-- Orange light --> */}
      <circle r="10px" fill="orange" cx="15" cy="90"/>
    </g>  
</svg>    
</React.Fragment>)}

export default Car;

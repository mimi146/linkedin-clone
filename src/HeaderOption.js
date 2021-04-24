import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon,title}) {
  // console.log(props);
    return (
        <div className="HeaderOption">

    {Icon && <Icon className="HeaderOption_icons"/>}
        <h3 className="HeaderOption_title">{title}</h3>
            
        </div>
    )
}

export default HeaderOption

import React, { useEffect, useState } from 'react'
import './Stream.css'
import { SettingsBackupRestoreTwoTone } from '@material-ui/icons'


const Stream = () => {
  return (
    <div className='stream' >
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
             <div className="stream__statusIndicator">OFFLINE</div>
               <h2>Check out the below streams from Clever Programmer</h2>
             </div>
           <div className="stream__statusInfo">
             <i className="fas fa-bell"></i>
             <p>You will be notified when cleverprogrammer is live</p>        
           </div>
      </div>
    </div>
    <div className="stream__videoEmbed">
      {/* <iframe
       width="500"
       height="295"
       src="YOUR-YT-EMBED-LINK"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen></iframe> */}
    </div>
   </div>
 </div>
)

}
export default Stream
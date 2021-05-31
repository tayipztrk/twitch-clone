import React from 'react'
import ReactDOM from 'react-dom'
import Channel from './Channel'
import {FiSearch} from 'react-icons/all'
import Avatar from '../avatar.png'

const SideBar = () => {

    return(
        <div className="sidebar">
            <div className="sidebar-top">
                <h5>FOLLOWED CHANNELS</h5>
                
                <Channel avatar={Avatar} name="Tayip Ozturk" followers="800K"></Channel>

                <h5>RECOMENDED CHANNELS</h5>
                
                <Channel avatar={Avatar} name="Tayip Ozturk" followers="800K"></Channel>

                <p className="sidebar-showmore">Show More</p>

            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-bottomContainer">
                    <h4><FiSearch className="search-logo"/></h4>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}

export default SideBar
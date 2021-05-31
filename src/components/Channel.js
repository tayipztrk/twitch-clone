import React from 'react'
import ReactDOM from 'react-dom'
import {FaCircle} from 'react-icons/all'

const Channel = ({ avatar, name, followers}) => {

    return(
        <div className="channel">
            <div className="channel-details">
                <img src={avatar} alt="avatar"/>
                <h4>{name}</h4>
            </div>
            <p><FaCircle className="dote"/>{followers}</p>
        </div>
    )
}

export default Channel
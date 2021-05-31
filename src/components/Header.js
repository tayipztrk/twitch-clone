import React from 'react'
import ReactDom from 'react-dom'
import { FaTwitch, FaEllipsisH,FiSearch, BiCrown, FaInbox, BsChatSquare, FaGem, CgProfile} from 'react-icons/all'

const Header = () => {

    return(

        <div className="header">
            <div className="header-left">
                 <h1><FaTwitch className="logo"/></h1>
                 <h4>Following</h4>
                 <h4>Browse</h4>
                 <h2><FaEllipsisH className="more"/></h2>

            </div>
            <div className="header-center">
                <input type="text" placeholder="Search"/>
                <div className="center-logo">
                    <h2><FiSearch className="search-logo"/></h2>
                </div>
            </div>
            <div className="header-right">
                <div className="header-rightContainer">
                    <h3><BiCrown/></h3>
                    <h3><FaInbox/></h3>
                    <h3><BsChatSquare/></h3>
                </div>
                <div className="get-bits">
                    <h4><FaGem/></h4>
                    <h4 id="getbits">Get Bits</h4>
                </div>

                <h1><CgProfile/></h1>
            </div>
        </div>
    )
}

export default Header

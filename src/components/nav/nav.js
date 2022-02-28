import React from 'react'
import { Link } from "react-router-dom";
 
class NavBarComponent extends React.Component{
 
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <nav className="navbar navbar-expand-sm">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/projects" className="nav-link">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link">Blog</Link>
                                    </li>
                                </ul>
                            </nav>

                    </div>
                </div>
            </div>
        )  
    }
}
 
export default NavBarComponent;
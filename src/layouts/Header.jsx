import React from 'react'
import {NavLink} from "react-router-dom";
import "../assets/css/Navbar.css"

const Header = () => {
  return (
 <header>
    <div className="container">
      <input type="checkbox" name="check" id="check"/>
      <div className="logo-container">
        <h3 className="logo">Brand<span>Name</span></h3>
      </div>

      <div className="nav-btn">
        <div className="nav-links">
          <ul>
            <li className="nav-link" >
              <NavLink to="#">Home</NavLink>
            </li>
            <li className="nav-link" >
              <NavLink to="#">Menu<i className="fas fa-caret-down"></i></NavLink>
              <div className="dropdown">
                <ul>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 1</NavLink>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 2</NavLink>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 3<i className="fas fa-caret-down"></i></NavLink>
                    <div className="dropdown second">
                      <ul>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 1</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 2</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 3</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">More<i className="fas fa-caret-down"></i></NavLink>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 1</NavLink>
                              </li>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 2</NavLink>
                              </li>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 3</NavLink>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 4</NavLink>
                  </li>
                  <div className="arrow"></div>
                </ul>
              </div>
            </li>
            <li className="nav-link" >
              <NavLink to="#">Services<i className="fas fa-caret-down"></i></NavLink>
              <div className="dropdown">
                <ul>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 1</NavLink>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 2</NavLink>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 3<i className="fas fa-caret-down"></i></NavLink>
                    <div className="dropdown second">
                      <ul>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 1</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 2</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">Link 3</NavLink>
                        </li>
                        <li className="dropdown-link">
                          <NavLink to="#">More<i className="fas fa-caret-down"></i></NavLink>
                          <div className="dropdown second">
                            <ul>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 1</NavLink>
                              </li>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 2</NavLink>
                              </li>
                              <li className="dropdown-link">
                                <NavLink to="#">Link 3</NavLink>
                              </li>
                              <div className="arrow"></div>
                            </ul>
                          </div>
                        </li>
                        <div className="arrow"></div>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-link">
                    <NavLink to="#">Link 4</NavLink>
                  </li>
                  <div className="arrow"></div>
                </ul>
              </div>
            </li>
            <li className="nav-link" >
              <NavLink to="#">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="log-sign" >
          <NavLink to="#" className="btn transparent">Log in</NavLink>
          <NavLink to="#" className="btn solid">Sign up</NavLink>
        </div>
      </div>

      <div className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div></div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
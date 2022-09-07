import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Sidebar() {
  const auth = useSelector(state=>state.auth); 

	return (
		<div>
		<aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src="dist/img/user2-160x160.jpg"
            className="img-circle"
            alt="User Image"
          />
        </div>
        <div className="pull-left info">
          <p>{auth.user.fname} {auth.user.lname}</p>
          <a href="#">
            <i className="fa fa-circle text-success" /> Online
          </a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Search..."
          />
          <span className="input-group-btn">
            <button
              type="submit"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>

        <li>
          <Link to="/home">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/product">
            <i className="fa fa-gift" /> <span>Products Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/category">
            <i className="fa fa-th" /> <span>Category Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/vendor">
            <i className="fa fa-gears" /> <span>Vendor Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/cmslist">
            <i className="fa fa-file" /> <span>CMS Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/couponlist">
            <i className="fa fa-tag" /> <span>Coupons Manage</span>
            <span className="pull-right-container">
              {/*<small className="label pull-right bg-green">new</small>*/}
            </span>
          </Link>
        </li>
 
      {/*  <li>
          <Link to="/manageuser">
            <i className="fa fa-users" /> <span>User Manage</span>
            <span className="pull-right-container"> 
            </span>
          </Link>
        </li>*/}


        <li className="treeview">
          <Link to="#">
            <i className="fa fa-bell" />
            <span>Orders Manage</span>
            <span className="pull-right-container">
              <small className="label pull-right bg-red">8+</small>
            </span>
          </Link>
          <ul className="treeview-menu">
            <li>
              <Link to="/neworders">
                <i className="fa fa-circle-o" /> New Orders
              </Link>
            </li>
            <li>
              <Link to="/pendingorders">
                <i className="fa fa-circle-o" /> Pending Orders
              </Link>
            </li>
            <li>
              <Link to="deliveredorders">
                <i className="fa fa-circle-o" /> Delivered Orders
              </Link>
            </li>
            <li>
              <Link to="/cancelledorders">
                <i className="fa fa-circle-o" /> Cancelled Orders
              </Link>
            </li>
          </ul>
        </li>
        <li className="treeview">
          <Link to="#">
            <i className="fa fa-money" />
            <span>Offers Manage</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </Link>
          <ul className="treeview-menu">
            <li>
              <Link to="/coupon">
                <i className="fa fa-circle-o" /> Coupon 
              </Link>
            </li>
            <li>
              <Link to="/newdeals">
                <i className="fa fa-circle-o" /> New Deals
              </Link>
            </li> 
          </ul>
        </li> 

        <li className="header">LABELS</li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-red" /> <span>Important</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-yellow" /> <span>Warning</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-circle-o text-aqua" /> <span>Information</span>
          </a>
        </li>
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
			
		</div>
	)
}
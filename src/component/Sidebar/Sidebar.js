import './Sidebar.css'
import React from "react";



const Sidebar = () => {

    return (
     	<div id="sidenav" className="fixed z4 top-0 left-0 bg-white p2">
	

		<p className="m0 muted bold">InsertApps</p>

		<hr></hr>

		<ul className="list-reset muted m0">
			<li className="h6 caps mb2">about</li>
			<li className="pointer mb2">
			
				<span className="align-middle">About</span>
			</li>
			<li className="pointer mb2">
			
				<span className="align-middle">Email</span>
			</li>
			<li className="pointer mb2">
			
				<span className="align-middle">RSS</span>
			</li>
		</ul>

		<hr></hr>

		<ul className="list-reset muted m0">
			<li className="h6 caps mb2">Categories</li>
			<li className="pointer mb2">
				
				<span className="align-middle">Category Item</span>
			</li>
			<li className="pointer mb2">
			
				<span className="align-middle">Category Item</span>
			</li>
			<li className="pointer mb2">
				
				<span className="align-middle">Category Item</span>
			</li>
		</ul>
	</div>
    )
}
export default Sidebar
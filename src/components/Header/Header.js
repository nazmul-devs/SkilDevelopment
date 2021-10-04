import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
	const navItemStyle = {
		color: "#000000c5",
		fontSize: "20px",
		margin: "0 10px",
	};
	const navItemActive = {
		fontWeight: "700",
	};
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<img src={logo} width="80" alt="" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink
							activeStyle={navItemActive}
							className="nav-item"
							style={navItemStyle}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							activeStyle={navItemActive}
							className="nav-item"
							style={navItemStyle}
							to="/services"
						>
							Services
						</NavLink>
						<NavLink
							activeStyle={navItemActive}
							className="nav-item"
							style={navItemStyle}
							to="/cources"
						>
							Cources
						</NavLink>
						<NavLink
							activeStyle={navItemActive}
							className="nav-item"
							style={navItemStyle}
							to="/about"
						>
							About
						</NavLink>
					</Nav>
				</Navbar.Collapse>
				<div className="float-end">
					<Button variant="primary" className="fw-bold">
						APPLY NOW
					</Button>
				</div>
			</Container>
		</Navbar>
	);
};

export default Header;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ({ name }) => {
	return (
		<NavContainer>
			<LinkWrapper>
				<Link to="/">Home</Link>
			</LinkWrapper>
			<LinkWrapper>
				<Link to="/about">About</Link>
			</LinkWrapper>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	border: 2px solid black;
	padding: 1px;
	background-color: black;
	display: flex;
	justify-content: space-between;
`;

const LinkWrapper = styled.div`
	padding: 5px;
	a {
		color: white;
		text-decoration: none;
	}
`;

export default Nav;

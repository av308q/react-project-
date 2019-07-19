import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookCard = ({ author, bookTitle, discription }) => {
	return (
		<BookContainer>
			<div>{author}</div>
			<div>{bookTitle}</div>
			<div>{discription}</div>
		</BookContainer>
	);
};

const BookContainer = styled.div`
  border: 20px solid black;
  padding: 20px;
  color: black;
  background-color; black;
  display: flex;
  justify-content: space-between;
  margin: 50px;
`;

export default BookCard;

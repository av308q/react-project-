import React from "react";
import { bookList } from "../data/books";
import styled from "styled-components";

const BookShow = ({ match }) => {
	const { id } = match.params;

	const bookId = parseInt(id);
	const singleBook = bookList.filter(book => book.id === bookId);
	const singleBookTags = singleBook[0].tags;

	return (
		<BookShowContainer>
			<h1>{singleBook[0].author}</h1>
			<h2>{singleBook[0].bookTitle}</h2>
			{singleBookTags.map((tag, key) => {
				return <div>{tag}</div>;
			})}
		</BookShowContainer>
	);
};

const BookShowContainer = styled.div`
	border: 5px solid black;
	padding: 10px;
	background-color: ;
`;

export default BookShow;

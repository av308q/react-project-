import React from 'react';
import BookCard from "../components/BookCard";
import { bookList } from "../data/books";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      This React project uses state and props using random json Generator.
      The json data give us a list of books, clicking on the books gives you more info on
      the summary of the book an author. 
    </div>
  );
};

export default About;
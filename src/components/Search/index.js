import { useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { books } from "./searchData";
const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const BooksList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;
export default function Search() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  return (
    <SearchContainer>
      <Title>looking for a new read ?</Title>
      <Subtitle>Find your next book</Subtitle>
      <Input
        placeholder="Write here the name..."
        onBlur={(event) => {
          const searchedText = event.target.value;
          const searchResult = books.filter((book) =>
            book.name.includes(searchedText)
          );
          setSearchedBooks(searchResult);
        }}
      />
      {searchedBooks.map((book) => (
        <BooksList key={book.id}>
          <p>{book.name}</p>
          <img src={book.src} alt={book.name} />
        </BooksList>
      ))}
    </SearchContainer>
  );
}

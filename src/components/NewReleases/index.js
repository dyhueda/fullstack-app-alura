import RecommendedCard from "../RecommendedCard";
import { Title } from "../Title";
import { books } from "./newReleasesData";
import styled from "styled-components";
import bookImage from "../../images/book2.png"

  const NewReleasesContainer = styled.section`
    background-color: #ebecee;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
  `;
  const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
  `;
export default function NewReleases() {

  return (
    <NewReleasesContainer>
      <Title color="#EB9B00" fontSize="36px">
        New Releases
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt={book.name} key={book.name} />
        ))}
      </NewBooksContainer>
      <RecommendedCard title="Maybe you will like this"
      subtitle="Angular 11"
      description="Building an app with Google platform"
      img={bookImage}
      />
    </NewReleasesContainer>
  );
}

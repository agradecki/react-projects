import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptatum quaerat impedit doloremque quo beatae, odit enim tempora error, minima fugit dolorem sed ratione! Assumenda vel similique tenetur consectetur dicta.",
  },
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Konrad Kwiatkowski",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptatum quaerat impedit doloremque quo beatae, odit enim tempora error, minima fugit dolorem sed ratione! Assumenda vel similique tenetur consectetur dicta.",
  },
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, voluptatum quaerat impedit doloremque quo beatae, odit enim tempora error, minima fugit dolorem sed ratione! Assumenda vel similique tenetur consectetur dicta.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return <div className="home">{artList}</div>;
};

export default HomePage;

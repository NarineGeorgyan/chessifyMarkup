import React from "react";
import { data } from "../data";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <section className="news">
      {data &&
        data.map((newItem) => <NewsItem key={newItem.id} {...newItem} />)}
      <div>
        <button className="btn">Load More</button>
      </div>
    </section>
  );
};

export default News;

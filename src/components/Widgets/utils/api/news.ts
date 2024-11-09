const API =
  "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";

export type NewsDataType = {
  author: string;
  description: string;
  source: string;
  title: string;
  urlToImage: string;
  newsLink: string;
};

export const getNewsData = async (): Promise<NewsDataType> => {
  const response = await fetch(API);
  const { articles } = await response.json();
  const { author, description, source, title, urlToImage, url } =
    articles[Math.floor(Math.random() * articles.length)];

  return {
    author,
    description,
    source: source.name,
    title,
    urlToImage,
    newsLink: url,
  };
};

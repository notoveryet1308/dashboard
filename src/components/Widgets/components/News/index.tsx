import useGetNewsData from "../../hooks/useGetNewsData";

import Loader from "../../Loader";
import { StyledNewsWidget } from "./style";

const News = ({ widgetId }: { widgetId: string }) => {
  const { newsData, error } = useGetNewsData({ widgetId });

  if (!newsData && !error) return <Loader />;

  return (
    <StyledNewsWidget
      href={newsData?.newsLink}
      $bgImg={newsData?.urlToImage}
      target="_blank"
    >
      <div className="news-bg-image" />
      <div className="news-content">
        <div className="news-top">
          <h3>{newsData?.title}</h3>
          <p>{newsData?.description}</p>
        </div>
        <span className="news-source">{newsData?.source}</span>
      </div>
    </StyledNewsWidget>
  );
};

export default News;

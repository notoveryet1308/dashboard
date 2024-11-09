import { useEffect, useState } from "react";
import { getNewsData, NewsDataType } from "../utils/api/news";

import localStorageService from "../../../utils/localStorage";

const useGetNewsData = ({ widgetId }: { widgetId: string }) => {
  const [newsData, setNewsData] = useState<NewsDataType | null>(
    localStorageService.getData(widgetId).data || null
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!newsData) {
      getNewsData()
        .then((data) => {
          setNewsData(data);
          if (data) localStorageService.setData(widgetId, data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [newsData, widgetId]);

  return { newsData, error };
};

export default useGetNewsData;

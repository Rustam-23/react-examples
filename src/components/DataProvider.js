import React, { useEffect, useState } from "react";

export const DataProvider = (props) => {
  const { url, renderContent } = props;
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [url])
  
  return (
    <div>
      {renderContent(data)}
    </div>
  );
};

import React, { useState, useEffect } from "react";

export default function ApiExample() {
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.mercadolibre.com/items/MLA841413632')
    .then(response => {
      return response.json();
    })
    .then(res => {
      setData(res);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    setLoading(true);
    fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1071&limit=10')
    .then(response => {
      return response.json();
    })
    .then(res => {
        console.log(res.results);
      setProductList(res.results);
      setLoading(false);
    })
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div style={{
      "display": "flex",
      "flexDirection": "column", 
      "flexWrap": "wrap", 
      "justifyContent": "center", 
      "alignItems": "center"
    }}>
      <h4>{data.title}</h4>
      <img alt="thumbnail"
        src={data.secure_thumbnail} 
        style={{"width": "100px"}}
      />
      <p>$ {data.price}</p>
      <p>product_id: {data.id}</p>
      <a href={data.permalink}>BUY NOW</a>

      <ul>
          {productList.map ((item) => {
          return <h4>{item.title}</h4> })}
      </ul>

    </div>
  );
}

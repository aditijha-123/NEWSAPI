import React, { useState, useEffect } from 'react'
import { Newsitem } from './Newsitem'

export const News = (props) => {
  const [articles, setArticles] = useState([]);

useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7914ce93eb684b268fbe80c54a3e4d8a`);
        const json = await response.json();
        console.log(json.articles);
        setArticles(json.articles);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [props.country, props.category]);




  return (

    <div className='container my-3' >

      <h1>Samachaar - Top Headlines</h1>
      <div className='row'>

        {articles && articles.map((articles => {
          return <div className="col-md-4" key={articles.url}>
            <Newsitem imageurl={!articles.urlToImage ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : articles.urlToImage} title={articles.title} description={articles.description}
              url={articles.url} />

          </div>
        }
        ))}
      </div>
      <div className='d-flex justify-content-between'>


      </div>
    </div>
  )
}

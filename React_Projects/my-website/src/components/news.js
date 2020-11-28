import React, { useState } from "react";

function News() {

    const api_key = process.env.REACT_APP_NEWS_API_KEY;
    const base = 'http://newsapi.org/v2/top-headlines?language=en&country=us';
    const news_url = 'https://api.theartnewspaper.com/text-to-image?text=News&w=1200&h=630&bg=d9212d&txtclr=ffffff&fs=150';

    const [articles, setArticles] = useState([]); 


    const getNews = () => {
        fetch(`${base}&apiKey=${api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setArticles(data.articles);
            })
    }

    return (
        <div className='news-main' style={{textAlign: 'center'}}>
            <h1>Top Stories</h1>
            <button onClick={getNews}>Refresh</button>
            <div className='news-container'>
                <ul className='news-stories'>
                    {articles.map((val, idx) => {
                        return (
                            <div className='story' key={idx}>
                                <li key={idx}>
                                    <a href={val['url']} className='news-img'>
                                        <img 
                                            src={val['urlToImage'] == null ? news_url : val['urlToImage']} 
                                            alt='To Story ->'
                                            height='200px'
                                            width='100%'
                                        />
                                        <p style={{fontWeight:'bold', textDecoration:'underline', color: 'black'}}>{val['title']}</p>
                                    </a>
                                    
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default News;
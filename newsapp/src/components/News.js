import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component"

// import PropTypes from 'prop-types'

const News=(props)=>{

    News.defaultProps = {
        category: "general",
    }

    const [articles,setArticles] = useState([]);
    const [totalResults,setTotalResults] = useState(0);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [pageSize,setPageSize] = useState(6);


    const updateNews = async ()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(()=>{
        updateNews();
        document.title = `News88 - ${props.category} news`;

    },[])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${pageSize}`;
        setPage(page+1);    
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

        return (

            <div>
                <h1 align="center" className="my-4"  style={{ color: 'white' }}>Top {props.category} headlines</h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading/>}
                >
                    <div className="container my-5">
                        <div className="card-deck row">
                            {articles.map((ele, i) => {
                                return <div className="col-md-4" key={i}>
                                    <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

            </div>
        )
}

export default News
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        category: "general",
    }

    articles = [
    ]


    constructor(props) {
        super(props);
        this.state = {
            totalResults: 0,
            articles: this.articles,
            loading: false,
            page: 1,
            pageSize: 9,
        }
        document.title = `News88 - ${this.props.category} news`;

    }

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });


    }

    // handleNext = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    //     this.setState({ page: (this.state.page) + 1 });
    //     window.scrollTo({ top: 0, behavior: "smooth" });

    // }

    // handlePrev = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    //     this.setState({ page: (this.state.page) - 1 });
    //     window.scrollTo({ top: 0, behavior: "smooth" });

    // }

    fetchMoreData = async () => {
        this.setState({ page: (this.state.page + 1) });
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    };


    render() {


        return (

            <div>
                <h1 align="center" style={{ color: 'white' }}>Top {this.props.category} headlines</h1>
                {/* {this.state.loading && <Loading />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading />}
                >

                    <div className="container my-5">
                        <div className="card-deck row">
                            {this.state.articles.map((ele, i) => {
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

}

export default News


// import React from 'react'

// export default function News(props) {

//   return (
//     <div>
//          <div className="container my-5">
//                     <h1 align="center" style={{ color: 'white' }}>Top {props.category} headlines</h1>
//                     {loading && <Loading />}
//                     {loading && <div>
//                         <div className="card-deck row">
//                             {this.state.articles.map((ele,i) => {
//                                 return <div className="col-md-4" key={i}>
//                                     <NewsItem  title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
//                                 </div>
//                             })}
//                         </div>
//                         <div className="d-flex justify-content-between">
//                             <button disabled={page <= 1} type="button" className="btn btn-info" onClick={handlePrev}>Previous</button>
//                             <button disabled={page >= totalResults / pageSize} type="button" className="btn btn-info" onClick={handleNext}>Next</button>
//                         </div> </div>}
//                 </div>
//     </div>
//   )
// }

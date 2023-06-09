import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
// import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        category: "general",
        title: "Top news",
        
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
            pageSize: 9
        }
        document.title = `News88 - ${this.props.category} news`;
      
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState();

        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });


    }

    handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.setState({ page: (this.state.page) + 1 });
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    handlePrev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.setState({ page: (this.state.page) - 1 });
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    render() {


        return (

            <div>
                <div className="container my-5">
                    <h1 align="center" style={{ color: 'white' }}>{this.props.title}</h1>
                    {this.state.loading && <Loading />}
                    {!this.state.loading && <div>
                        <div className="card-deck row">
                            {this.state.articles.map((ele) => {
                                return <div className="col-md-4">
                                    <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
                                </div>
                            })}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrev}>Previous</button>
                            <button disabled={this.state.page >= this.state.totalResults / this.state.pageSize} type="button" className="btn btn-info" onClick={this.handleNext}>Next</button>
                        </div> </div>}


                </div>
            </div>
        )
    }

}

export default News
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';

export class News extends Component {
    articles = [
    ]

    constructor() {
        super();
        this.state = {
            totalResults : 0 ,
            articles: this.articles,
            loading: false,
            page : 1 ,
            pageSize : 9
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState();

        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading : false});


    }

    handleNext = async ()  =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading : false});
        this.setState({ page: (this.state.page)+1 });
        window.scrollTo({ top: 0, behavior: "smooth" });
        
    }
    
    handlePrev = async () =>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d45e688ec7464a6f85a6256625d57cc4&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading : false});
        this.setState({ page: (this.state.page)-1 });
        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    render() {

        return (
            <div>
                <div className="container my-5">
                {this.state.loading && <Loading/>}
                <h1 align="center" style={{color: 'white'}}>Top News of India </h1>
                    <div className="card-deck row">
                        {this.state.articles.map((ele) => {
                            return <div className="col-md-4">
                                <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} />
                            </div>
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" class="btn btn-info"  onClick={this.handlePrev}>Previous</button>
                        <button disabled={this.state.page >= this.state.totalResults/this.state.pageSize}type="button" class="btn btn-info" onClick={this.handleNext}>Next</button>
                    </div>


                </div>
            </div>
        )
    }

}

export default News
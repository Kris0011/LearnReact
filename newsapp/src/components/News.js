import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d45e688ec7464a6f85a6256625d57cc4";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles});
    }
    render() {

        return (
            <div>
                <div className="container my-5">
                    <div className="card-decks row">
                        {this.state.articles.map((ele) => {
                            return <div className="col-md-4">
                                <NewsItem title={ele.title} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default News
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
                <div className="card my-4" style={{height :'580px'}}>
                    <img className="card-img-top" src={imgUrl} alt="" />
                    <div className="card-body" >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        <div className="card-footer">
                            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>

                        </div>
                    </div>
                </div>
        )
    }
}

export default NewsItem
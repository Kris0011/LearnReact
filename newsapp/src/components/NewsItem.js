import React from 'react'

export default function NewsItem(props) {
    let { title, description, imgUrl, newsUrl , author , date} = props;
    return (
            <div className="card my-4" style={{ minHeight: '500px' }}>
                <img className="card-img-top" src={imgUrl} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='d-flex justify-content-between'>
                        {author!==null && <p className="card-text"><small>News by - {author}</small></p>}
                        {date!==null &&<p className="card-text"><small>On {new Date(date).toLocaleString()}</small></p>}
                    </div>
                    
                    <div className="card-footer">
                        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}




// import React, { Component } from 'react';

// export class NewsItem extends Component {

//     render() {
        
//         let { title, description, imgUrl, newsUrl , author , date} = this.props;
//         return (
//             <div className="card my-4" style={{ minHeight: '500px' }}>
//                 <img className="card-img-top" src={imgUrl} alt="" />
//                 <div className="card-body">
//                     <h5 className="card-title">{title}</h5>
//                     <p className="card-text">{description}</p>
//                     <div className='d-flex justify-content-between'>
//                         {author!==null && <p className="card-text"><small>News by - {author}</small></p>}
//                         {date!==null &&<p className="card-text"><small>On {new Date(date).toLocaleString()}</small></p>}
//                     </div>
                    
//                     <div className="card-footer">
//                         <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default NewsItem;



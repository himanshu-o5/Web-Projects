import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, url} = this.props;
    return (
        <div>
            <div className="card" style={{width: "18rem", height: "25rem"}}>
            <img src={imageUrl? imageUrl:'https://codescandy.com/geeks-bootstrap-5/assets/images/placeholder/placeholder-4by3.svg'} style={{height: "11.5rem"}}className="card-img-top" alt='Cannot show article'/>
            <div className="card-body">
                <h5 className="card-title">{title.length>40 ? title.slice(0, 40) + " ..." : title}</h5>
                <p className="card-text">{description ? description.length>88 ? description.slice(0,88) + " ..." : description : "Visit Site for more details"}</p>
                <a href={url} className="btn btn-success">Visit Website</a>
            </div>
            </div>
        </div>
    )
  }
}

export default NewsItem

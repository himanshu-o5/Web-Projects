import React, { Component } from 'react'
import NewsItem from './NewsItem'
import loading from '../Animation - 1710996623903.gif'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalArticles: 0
        }
    }

    async componentDidMount(){
        let data =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=921b92ab96564682876a57944d721d8b&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        let parsedData = await data.json();
        this.setState({totalArticles: parsedData.totalResults});
        this.setState({articles: parsedData.articles})
        this.setState({loading: false})
    }

    handlePrevClick = async () => {
        this.setState({loading: true})
        this.setState({page: this.state.page - 1})
        let data =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=921b92ab96564682876a57944d721d8b&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        this.setState({loading: false})
    }


    handleNextClick = async () => {
        this.setState({loading: true})
        this.setState({page: this.state.page + 1})
        let data =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=921b92ab96564682876a57944d721d8b&page=${this.state.page}&pageSize=${this.props.pageSize}`)
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
        this.setState({loading: false})
    }

    render() {
        return (
        <div className='container'>
            <div style={{textAlign: "center"}}>
                <h1>NEWSMONKEY</h1>
                <h3>Top-Headlines</h3>
            </div>

            <div className="newsItems" style={{display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3rem"}}>
                {this.state.loading ? <img src={loading} style={{margin: "auto"}}alt="loading..."/> :this.state.articles.map((ele) => {
                    return (
                        <div>
                            <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} url={ele.url} />
                        </div>
                    )
                })}
            </div>

            <div style={{display: "flex", justifyContent: "space-between", margin: "2rem"}}>
                <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-primary'>&larr; Previous Page</button>
                <button disabled={this.state.page>=Math.ceil(this.state.totalArticles/this.props.pageSize)} onClick={this.handleNextClick} className='btn btn-primary'>Next Page &rarr;</button>
            </div>
        </div>
        )
    }
}

export default News

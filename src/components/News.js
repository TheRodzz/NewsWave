import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    static propTypes = {

    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false });
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page + 1,loading:false });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e24022a4b4a6456dbdc8456a8f281615&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page - 1,loading:false });
    }
    render() {

        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - Top headlines</h2>
                {this.state.loading && <Spinner/> }
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevClick}>
                        &larr; Previous
                    </button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>

        )
    }
}

export default News

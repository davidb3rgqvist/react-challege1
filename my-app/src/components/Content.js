import React, { Component } from 'react';
import css from './css/Content.module.css';
import savedPosts from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      posts: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true, posts: savedPosts.savedPosts });
    }, 2000);
  }

  handleSearch = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.savedPosts.filter(post =>
      post.name.toLowerCase().includes(searchInput)
    );
    this.setState({ searchInput, posts: filteredPosts });
  };

  render() {
    const { isLoaded, posts, searchInput } = this.state;

    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor="searchInput">Search by Artist Name: </label>
            <input
              type="search"
              id="searchInput"
              value={searchInput}
              onChange={this.handleSearch}
            />
            <h4>Posts Found: {posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {isLoaded ? (
            posts.map((post) => <PostItem key={post.title} post={post} />)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;

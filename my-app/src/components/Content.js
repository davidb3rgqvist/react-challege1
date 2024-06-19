import React, { Component } from 'react';
import css from './css/Content.module.css';
import posts from '../posts.json';
import PostItem from './PostItem';

class Content extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { savedPosts } = posts;

        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {/* Render using a child component */}
                    <PostItem savedPosts={savedPosts} />
                </div>
            </div>
        );
    }
}

export default Content;

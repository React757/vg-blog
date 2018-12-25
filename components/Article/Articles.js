import React from 'react';
import PropTypes from 'prop-types';

import ArticleThumb from './ArticleThumb/ArticleThumb';
import classes from './Articles.scss';

const Articles = props => (
  <div>
    <ul className={classes.articles}>
      {props.posts.map((post, index) => (
        <ArticleThumb key={index} post={post} />
      ))}
    </ul>
  </div>
);

Articles.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Articles;

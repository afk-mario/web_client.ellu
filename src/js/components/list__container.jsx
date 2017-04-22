import PropTypes from 'prop-types';
import React from 'react';
import Page from './page.jsx';
import List from './list.jsx';
import CategoryList from '../containers/project__filter__categories.js';
import TagList from '../containers/project__filter__tags.js';
import ImageList from '../containers/Images.js';

const Container = ({ id, title, isFetching, items, categories, tags, images, route }) => {
    return (
    <Page 
        id = { id }
        title = { title }
        isFetching = { isFetching }
    >
        { categories != null && <CategoryList className="categories" /> }
        { tags != null && <TagList className="tags" /> }
        { images != null && <ImageList></ImageList> }
        <List items={ items } route={ route } />
    </Page>
    );
};

Container.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        title: PropTypes.string
    }).isRequired).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape()),
    tags: PropTypes.arrayOf(PropTypes.shape()),
    images: PropTypes.arrayOf(PropTypes.shape()),
    route: PropTypes.string.isRequired
};

export default Container;
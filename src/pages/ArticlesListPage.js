import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () =>{

    return (
    <>
        <h1>Articles listes!</h1>
        <ArticlesList articles={articleContent} />
    </>
);
}

export default ArticlesListPage;
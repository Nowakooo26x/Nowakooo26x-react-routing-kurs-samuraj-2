import React from 'react';
import Article from '../components/Article'

const article = [
    {
        id: 1,
        title: "1Czym jest teoria",
        author: "1Jan Nowak",
        text: "1Lore ipsum ..."
    },
    {
        id: 2,
        title: "2Czym jest teoria",
        author: "2Jan Nowak",
        text: "2Lore ipsum ..."
    },
    {
        id: 3,
        title: "3Czym jest teoria",
        author: "3Jan Nowak",
        text: "3Lore ipsum ..."
    },
]

const HomePage = () => {

    const articleList = article.map(art => (
        <Article key={art.id} {...art}/>
    ))

    return(
        <div className="home">{articleList}</div>
    );

}

export default HomePage;
import React from "react";
import Article from "./Article";

function ArticleList ({ posts }) {
    const ArrayOfData =  posts.map((post)=> {
        return (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        );
    });
    return(
        <main>
           { ArrayOfData }
        </main>
    )
}

export default ArticleList;
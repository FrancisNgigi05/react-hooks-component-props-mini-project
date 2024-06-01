import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const post = posts.map((p) => {
        return (
            <Article key={p.id} title={p.title} date={p.date} minutes={p.minutes} preveiew={p.preview}/>
        )
    })

    return (
        <main>
            {post}
        </main>
    )
 }

export default ArticleList

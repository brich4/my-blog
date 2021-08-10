import React from 'react'
import articleContent from './ArticleContent'

function Article({match}) {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);
    if (!article) return <h1 className="sm:text-4xl text-2xl text-center font-bold mt6 mb-6 text-red-600">Oops! This Article is lost in the sauce.</h1>
    return (
        <>
            <h1 className="sm:text-4xl text-2xl text-center font-bold mt-6 mb-6 text-grey-900">
                {article.title}
            </h1>
            {article.content.map((paragraph, index) => (
                <p className='mx-auto leading-relaxed tex-base mb-4' key={index}>
                    {paragraph}
                </p>
            ))}
        </>
    );
};

export default Article

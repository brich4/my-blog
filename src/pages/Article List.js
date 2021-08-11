import React from 'react'
import { Link } from 'react-router-dom';
import Article from './ArticleContent'

const ArticleList = () => {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl text-center font-bold mt-6 mb-6 text-grey-900">
                Article List
            </h1>
            <div className="container py-4 mx-auto">
              <div className="flex flex-wrap -m-4">
                  {Article.map((Article, index) => (
                      <div key={index} className="p-4 md:w-1/2">
                          <div className="h-full border-2 border-blue-200 border-opacity-60 rounded-lg overflow-hidden">
                             <Link to={`/Article/${Article.name}`}>
                                 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Article.thumbnail} alt="blog" />
                             </Link>
                             <div className='p-6'>
                                 <Link key={index} to={`/Article/${Article.name}`}>
                                     <h3 className='title-font text-lg font-medium text-gray-800 mb-3'>{Article.title}</h3>
                                 </Link>
                             </div>
                          </div>
                      </div>

                  ))}

              </div>
            </div>
        </>
    );
}

export default ArticleList

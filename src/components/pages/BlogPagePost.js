import React from 'react'
import {useParams} from "react-router-dom";
import {postsList} from "../../data/blogPageData";

const BlogPagePost = () => {
    const params = useParams()
    const currentPost = postsList.filter(post => post.postId === params.blogPost)

    return (
        <section className='blog-page__post'>
            <div className="container">
                <div className='blpage-post__body'>
                    <span className='blpage-post__subTitle'>{currentPost[0].subTitle}</span>
                    <h1 className='blpage-post__title'>{currentPost[0].title}</h1>
                    <span className='blpage-post__host'>{currentPost[0].host}</span>
                    <div className='blpage-post__mainImg-block'>
                        <img src={currentPost[0].img} alt=""/>
                    </div>
                    <div className='blpage-news__list'>
                        <div className='blpage-news__list-item news-item1'>
                            <h2 className='blpage-news__list-item__title'>{currentPost[0].news[0].title}</h2>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                            <img className='blpage-news-item1__img' src={currentPost[0].news[0].img} alt=""/>
                        </div>
                        <div className='blpage-news__list-item news-item2'>
                            <h2 className='blpage-news__list-item__title2'>{currentPost[0].news[1].title}</h2>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                            <div className='blpage-news__list-item__note'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolore illo minus perspiciatis saepe voluptate? Consequuntur ea facilis iure laudantium magnam nemo quo veniam?
                            </div>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                        </div>
                        <div className='blpage-news__list-item news-item3'>
                            <h4 className="blpage-news__list-item__title3">{currentPost[0].news[2].title}</h4>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                            <ul className="news-item3__list">
                                {currentPost[0].news[2].postNList.map((note, ind) => (
                                    <li className='news-item3__list-item'>{note.text}</li>
                                ))}
                            </ul>
                            <p className='blpage-news__list-item__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, amet asperiores dicta dolorem ea, eius excepturi ipsam magnam minima quis sit sunt tempora temporibus ullam ut voluptatum! Ab aliquam amet asperiores consequuntur deserunt dicta facilis illum incidunt necessitatibus nemo neque, nobis obcaecati perferendis, provident quibusdam quod repellat sed voluptatibus.</p>
                            <p className="blpage-news__list-item__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse expedita magnam magni molestiae necessitatibus nobis quidem reiciendis rem soluta temporibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPagePost
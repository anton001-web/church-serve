import React from 'react'
import {postsList} from "../../data/blogPageData";
import {CardComp} from "../CardComp";
import {Link} from "react-router-dom";
import {scrollTop} from "../Header";

const Blog = () => {


    return (
        <section className='blog-page-wrap'>
            <div className='blog-page'>
                <div className="container">
                    <div className='blog-page__body'>
                        <span className='blog-page__subTitle'>our blog</span>
                        <h1 className='blog-page__title title'>most recent post</h1>
                        <div className='blog-page__recent-post__block'>
                            <div className='blPage-recent-post__imgBlock'>
                                <img src="./assets/images/recentPostImg.png" alt=""/>
                            </div>
                            <div className='blPage-recent-post__info-block'>
                                <div className='blpage-recent-post__header'>
                                    <span className='bl-page-recent-post__header-text'>tuesday 13 may, 2022</span>
                                    <span className='bl-page-recent-post__header-text'>by john nuhau deo</span>
                                </div>
                                <h1 className='blpage-rctPage-title'>Church was doing what he often <br/> did when dropped An oracle </h1>
                                <p className='blpage-rctPage-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos, dolore est magnam maiores nulla quisquam recusandae, rerum sequi sunt tenetur, veniam voluptas! Eligendi eos magni necessitatibus optio possimus quod ratione tempore vero? Aperiam assumenda exercitationem, facere incidunt ipsum, molestiae natus obcaecati praesentium quod tempore ullam voluptatibus. Iusto, natus tenetur?</p>
                                <button className="blpage-rctPage-btn">read more</button>
                            </div>
                        </div>
                        <div className='blog-page__posts-list__block'>
                            <h1 className='blpage__posts-list__title'>all blog posts</h1>
                            <div className='blpage__posts-list'>
                                {
                                    postsList.map((post, ind) => (
                                        <Link to={post.href} onClick={scrollTop}>
                                            <CardComp data={post} key={ind} />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
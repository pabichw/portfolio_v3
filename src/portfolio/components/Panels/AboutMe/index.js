import React from 'react';
import Link from 'next/link'
import '../../../../styles/panels/about-me/index.scss';
import RoundedHeart from '../../RoundedHeart/index';
import Fade from 'react-reveal/Fade';
import PostThumbnail from '../../PostThumbnail/index';

const studentIco = '/static/images/student-ico.png';
const workIco = '/static/images/work-ico.png';

const facts = [
  {label: 'I\'ve been coding commercially since 2019 and not planning to stop !!!11', ico: <img src={workIco} className="fact-ico" alt="work" />},
  {label: 'I\’m a Bachelor of Computer Science graduted from Lodz University of Technology.', ico: <img src={studentIco} className="fact-ico" alt="student" />},
  {label: 'I enjoy front-end development!', ico: <RoundedHeart/>},
];

const AboutMe = ({ postsData }) => {
  return (
    <div id="aboutMe" className="about-me-panel-wrapper scroll-container">
      <article className="about-me-top-container">
        <Fade top>
          <h3 className="facts-title">Some facts about me:</h3>
        </Fade>
        <Fade bottom cascade>
          <ul className="facts-wrapper">
            {facts.map((fact, idx) => (
                <li key={idx} className="fact">
                  {fact.ico}
                  <div className="fact-label">
                    {fact.label}
                  </div>
                </li>
              )
            )}
          </ul>
        </Fade>
        <Fade bottom>
          <section class="blog-section__container">
            <h3>Check out my recent blog posts: </h3>
            <ul>
              {postsData?.posts?.map(post => <PostThumbnail key={`post-${post.id}`} data={post} />)}
              {postsData?.error && <p className="error-text">{`Couldn't get posts ;(`}</p>}
            </ul>
            <Link href="/blog" class="container__link">All Posts</Link>
          </section>
        </Fade>
      </article>
    </div>
  );
}

export default AboutMe;

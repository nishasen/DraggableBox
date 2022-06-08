import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosition } from '../Context';
import './Styles.css';

const Page2 = () => {
  const navigate = useNavigate();
  const { setBorder, dispatch } = usePosition();
  return (
    <div className="page">
        <nav className="nav">
            <div className="page2-header">Page 2</div>
        </nav>
        <main className="main">
          <div className="main-container">
          <h3>This is a short story on my journey of becoming a Frontend Developer</h3>
          <p>Hey, This is Nisha Sen, and I am a Frontend developer by proffession. I love to build stuff not with bricks and cement but by coding it out. While I was very new to this field, I always got facinated by viewing various sites. I used to think how can this be coded out. A funny thing that happened while I was in college in suddenly there was out-break of corona virus. After that we got cowin website to register for vaccination. I did not like the the website at all, neither I knew much tools on web development at that time, but I felt like this site could be remade, so I randomly choose an online site building website and started building the cowin site. After building some of the designs I found out it was just a template, which is not functional. I left that there itself and gradually I got a urge to learn frontend development and build websites. After searching a lot, and found out some resources but it was not helping me that much. Then I found a bootcamp where I got a chance to learn JavaScript, ReactJS, html, css and grew a lot of interest in these field. Now I feel like web development has become a hobby. I enjoy coding new websites with new challenges everyday. I am still learning and enjoying every bit of it.</p>
          </div>   
        </main>
        <footer className="footer">
            <span onClick={()=>{
              setBorder(true)
              navigate('/', {replace: true})
              dispatch({type: "CENTER", payload: 'center'})}}>⬅ Back</span>
        </footer>
    </div>
  )
}

export {Page2};
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { DSCircleButton, DSButton } from '../../../node_modules/oskrhq-design-system/build/index.js'
import dsLogo from '../../assets/images/ds-logo.svg'
import yolkoDisplayImg1 from '../../assets/images/placeholder-display-img.png'
import PortfolioFooter from '../../components/footer'
import number1 from '../../assets/images/hand-brush/01.png'
import number2 from '../../assets/images/hand-brush/02.png'
import number3 from '../../assets/images/hand-brush/03.png'
import number4 from '../../assets/images/hand-brush/04.png'
import number5 from '../../assets/images/hand-brush/05.png'
import number6 from '../../assets/images/hand-brush/06.png'
import TopNav from '../../components/top-nav'

const SectionHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10% 0;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`

class DSProjectPage extends React.Component {
  render() {
  
    return (
      <div className="project-page design-system-page">
        <TopNav />
        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="special-text-styling">Personal Project</span>
            <h1 className="ds-display3-text-style hero-container__title">OSKRHQ.DS</h1>
            <p className="ds-subheading-text-style">OSKRHQ.DS a Design System I created for my personal brand to achieve a harmonious identity throughout various media outputs. <strong>In fact, this website, along with every Design material I produce, consumes the system.</strong> More specifically, it is a Design Guide <strong>*and*</strong> Component Library written in ReactJS with a unique SASS architecture. It is also an open-sourced project you can download <a href="https://github.com/ogonzal87/oskrhq-design-system" target="_blank">here</a>, and has an accompanying UI Kit built in Sketch App with Smart symbols you can find <a href="https://github.com/ogonzal87/oskrhq-uikit" target="_blank">here</a>.</p>

            <p className="special-text-styling">Creative Direction and Multidisciplinary Design </p>
            <span className="special-text-styling">Design Systems</span>
            <span className="special-text-styling">Development</span>
            <span className="special-text-styling">UX Research</span>
            <a href="https://imyolko.com/#!/" className="project-btn__cta" target="_blank"><DSButton type="primary" label="View the Site" size="medium" /></a>
          </div>
          <div className="hero-container__img-container">
            <img src={dsLogo} className="ds-logo" />
          </div>
        </div>

        <h4 className="project-section-title">CASE STUDY DOSSIER</h4>
        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="special-text-styling">Problem</p>
            <p className="ds-subheading-text-style">As a designer or developer, you are your own brand. The products and services you produce become an extension of that brand. However, as you create artifacts overtime, your identity tends to get diluted since you are typically building these artifacts in isolation, or end up building the artifacts from scratch. This creates fragmented experiences for your audience as they move from one artifact to the next.</p>
          </div>
          <div className="dossier__users-container">
            <p className="special-text-styling">Users</p>
            <p className="ds-subheading-text-style">Attendees and presenters at social gatherings such as classes or talks. </p>
          </div>
          <div className="dossier__duration-container">
            <p className="special-text-styling">Duration</p>
            <p className="ds-subheading-text-style">Apr 2016 - Nov 2017</p>
          </div>
          <div className="dossier__tools-container">
            <p className="special-text-styling">Tools</p>
            <p className="ds-subheading-text-style">Pen, paper, AngularJS 1.5, Firebase, Sketch App, SASS, Gulp.JS, Node.js, Invision.  </p>
          </div>
          <div className="dossier__role-container">
            <p className="special-text-styling">Role</p>
            <p className="ds-subheading-text-style">Creative director, UX Researcher, and </p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="special-text-styling">Hypothetical Solution</p>
            <p className="ds-subheading-text-style"><strong><i>If</i></strong> inconsistent artifacts of design and code dilutes my personal brand and its extensions, <strong><i>then</i></strong> implementing a full Design System for it should create a harmonious identity felt by my audience.</p>
          </div>
          <div className="dossier__constraints-container">
            <p className="special-text-styling">Constraints & Considerations</p>
            <p className="ds-subheading-text-style">Avoid getting the audience distracted and provide anonymity for the participants.</p>
          </div>
          <div className="dossier__platforms-container">
            <p className="special-text-styling">Platforms</p>
            <p className="ds-subheading-text-style">Mobile and Desktop</p>
          </div>
        </div>

        <div className="project__video-container">
          <iframe src="https://player.vimeo.com/video/265949113" width="1000" height="800" frameBorder="0" allowFullScreen></iframe>
        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">How I got to the pixels</h4>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number1} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Empathize</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>

            <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number2} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Define</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">Defining the problem for YOLKO was easier than other projects. I knew something was broken with the way traditional communication in presentations is provided by my experience as a student at General Assembly coding academy. However, I did not know what specifically. I asked my peers and my instructor for general feedback about the class when it ended and one of my peers said something that resonated with me; "it seems that my undestanding depended on that 3% of the class that always asks questions because I was too scare to do so." I had found my problem. The in interaction and subsequent looping feedback is broken.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number3} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Ideate</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">I began a Divergence Period where I came up with as many ideas as I could to solve the problem and then sketch/whiteboard some potential solutions. My approach to design is purely scientific — get a hypothesis that attempts to solve a problem, then validate through rapid testing. This was my testable hypothesis: "if the feedback and pulse of the class was available in real time, the interaction between presenter and attendee would improve resulting in a deeper understanding of what is being presented plus an engaged audience". YOLKO was born out of my desire to provide the attendee with a way to see the aggregate emotions of an audience to assess if it matched theirs. I also wanted to provide the presenter the ability to ask for feedback in realtime and for the audience to ask him/her questions among other cool features. With these wireframes/sketches, I began a Convergence Period and I start engineering the experiences. Fun fact - YOLKO was first called "Bubble Gum" and it was meant to show the tension of the audience by inflating and deflating.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number4} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Prototype</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">I am very creative but I am careful not to introduce features that are not absolutely necessary. I wanted to create a Minimum Viable Product that I would be simple to use, felt human, and was extensible (coding wise). I divided the product into two experiences: 1) Presenter's, and 2) Attendee's. The presenter would have a Dashboard, where s/he would be able to see all of the data coming in in real time. The Attendee would have a simple interface where they could provide feedback anytime they wanted. I was careful not to distract them from the presentation since I only wanted them to use YOLKO when they felt the need to  something to the presenter. I wired every frame for each experience using pen a paper and then translated those into Sketch App. Before designing, I usually define the characteristics of my UI (color, typography, spacing) and the use of established design patterns on the wild - a process I describe on this post. Below is a snapshot of what my UI elements were when designing the app. After that, I shared some of the early stages of YOLKO via Invision. Below you can also see the first iterations of the app UI and how it progressed with each cycle.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number5} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Test</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">I usually do not start building something in code unless I have made as many design iterations as possible since is more efficient to change a design instead of code. For YOLKO however, I decided to code-prototype. Since this was a side project, I wanted to use it to enhance my coding skills and to be able to build something that was code-extensible in order to make rapid iterations - just like a real start up. Because of this, step 4 and 5 are intertwined. Although I did not conduct formal research studies, I did do A/B testing using Invision. Also used YOLKO for Design Critique sessions, and used it at one of General Assembly's gatherings. I also made a videos to share the idea and gather feedback.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img src={number6} alt="" className="project-design-process-number" />
            <h5 className="design-process__section-title ds-headline-text-style">Implement</h5>
          </div> 
          <div>
            <p className="ds-subheading-text-style">This is the last step in an iteration or cycle. Therefore, I perform these 5 steps cyclically. Each iteration is usually shorter than the last one and that is what is happening today with YOLKO. I decided to use AngularJS 1.5 with a Component Architecture for my front-end coupled with Bootstrap, and Firebase for my backend since I needed something that was scalable and that provided me with realtime features. I also wrote my own build-task setup using Gulp.js - the source code is available on Github. As of April 2017 I am in my third iteration of changes in code working with the University of Miami. We are testing it in our of their classrooms soon. After testing this iteration in one of their classrooms, I will perform yet another iteration taking in consideration what was learned and weather or not I keep validating my original hypothesis.</p>
          </div>

        </div>

        <img src={yolkoDisplayImg1} className="project-displayfb-img" />

        <h4 className="project-section-title">things i learned</h4>
        <div className="project-things-learned-container">
          <p className="ds-subheading-text-style">I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations. I’m a Design Technologist and User Experience Designer based in San Fransisco. By day I design + <code /> digital products and also craft Design Systems. By night I enjoy hand lettering, making moss art and doing illustrations.</p>
        </div>

        <PortfolioFooter/>

      </div>
    )
  }
}
 export default DSProjectPage
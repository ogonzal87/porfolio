import React from "react";
import styled from "styled-components";
import vnHeroImg from "../../assets/images/DS/ds-hero.png";
import ShowcaseImg from "../../assets/images/DS/ds-showcase.jpg";
import PortfolioFooter from "../../components/footer";
import number1 from "../../assets/images/hand-brush/01.png";
import number2 from "../../assets/images/hand-brush/02.png";
import number3 from "../../assets/images/hand-brush/03.png";
import number4 from "../../assets/images/hand-brush/04.png";
import number5 from "../../assets/images/hand-brush/05.png";
import TopNav from "../../components/top-nav";
import UltimateProposalImg from "../../assets/images/DS/ulti-uikit-demo.gif";
import DSStyleSheet from "../../assets/images/DS/style-sheet.jpg";
import DSUIElements from "../../assets/images/DS/ui-kit-elements.jpg";
import DSBreakdown from "../../assets/images/DS/part-of-design-system.jpg";
import DSButtonsDemo from "../../assets/images/DS/buttons-demo.gif";
import DSButtonsCode from "../../assets/images/DS/buttons-code.jpg";
import DSPackageJSON from "../../assets/images/DS/package-json.jpg";
import DSDefineImg1 from "../../assets/images/DS/ds-explanation.jpg";
import DSDefineImg2 from "../../assets/images/DS/ds-architecture1.jpg";
import DSImplement2 from "../../assets/images/DS/dimsum-storybook.gif";
import DSImplement3 from "../../assets/images/DS/em-uikit-show.gif";
import DSImplement4 from "../../assets/images/DS/theming.gif";

const SectionHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10% 0;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

class DSProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page design-system-page">
        <TopNav work about resume />
        <div className="hero-container">
          <div className="hero-container__text-container">
            <span className="og-text-style-overline">
              Company Work + Personal Project
            </span>
            <h2 className="ds-display3-text-style hero-container__title">
              OSKRHQ.DS 2.0
            </h2>

            <p>
              OSKRHQ.DS is a{" "}
              <strong>
                <i>themeable</i>
              </strong>{" "}
              Design System I created for my personal brand to achieve a
              harmonious identity through various media outputs and to showcase
              the process of creation and maintenance.{" "}
              <strong>
                In fact, this website, along with every design material I
                produce, consumes the system.
              </strong>{" "}
              More specifically, it is a Design Guide <strong>*and*</strong>{" "}
              Component Library written in ReactJS with a unique SASS
              architecture. It is also an open-sourced project you can download{" "}
              <a
                href="https://github.com/ogonzal87/oskrhq-design-system"
                target="_blank"
              >
                here
              </a>
              , and has an accompanying UI Kit built in Sketch App with Smart
              symbols you can find{" "}
              <a
                href="https://github.com/ogonzal87/oskrhq-uikit"
                target="_blank"
              >
                here
              </a>
              . I also built it as a POC to persuade design and dev teams at my
              current employer to join me in building one for the company.
            </p>

            <h3
              className="og-text-style-overline"
              style={{
                background: "#5900FF",
                color: "white",
                padding: "4px 8px",
                borderRadius: "3px"
              }}
            >
              Update
            </h3>
            <p>
              The story told below was the first iteration of the system. I have
              since learned from feedback and usage and updated the Design
              System from the ground up carefully considering accessibility. You
              can find the latest and play with the code by hitting the button
              below.
            </p>

            <p className="og-text-style-overline">
              Creative Direction and Multidisciplinary Design
            </p>
            <span className="og-text-style-overline">Design Systems</span>
            <span className="og-text-style-overline">Development</span>
            <span className="og-text-style-overline">Sales</span>
            <span className="og-text-style-overline">Research</span>
            <a
              href="https://codesandbox.io/embed/oskrhq-playground-app-x7mhz?fontsize=14&theme=dark&view=preview"
              className="project-btn__cta"
              target="_blank"
            >
              <button className="og-button--primary og-button--medium og-button">
                View the site
              </button>
            </a>
          </div>
          <div className="hero-container__img-container">
            <img src={vnHeroImg} className="project-ds-hero" />
          </div>
        </div>

        <div className="case-study-dossier-container">
          <div className="dossier__problem-container">
            <p className="og-text-style-overline">Problem</p>
            <p>
              As a designer or developer, you are a walking, talking brand. The
              products and services you produce become an extension of that
              brand. As you create artifacts over time, your identity tends to
              get diluted since you are typically building these artifacts in
              isolation, or end up building the artifacts from scratch. This
              creates fragmented experiences for your audience as they move from
              one artifact to the next. This holds true for an individual or an
              organization.
            </p>
          </div>
          <div className="dossier__users-container">
            <p className="og-text-style-overline">Primary Users</p>
            <p>Freelancers, Designers and Developers.</p>
          </div>
          <div className="dossier__duration-container">
            <p className="og-text-style-overline">Duration</p>
            <p>May 2017 - Present</p>
          </div>
          <div className="dossier__tools-container">
            <p className="og-text-style-overline">Tools</p>
            <p>Whiteboard, ReactJS, Sketch App, SASS, Storybook, Coffee.</p>
          </div>
          <div className="dossier__role-container">
            <p className="og-text-style-overline">Role</p>
            <p>
              Creative Director, Designer, Developer, Salesman and instigator.
            </p>
          </div>
          <div className="dossier__hypothesis-container">
            <p className="og-text-style-overline">Hypothetical Solution</p>
            <p>
              <strong>
                <i>If</i>
              </strong>{" "}
              inconsistent artifacts of design and code dilute a brand and its
              extensions,{" "}
              <strong>
                <i>then</i>
              </strong>{" "}
              implementing a Design System should create a harmonious identity
              felt by a targeted audience.
            </p>
          </div>
          <div className="dossier__constraints-container">
            <p className="og-text-style-overline">
              Constraints & Considerations
            </p>
            <p>
              Provide solutions for both designers and developers, create a
              common language abstracted from absolute values, and support
              mobile web and desktop displays.
            </p>
          </div>
          <div className="dossier__platforms-container">
            <p className="og-text-style-overline">Platforms</p>
            <p>Mobile web and Desktop</p>
          </div>
        </div>

        <div className="project__video-container">
          <iframe
            src="https://player.vimeo.com/video/282266378"
            width="1000"
            height="800"
            frameBorder="0"
            mozAllowFullScreen
            allowFullScreen
          ></iframe>
        </div>

        <img src={ShowcaseImg} className="project-showcase-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p className="crafted-quote ">
              Below is a really cool story of how a small team built a Design
              System through collaboration and camaraderie between design and
              development teams without business, product or management
              support...
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number1}
              alt=""
              className="project-design-process-number"
            />
            <h4 className="design-process__section-title">Empathize</h4>
          </div>
          <div>
            <p>
              Although I am ultimately a designer, I also code and have worked
              as a UI developer in the past. This has allowed me to be part of
              both worlds, Design <i>and</i> Development, which has made me feel
              the pains and frustrations shared by both sides. For being
              perceived as different, it is funny to me how alike these pains
              are.
            </p>

            <p>
              My obsession with systematizing design began in Q2 2017 while
              working at Ultimate Software. I remember vividly a time I grabbed
              lunch with a coworker and found ourselves sharing a mutual
              frustration with not being able to stay in sync amongst the
              designers - a problem which caused inconsistencies in our
              interfaces. While at Ultimate, I also had the opportunity to work
              as a UI developer where I noticed devs too had the same problem.
              The difference was the dev community had come up with clever ways
              of solving this as well as many other problems like versioning and
              continuous deployment. I began to wonder if these solutions were
              only available for Development or if I could somehow extend these
              solutions to my design team.
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number2}
              alt=""
              className="project-design-process-number"
            />
            <h4 className="design-process__section-title">Define</h4>
          </div>
          <div>
            <p>
              It does not matter if you are on a design team or development
              team, it all boils down to speed, synchronization and visibility.
              A designer does not want to redesign a button and a developer does
              not want to re-code that button. Doing so means adding time,
              expenses and impacting the end user negatively by creating a
              fragmented experience.
            </p>

            <p>
              The front-end Development community came up with the notion of
              building User Interfaces via Component Architecture. Although an
              overly simplified definition, a Component Architecture essentially
              means that you can code one button and the entire development team
              can use an instance of that button and not have to build it from
              scratch. Additionally, you can update that button and the entire
              team will get the update. This holds true for more complex
              elements with deeply nested components as well. In addition, Devs
              also use Git to stay in sync and account for how these elements
              change over time through versioning.
            </p>

            <p>
              At the time, Sketch App had just come up with Sketch Symbols which
              are essentially reusable pieces of design just like components are
              in code. This was pre-UI kits. No one really knew what those were
              back then.
            </p>

            <p>
              Using my weekend time, loads of coffee and a lot of trial and
              error, I created a UI Kit for my design team and ended up using
              Brand.ai (a tool for syncing symbols) so we could all be in sync.
              I also constructed the Symbols so they would match 1-to-1 with the
              components in code, even matching the Overrides of the Symbols to
              the API's of the components (Component Attributes). This removed
              any confusion or ambiguity that could arise when handing over the
              designs to devs. Just having this UI Kit being part of the design
              process helped us tremendously in building our very own Design
              System, Ignite, and then making it part of the Ultimate Software
              culture. Below you can see a video of the proposal I presented to
              my boss for the UI Kit showcasing the process and efficiency.
            </p>
          </div>
        </div>

        <img src={UltimateProposalImg} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              I switched jobs in Q4 of 2017 and moved to the Bay Area to build a
              new Design System for Ellie Mae. Unfortunately, the company did
              not consider building or maintaining a Design System a priority.
              Talking to developers and designers and seeing how fragmented our
              experiences were in our 20+ products, I felt very strongly about
              the need to make this initiative a very high priority, if not to
              my company at least to me... I love side projects where I have the
              opportunity to learn and add value, so I moved this to the top of
              my list.
            </p>

            <p>
              I think the best way to sell an initiative is by demonstrating it
              so I did just that; I created a Design System for myself first and
              then used it to showcase the benefits and the concept - a Minimum
              Viable Product I could use for my personal brand and benefit the
              company; kill two birds with one code repo. My requirements
              became:
            </p>

            <ol>
              <li>Benefit Development and Design equally</li>
              <li>
                Based on my{" "}
                <i>
                  <a
                    href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
                    target="_blank"
                  >
                    Anatomy of the UI Principles
                  </a>
                </i>{" "}
                written by me on Medium
              </li>
              <li>
                Has to be flexible and adaptable so that any person can grab the
                system and make it their own
              </li>
              <li>Have a Component Library built in ReactJS</li>
              <li>
                Support all the design artifacts or products I make in the
                future including apps, websites, presentations, medium posts,
                etc
              </li>
            </ol>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number3}
              alt=""
              className="project-design-process-number"
            />
            <h4 className="design-process__section-title">
              Ideate & Prototype
            </h4>
          </div>
          <div>
            <p>
              The first thing I did was a Style Sheet for my system based on the
              personality I wanted to convey. I write about this process in this
              Medium post -{" "}
              <a
                href="https://uxdesign.cc/humanizing-interfaces-yep-cheesy-but-it-works-da6c8ca8aee7"
                target="_blank"
              >
                <i>Humanizing interfaces. Cheesy but it works</i>
              </a>
              .
            </p>
          </div>
        </div>

        <img src={DSStyleSheet} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              From that, I created a UI Kit in Sketch with smart Symbols for the
              system. This allowed me to fine tune my colors, typography, space,
              depth, and iconography in design before I started coding the
              components and the SASS architecture supporting them. Feel free to
              play around by downloading the Sketch file{" "}
              <a
                href="https://github.com/ogonzal87/oskrhq-uikit"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>

        <img src={DSUIElements} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              After designing a few Symbols in Sketch, I focused on
              architecture. I created SASS Mixins and Functions that allowed me
              to compose UI elements with the same sub-atomic parts. What are
              sub-atomic parts? Every UI element you interact with in digital
              interfaces is composed of something I call{" "}
              <i>The Anatomy of UI</i>; Color, Typography, Space, Motion, Depth,
              and Iconography. If you architect a framework for these and
              connect them using CSS preprocessors like LESS or SASS, it is easy
              to make products that feel cohesive since every element is
              composed out of the same “DNA” or sub-atomic parts. Check out my{" "}
              <a
                href="https://medium.muz.li/the-anatomy-of-all-digital-interfaces-11d43f55eaf"
                target="_blank"
              >
                {" "}
                Medium post series
              </a>{" "}
              if you are interested 🤓.
            </p>
          </div>
        </div>

        <img src={DSBreakdown} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              A robust SASS architecture limits developers on what CSS values
              they can hard-code. If they must hard-code values, they must do so
              consciously since that goes against the symbiosis of the system.
              After all, a{" "}
              <a
                href="https://www.merriam-webster.com/dictionary/system"
                target="_blank"
              >
                <i>System</i>
              </a>{" "}
              is a set of connected things or parts forming a complex whole. All
              of the buttons you see below, for example, were coded with the
              SASS architecture I put together. Below you can also see the code
              for the Primary button as an example. If you notice, each CSS
              declaration is connected to the system and nothing is hard-coded.
              Additionally, each sub-atomic definition follows predictable
              scales. If you want to know more about this, check out the{" "}
              <a href="https://oskrhq-ds.surge.sh/" target="_blank">
                System's website
              </a>
              . I explain this in detail there.
            </p>
          </div>
        </div>

        <img src={DSButtonsDemo} className="project-displayfb-img" />

        <div
          className="design-process__section-container"
          style={{ marginTop: "-60px" }}
        >
          <div className="project-design-process-title-container" />
          <div>
            <img src={DSButtonsCode} className="project-displayfb-img" />
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number4}
              alt=""
              className="project-design-process-number"
            />
            <h4 className="design-process__section-title">Test</h4>
          </div>
          <div>
            <p>
              As soon as I had a few components constructed, I published the
              design system as a Node package. This way I could import it as a
              dependency for every project I create in the future, also allowing
              others to consume it or “fork” it. The first “product” consuming
              the system was the{" "}
              <a href="https://oskrhq-ds.surge.sh/" target="_blank">
                website
              </a>{" "}
              that explains the system itself. The second “product” consuming
              the system was my portfolio, which is this website. If I make any
              updates to Color, Typography, Space, Motion, Depth or Iconography
              in my system, the updates will be reflected on all the products
              consuming it. Although most of the time I would want to update all
              “products” to the latest version of the system, the system follows
              semantic versioning so I don't have to update all if I don't want
              to. If you would like to install it and play with the code just
              run:
            </p>
            <pre>
              <code>npm i --save oskrhq-design-system</code>
            </pre>

            <img
              src={DSPackageJSON}
              className="project-displayfb-img"
              style={{ marginTop: "200px", maxWidth: "624px" }}
            />
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              After I felt confident I had a solid MVP, I showed it to a couple
              of developers as well as our UI Architect and two designers.
              Without hesitation they wanted to build the same thing for our
              company. Soon after we had a team of eight coding and designing on
              their own time since we still did not have the backing of
              management at the time. Below is the result of a whiteboard
              session where I explained what the system was and how it bridged
              the gap between Design and Code.
            </p>
          </div>
        </div>

        <div className="project-img-grid">
          <img src={DSDefineImg1} alt="" className="grid-img" />
          <img src={DSDefineImg2} alt="" className="grid-img" />
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <img
              src={number5}
              alt=""
              className="project-design-process-number"
            />
            <h4 className="design-process__section-title">Implement</h4>
          </div>
          <div>
            <p>
              We started building the system in June 2018. We used Storybook for
              our construction environment, ReactJS for our UI framework and the
              SASS architecture I used on OSKRHQ.DS. We took a User Centered
              design approach to this since the design system is meant to be
              used by both Designers and Developers. We focused heavily on
              documentation, testing, and adoption. We even had an adoption plan
              for Ellie Mae's products based on Nathan Curtis' article -{" "}
              <a
                href="https://medium.com/eightshapes-llc/adopting-design-systems-71e599ff660a"
                target="_blank"
              >
                <i>Adopting Design Systems</i>
              </a>
              . We took time to compose the core components and consumed them so
              we could get a feel for how it would be to use the system as a
              consumer and user. Tweaks were made as we learned.
            </p>
          </div>
        </div>

        <img src={DSImplement2} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              The Design System also has a UI Kit which I constructed and
              maintain for all designers. We are currently exploring tools like{" "}
              <a
                href="https://github.com/brainly/html-sketchapp"
                target="_blank"
              >
                html-sketchapp
              </a>
              ,{" "}
              <a href="https://compositor.io/lab/" target="_blank">
                compositior.io
              </a>
              , and{" "}
              <a href="http://airbnb.io/react-sketchapp/" target="_blank">
                react-sketchapp
              </a>{" "}
              to see if we can get development and design even closer.
            </p>
          </div>
        </div>

        <img src={DSImplement3} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container" />
          <div>
            <p>
              We are also making Accessibility a priority by constructing and
              testing every component with it in mind as well as teaching
              developers and designers to communicate in a new language. We no
              longer communicate in HEX values or pixels. We communicate
              intention. Instead of referring to red as #E34256, we now say{" "}
              <i>danger - scale: 900</i> and when talking about dimensions,
              margin, and padding; <i>small, medium, extra-large,</i> etc. Check
              out OSKRHQ.DS website where I explain this in detail.
            </p>

            <p>
              While it is still very early for this system, it has already
              proven its value to the company. As of late June 2018 - 3 weeks
              after starting, four Ellie Mae products are starting to adopt it
              as-is. I am confident the system is well on its way to becoming
              the way we build interfaces at Ellie Mae in the future. All of
              this, without mandate from management, something I am really proud
              of. Not because I built a POC, but because we were able to have
              Development and Design work <strong>*together*</strong> to solve a
              common pain. It shows how much can be achieved when teams join
              forces with one vision in mind.
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5>THEMING THE SYSTEM</h5>
          </div>
          <div>
            <p>
              On my side, OSKRHQ.DS supports theming. I wanted anyone to be able
              to fork the code repo in Github, change a couple of values in one
              place and be able to have a Design System that felt like their own
              with their unique personality and brand identity. Below you can
              see it in action shifting from one theme to another.
            </p>
          </div>
        </div>

        <img src={DSImplement4} className="project-displayfb-img" />

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h5>WHAT'S NEXT?</h5>
          </div>
          <div>
            <p>
              If you notice from the OSKRHQ.DS source code, styles are
              completely decoupled from the UI Framework. In the case of my
              design system, I am using ReactJS to create the components, but I
              wanted anyone to benefit from the SASS architecture regardless of
              technology. That was my approach until I learned about CSS in JS.
              I really want to migrate my SASS Architecture to live purely in JS
              as the flexibility and modularity offered by platforms like{" "}
              <a href="https://www.styled-components.com/" target="_blank">
                Styled Components
              </a>{" "}
              or{" "}
              <a href="https://glamorous.rocks/" target="_blank">
                Glamorous
              </a>{" "}
              make the system extremely robust. All the SASS Mixins and
              Functions in my SASS architecture could easily be replicated in
              JS. This is what I want to tackle next. Lastly, marketing;
              although I already have two contributors, I would love for more
              people to contribute to the system and create an open-source
              beast. To be determined…
            </p>
          </div>
        </div>

        <div className="design-process__section-container">
          <div className="project-design-process-title-container">
            <h4 className="design-process__section-title">lessons learned</h4>
          </div>
          <div>
            <p>
              The most notable thing is that this project was born and
              materialized from the needs of the users of the product
              (developers and designers) through camaraderie, which I think is a
              beautiful thing. This was not mandated or prioritized by
              management. Sometimes a small POC like what OSKRHQ.DS is enough to
              start something bigger. It is just like David said in the
              Prometheus movie…
            </p>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DCdQkgSwNoU"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ margin: "50px 0" }}
            />

            <p>
              This project taught me that sometimes “going rogue” means
              delivering value to the business even when leadership wants your
              focus on other things. It also taught me that collaboration and
              having a purpose are amazing motivators for people. Everyone wants
              to belong to something that delivers value. That is why we have so
              many open-sources projects out there including my design system.
            </p>
            <p>
              Finally, the project taught me how similar the problems of Design
              and Development are. This actually excites me the most because
              there is a lot of room for innovation in bridging the gap between
              design and implementation.
            </p>
          </div>
        </div>

        <PortfolioFooter />
      </div>
    );
  }
}
export default DSProjectPage;

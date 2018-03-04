import React from 'react';
import { projects } from 'data/projects.json';
import { ProjectIntro, ProjectPage } from 'components/project';
import styles from 'pages/work/styles.module.css';

const perfecthome = () => {

  const project = projects.find(_project => _project.slug === 'perfecthome');

  return (

    <ProjectPage project={project}>

      <div className={styles[project.className]}>

        <section>
          <div className={styles.heading}>
            <h1 className={styles.heading__title}>
              {project.title}
            </h1>
            <h2 className={styles.heading__sub}>
              {project.subtitle}
            </h2>
          </div>
        </section>

        <article>

          <figure className={styles.aside}>
            <header className={styles.aside__heading}>
              <h3 className={styles.aside__title}>
                Activities
              </h3>
            </header>
            <ul className={styles.aside__list}>
              <li>Competitive Analysis</li>
              <li>User Stories</li>
              <li>Constructed Personas</li>
              <li>Created User Flows</li>
              <li>Drafted Wireframes</li>
              <li>Co-designed the Interface</li>
              <li>Built a Prototype</li>
              <li>Delivered a Style Guide</li>
            </ul>
          </figure>

          <div className={styles.content}>

            <h2>
              Overview
            </h2>
            <p>
              Perfect Home are a household goods retailer established in 2006.
              They provide top quality products at affordable pay weekly prices.
            </p>
            <p>
              The website they had was built to their specific needs but as the company grew,
              they wanted to become the UK’s leading provider of goods on finance and needed
              a product that could scale so a more robust approach was needed.
            </p>
            <p>
              The solution was to create a more user friendly experience that allowed more
              people to find them and gave them a helping hand through the complex checkout process.
            </p>
            <p>
              I was part of the team that helped them realise this vision.
            </p>

            <dl>
              <dt>
                Roles
              </dt>
              <dd>
                User Research, UX Design, Visual Design
              </dd>
              <dt>
                Team
              </dt>
              <dd>
                Developed as part of a multi agency team at Uber Agency.
              </dd>
            </dl>

            <h3>
              <a href="https://www.perfecthome.co.uk/">
                View the website
              </a>
            </h3>

            <h2>
              Brief
            </h2>
            <p>
              The brief was to rebrand Perfect Home as market leaders and demystify the pay weekly concept whilst
              allowing them to reach their aim to become the UK’s leading provider of goods on finance.
            </p>

            <h2>
              Research
            </h2>
            <h3>
              My research began with some questions:
            </h3>

            <ul>
              <li>What do users need? Does the old design fulfil this need?</li>
              <li>How do they do it now and can they get it done with this?</li>
              <li>What do they desire? Is the old design appealing?</li>
              <li>Where do users look for things? Can all users find and access this?</li>
              <li>What problem are we trying to solve?</li>
              <li>How do we know this is a real problem?</li>
              <li>Why is it important to solve?</li>
              <li>Who are our users? What are their goals and motivations?</li>
              <li>How will we know if we’ve solved the problem?</li>
            </ul>

          </div>

          <figure className={styles.full}>
            <img src="./img/ph-uxflow.png" alt="User Flow" className={styles.full__img} />
            <figcaption>
              First iteration of the main user flow
            </figcaption>
          </figure>

          <div className={styles.content}>

            <p>
              I reviewed a series of direct and indirect competitor sites to create shared understanding and learn what
              problem we were trying to solve. I was able to document some common patterns and found that simple and
              direct communication would be a key component of the checkout process.
            </p>
            <p>
              User stories were created by the development team that mapped the current perfect user journey and highlighted
              the current pain points. Working from these I was able to develop user stories that alleviated the pain points
              and improve upon the experience. A user flow was then created from these stories that allowed for better interaction.
            </p>
            <p>
              We then reviewed the websites current data to learn the current user flow and make amendments and add improvements to our user stories.
            </p>

            <h2>
              Process
            </h2>
            <p>
              Based on my research, I created personas and mapped out each persona’s perfect journey, including making a note of each touchpoint to their final objective.
            </p>

          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <figure>
                <img src="./img/ph-thumb.jpg" alt="Hand Drawn UX Thumbnails" className={styles.full__img} />
                <figcaption>
                  Beginning the user journey thumbs
                </figcaption>
              </figure>
            </div>
            <div className={styles.half}>
              <figure>
                <img src="./img/product-detail.jpg" alt="Product Detail Screenshot" className={styles.full__img} />
                <figcaption>
                  Product detail design
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.content}>

            <p>
              I began with quick basic wireframes on paper and then in Balsamiq for the main templates on the site, then moving onto
              Sketch for the high-fidelity wireframes. Once we agreed on a direction we were able to move onto product design.
            </p>
            <p>
              We used InVision to create a working clickable prototype for both small and large screens and this was our
              primary way of signing work off and agreeing on direction.
            </p>
            <p>
              Once the website was ready for front-end development we created a UI styleguide that had all the common
              elements to keep the design and UX consistent.
            </p>

          </div>

        </article>

      </div>

    </ProjectPage>

  );

};

export default perfecthome;

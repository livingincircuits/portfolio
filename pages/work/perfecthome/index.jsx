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
              Perfect Home are a household goods retailer established in 2006. They provide top quality products at affordable pay weekly prices.
            </p>
            <p>
              The website they had was built to their specific needs but as the company grew, they wanted to become the UK’s leading provider of goods on finance and needed a product that could scale so a more robust approach was needed.
            </p>
            <p>
              The solution was to create a more user friendly experience that allowed more people to find them and gave them a helping hand through the complex checkout process.
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

            <p>
              <a href="https://www.perfecthome.co.uk/">
                View the website
              </a>
            </p>

            <h2>
              Brief
            </h2>
            <p>
              The brief was to rebrand Perfect Home as market leaders and demystify the pay weekly concept whilst allowing them to reach their aim to become the UK’s leading provider of goods on finance.
            </p>

            <h2>
              Research
            </h2>
            <p>
              My research began with some questions:
            </p>

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
            <img
            sizes="(max-width: 2316px) 100vw, 2316px"
            srcSet="
            ./img/ph-uxflow_c_scale,w_300.png 300w,
            ./img/ph-uxflow_c_scale,w_1737.png 1737w,
            ./img/ph-uxflow_c_scale,w_2316.png 2316w"
            src="./img/ph-uxflow_c_scale,w_2316.png"
            alt="User Flow" className={styles.full__img} />
            <figcaption>
              First iteration of the main user flow
            </figcaption>
          </figure>

          <div className={styles.content}>

            <p>
              I reviewed a series of direct and indirect competitor sites to create shared understanding and learn what problem we were trying to solve. I was able to document some common patterns and found that simple and direct communication would be a key component of the checkout process.
            </p>
            <p>
              User stories were created by the development team that mapped the current perfect user journey and highlighted the current pain points. Working from these I was able to develop user stories that alleviated the pain points and improve upon the experience. A user flow was then created from these stories that allowed for better interaction.
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
                <img
                  sizes="(max-width: 1128px) 100vw, 1128px"
                  srcSet="
                  ./img/ph-thumb_c_scale,w_300.jpg 300w,
                  ./img/ph-thumb_c_scale,w_533.jpg 533w,
                  ./img/ph-thumb_c_scale,w_723.jpg 723w,
                  ./img/ph-thumb_c_scale,w_858.jpg 858w,
                  ./img/ph-thumb_c_scale,w_992.jpg 992w,
                  ./img/ph-thumb_c_scale,w_1119.jpg 1119w,
                  ./img/ph-thumb_c_scale,w_1128.jpg 1128w"
                  src="./img/ph-thumb_c_scale,w_1128.jpg"
                  alt="Hand Drawn UX Thumbnails" className={styles.full__img} />
                <figcaption>
                  Beginning the user journey thumbs
                </figcaption>
              </figure>
            </div>
            <div className={styles.half}>
              <figure>
                <img
                sizes="(max-width: 1134px) 100vw, 1134px"
                srcSet="
                ./img/ph-user-mapping_c_scale,w_300.jpg 300w,
                ./img/ph-user-mapping_c_scale,w_1093.jpg 1093w,
                ./img/ph-user-mapping_c_scale,w_1134.jpg 1134w"
                src="./img/ph-user-mapping_c_scale,w_1134.jpg"
                alt="UX Story Mapping" className={styles.full__img} />
                <figcaption>
                  User story mapping
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.content}>

            <p>
              I began with quick basic wireframes on paper and then in Balsamiq for the main templates on the site, then moving onto Sketch for the high-fidelity wireframes. Once we agreed on a direction we were able to move onto product design.
            </p>
            <p>
              We used InVision to create a working clickable prototype for both small and large screens and this was our primary way of signing work off and agreeing on direction.
            </p>
            <p>
              Once the website was ready for front-end development we created a UI styleguide that had all the common elements to keep the design and UX consistent.
            </p>

          </div>

        </article>

      </div>

    </ProjectPage>

  );

};

export default perfecthome;

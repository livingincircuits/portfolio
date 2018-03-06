import React from 'react';
import { projects } from 'data/projects.json';
import { ProjectIntro, ProjectPage } from 'components/project';
import styles from 'pages/work/styles.module.css';

const inpart = () => {

  const project = projects.find(_project => _project.slug === 'inpart');

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
              <li>Analytics Research</li>
              <li>Personas Creation</li>
              <li>Created User Flows</li>
              <li>Drafted Wireframes</li>
              <li>Co-designed the Interface</li>
              <li>Prototype</li>
            </ul>
          </figure>

          <div className={styles.content}>

            <h2>
              Overview
            </h2>
            <p>
              IN-PART makes the initial connection for technology transfer between universities and companies simple, efficient and scalable.
            </p>
            <p>
              The website they had was built at a time when the company was a small start-up and no longer matched their needs.
              Users were not engaged and a lot of the content needed an overhaul.
            </p>
            <p>
              The solution was to create a custom experience that showcased exactly what the company did in a user friendly way.
            </p>

            <dl>
              <dt>
                Roles
              </dt>
              <dd>
                UX Design & Visual Design
              </dd>
              <dt>
                Team
              </dt>
              <dd>
                Developed at Uber Agency.
              </dd>
            </dl>

            <h3>
              <a href="https://in-part.com/">
                View the website
              </a>
            </h3>

            <h2>
              Brief
            </h2>
            <p>
              The brief was to redesign the website to better meet their goal of sign ups and account creation.
            </p>

            <h2>
              Research
            </h2>
            <p>
              We were given quantitative data from the existing website in the form of analytics to help find problems and this formed the main bulk of our
              research into problem discovery. I realized we didn’t understand users motivations for using the website and that more research was
              needed in order to understand the problem.
            </p>
            <p>
              By observing users and interviewing them, we were able to see how users were behaving and learn why. We also used our data to create two different personas.
              It was also during this research that we realised the two personas expected very different interactions from the website,
              they only wanted to access what was applicable to them. We were able to use these insights and apply them to our user journey by creating seperate
              sections for each of our personas.
            </p>

          </div>

          <figure className={styles.full}>
            <img src="./img/ip-flow.png" alt="UX Flow Process" className={styles.full__img} />
            <figcaption>
              First iteration of full user flow
            </figcaption>
          </figure>

          <div className={styles.content}>

            <h2>
              Process
            </h2>
            <p>
              We then created company and user goals and worked out all the different touch points and mapped out a complete user
              flow for each of the goals. We used the data to guide our flow using previous user behaviour.
            </p>

          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <figure>
                <img src="./img/ip-thumbs.jpg" alt="Hand Drawn UX Thumbnails" className={styles.full__img} />
                <figcaption>
                  Beginning the user journey with thumbs
                </figcaption>
              </figure>
            </div>
            <div className={styles.half}>
              <figure>
                <img src="./img/ip-preview.jpg" alt="Holding mobile phone showing the in-part website" className={styles.full__img} />
                <figcaption>
                  Mobile View of the website
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.content}>

            <p>
              We began with some thumbnails on paper and then used Balsamiq to further develop some Lo Fi wireframes.
            </p>
            <p>
              InVision was used to create a working clickable prototype to better understand how everything slotted together and was used as a primary solution to gather feedback and begin testing.
            </p>

          </div>

        </article>

      </div>

    </ProjectPage>

  );

};

export default inpart;

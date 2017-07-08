import React from 'react';
import { projects } from 'data/projects.json';
import { ProjectIntro, ProjectPage } from 'components/project';
import styles from 'pages/work/styles.module.css';
import imgFlow from './img/ip-thumbs.jpg';

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

            <p>
              <a href="https://in-part.com/">
                View the website
              </a>
            </p>
            
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
              We were given quantitative data from the existing website in the form of analytics to help find problems and this formed the main bulk of our research into problem discovery. 
            </p>
            <p>
              Now that we knew how users were behaving, we then had the task of understanding why users were behaving in a certain way. 
              We used analytics to create two different personas based on this research.
            </p>

          </div>

          <figure className={styles.full}>
            <img
              sizes="(max-width: 2400px) 100vw, 2400px"
              srcSet="
              ./img/ip-flow_c_scale,w_300.png 300w,
              ./img/ip-flow_c_scale,w_781.png 781w,
              ./img/ip-flow_c_scale,w_1166.png 1166w,
              ./img/ip-flow_c_scale,w_1474.png 1474w,
              ./img/ip-flow_c_scale,w_1786.png 1786w,
              ./img/ip-flow_c_scale,w_2054.png 2054w,
              ./img/ip-flow_c_scale,w_2400.png 2400w"
              src="./img/ip-flow_c_scale,w_2400.png" 
              alt="UX Flow Process" className={styles.full__img} />
            <figcaption>
              First iterarion of full user flow
            </figcaption>
          </figure>

          <div className={styles.content}>

            <p>
              Based on this data, we created company and user goals and worked out all the different touch points.
            </p>

            <h2>
              Process
            </h2>
            <p>
              We mapped out a complete user flow for each of the goals. We used the data to guide our flow using previous user behavior.
            </p>

          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <figure>
                <img
                sizes="(max-width: 1128px) 100vw, 1128px"
                srcSet="
                ./img/ip-thumbs_c_scale,w_300.jpg 300w,
                ./img/ip-thumbs_c_scale,w_918.jpg 918w,
                ./img/ip-thumbs_c_scale,w_1128.jpg 1128w"
                src="./img/ip-thumbs_c_scale,w_1128.jpg"
                alt="Hand Drawn UX Thumbnails" className={styles.full__img} />
                <figcaption>
                  Beginning the user journey with thumbs
                </figcaption>
              </figure>
            </div>
            <div className={styles.half}>
              <figure>
                <img
                  sizes="(max-width: 1128px) 100vw, 1128px"
                  srcSet="
                  ./img/ip-preview_c_scale,w_300.jpg 300w,
                  ./img/ip-preview_c_scale,w_524.jpg 524w,
                  ./img/ip-preview_c_scale,w_696.jpg 696w,
                  ./img/ip-preview_c_scale,w_841.jpg 841w,
                  ./img/ip-preview_c_scale,w_988.jpg 988w,
                  ./img/ip-preview_c_scale,w_1121.jpg 1121w,
                  ./img/ip-preview_c_scale,w_1128.jpg 1128w"
                  src="./img/ip-preview_c_scale,w_1128.jpg" 
                  alt="Holding mobile phone showing the in-part website" className={styles.full__img} />
                <figcaption>
                  Mobile View of the website
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.content}>

            <p>
              We began with some thumbnails on paper and then used Balsamiq to further develop some Lo Fi wireframes. Once we had everything in place, we moved onto product design.
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

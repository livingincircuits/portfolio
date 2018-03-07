import React from 'react';
import { projects } from 'data/projects.json';
import { ProjectIntro, ProjectPage } from 'components/project';
import styles from 'pages/work/styles.module.css';

const sprintlog = () => {

  const project = projects.find(_project => _project.slug === 'sprintlog');

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
              <li>Contextual Inquiry</li>
              <li>Constructed Personas</li>
              <li>Created User Flows</li>
              <li>Drafted Wireframes</li>
              <li>Designed the Interface</li>
              <li>Built a Prototype</li>
            </ul>
          </figure>

          <div className={styles.content}>

            <h2>
              Overview
            </h2>
            <p>
              Sprint Log aims to solve the issue of logging and monitoring running workouts for running clubs.
            </p>
            <p>
              A contextual inquiry was carried out to understand the problem and learn how each runner would log their workout.
            </p>
            <p>
              We learned some runners were logging what they had done on paper after their run or using online tools like Google Spreadsheets.
            </p>
            <p>
              The trainers wanted a consistent way for their runners to log their style of run and diarise the event.
            </p>
            <p>
              We ran a survey to gather more data based on what we learned in the contextual inquiry.
              We asked questions about how they log their workouts currently and if they are told to do so by their personal trainer.
              We also gathered personal information about them.
            </p>
            <p>
              The solution was to create an app that would act as a workout diary where the runner could say what type of run it was,
              log the time, note their mindset and body condition and what the weather conditions were like. They could also upload a
              photo of their location if they chose to take their phone with them.
            </p>
            <p>
              We also discovered that the runners wanted to be able to share their data with their trainers so the idea of an online dashboard was included.
            </p>

            <dl>
              <dt>
                Roles
              </dt>
              <dd>
                User Research, UX Design, Visual Design
              </dd>
            </dl>

            <h2>
              Brief
            </h2>
            <p>
              The brief was to solve the problem runners have with logging and diarising their runs so that
              they can reflect on their performance and improve future runs with or without a personal trainer.
            </p>

            <h2>
              Research
            </h2>

            <p>
              We gathered all of the data gained from our contextual inquiry and survey research. We created
              insights to help us understand the problem and learn what people wanted.
            </p>
            <p>
              Based on this research, we knew we needed to create an app that could also link to an online
              dashboard to log a runners workout. Everything on the app was also available online.
            </p>
            <p>
              We then created a competitive analysis on competing apps to see if this problem had already been solved and realised
              that whilst the app stores are filled with diary and exercise based apps, the two are not usually seen as one solution.
            </p>
            <p>
              We ran a small focus group with the aim of writing our user stories and creating our personas.
            </p>

          </div>

          <figure className={styles.full}>
            <img src="./img/sl-persona.png" alt="User Persona" className={styles.full__img} />
            <figcaption>
              One of the developed personas
            </figcaption>
          </figure>

          <div className={styles.content}>

            <h2>
              Process
            </h2>
            <p>
              Personas were finalised first and we mapped out the two persona’s journey based on our user stories.
            </p>
            <p>
              We then began creating paper prototypes and testing these with our focus group.
            </p>
            <p>
              Once we had gathered feedback we moved onto low fidelity wireframes and created a clickable prototype in InVision to test remotely.
            </p>

          </div>

          <div className={styles.row}>
            <div className={styles.half}>
              <figure>
                <img src="./img/sl-mobile.png" alt="Sprintlog Mobile Example Screen" className={styles.full__img} />
                <figcaption>
                  Low fidelity mobile wireframes
                </figcaption>
              </figure>
            </div>
            <div className={styles.half}>
              <figure>
                <img src="./img/sl-desktop.png" alt="Sprintlog Desktop Example Screen" className={styles.full__img} />
                <figcaption>
                  Low fidelity desktop wireframes
                </figcaption>
              </figure>
            </div>
          </div>

          <div className={styles.content}>

            <p>
              Once we were happy with the results of the prototype, we moved onto the UI and worked up the app and screen designs in Sketch.
            </p>

            <figure className={styles.full}>
              <img src="./img/sl-onboarding.gif" alt="App Onboarding Iteration" className={styles.full__img} />
              <figcaption>
                App onboarding interaction
              </figcaption>
            </figure>

            <p>
              We also worked our designs into Principle so we could agree on the app interactions and test them on handsets.
            </p>

            <p>
              We then handed our research and designs over to the app developers and are looking to user test the first iteration of the product.
            </p>

          </div>

        </article>

      </div>

    </ProjectPage>

  );

};

export default sprintlog;

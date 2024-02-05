import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <main className="container">
        <section className="hero">
          <div className="hero-body">
            <span className="hero-abilities">
              Backend Development | Frontend Development
            </span>
            <h2 className="hero-title">FullStack Developer</h2>
            <p className="hero-description">
              I am a Software Engineer based in Morocco. Currently Open for new
              opportunities, my job is helping folks level up their webapps.
            </p>
            <a href="mailto:elmehdielfatihi1111@gmail.com" className="button">
              Contact
            </a>
          </div>
          <div className="hero-illustration">
            <StaticImage src="../images/Developer.png" alt="" />
          </div>
        </section>
        <div className="cards">
          <article className="card">
            <StaticImage className="card-illustration" src="../images/product-design.svg" alt="" />
            <h2 className="card-title">Backend Development</h2>
            <p className="card-description">
              As a Developer I can turn your idea into real world project. implement
              your requirements in a scalable manner.
            </p>
          </article>
          <article className="card">
            <StaticImage className="card-illustration" src="../images/art-direction.svg" alt="" />
            <h2 className="card-title">Frontend Development</h2>
            <p className="card-description">
              I craft engaging, user-friendly web applications with a focus on
              responsive design, accessibility, and clean code.
            </p>
          </article>
          <article className="card">
            <StaticImage className="card-illustration" src="../images/visual-design.svg" alt="" />
            <h2 className="card-title">Deployment</h2>
            <p className="card-description">
              Your project goes live with efficiency and reliability. From configuring
              server environments to optimizing performance.
            </p>
          </article>
        </div>
        <section className="latest-work-section" id="latest-work">
          <h2 className="heading">Latest work</h2>
          <section className="projects">
            <a
              href="https://fm-quiz-app-six.vercel.app/"
              className="project-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <article className="project">
                <div className="project-illustration-wrapper">
                  <StaticImage className="project-illustration" src="../images/project1.png" alt="" />
                </div>
                <h3 className="project-title">Frontend Development Quiz</h3>
                <p className="project-description">Vue 3, SCSS</p>
              </article>
            </a>
            <a
              href="https://fm-rest-countries-phi.vercel.app/"
              className="project-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <article className="project">
                <div className="project-illustration-wrapper">
                  <StaticImage className="project-illustration" src="../images/project2.png" alt="" />
                </div>
                <h3 className="project-title">Frontend Mentor Rest Countries</h3>
                <p className="project-description">Vue 3, Tailwindcss, API</p>
              </article>
            </a>
            <a
              href="https://aerolab-coding-challenge-dun.vercel.app/"
              className="project-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <article className="project">
                <div className="project-illustration-wrapper">
                  <StaticImage className="project-illustration" src="../images/project3.png" alt="" />
                </div>
                <h3 className="project-title">Aerolab Coding Challenge</h3>
                <p className="project-description">Vue 3, API</p>
              </article>
            </a>
            <a
              href="https://peaceful-swirles-f2d06c.netlify.app/"
              className="project-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              <article className="project">
                <div className="project-illustration-wrapper">
                  <StaticImage className="project-illustration" src="../images/project4.png" alt="" />
                </div>
                <h3 className="project-title">Gaming Dashboard</h3>
                <p className="project-description">Tailwind css, Alpine js</p>
              </article>
            </a>
          </section>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Elmehdi ElFatihi's Portfolio</title>
      <meta name="description" content="I am a Software Engineer based in Morocco. Currently Open for new opportunities, my job is helping folks level up their webapps." />
    </>
  );
};
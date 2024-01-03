<template>
  <Layout>

    <section class="hero">
      <div class="hero-body">
        <span class="hero-abilities">
          Backend Development | Frontend Development
        </span>
        <h2 class="hero-title">
          FullStack Developer
        </h2>
        <p class="hero-description">
          I am a Software Engineer based in Morocco. Currently Open for new opportunities, my job is helping folks level
          up their webapps.
        </p>
        <a href="#main-footer" class="button">
          Contact
        </a>
      </div>
      <div class="hero-illustration">
        <g-image src="~/assets/Developer.png"/>
      </div>
    </section>
    <div class="cards">
      <article class="card">
        <g-image class="card-illustration" src="~/assets/product-design.svg" />
        <h2 class="card-title">
          Backend Development
        </h2>
        <p class="card-description">
          As a Developer I can turn your idea into real world project. implement your requirements in a scalable manner.
        </p>
      </article>
      <article class="card">
        <g-image class="card-illustration" src="~/assets/art-direction.svg" />
        <h2 class="card-title">
          Frontend Development
        </h2>
        <p class="card-description">
          I craft engaging, user-friendly web applications with a focus on responsive design, accessibility, and clean
          code.
        </p>
      </article>
      <article class="card">
        <g-image class="card-illustration" src="~/assets/visual-design.svg" />
        <h2 class="card-title">
          Deployment
        </h2>
        <p class="card-description">
          Your project goes live with efficiency and reliability. From configuring server environments to optimizing
          performance.
        </p>
      </article>
    </div>
    <section class="latest-work-section" id="latest-work">
      <h2 class="heading">
        Latest work
      </h2>
      <section class="projects">
        <a href="https://fm-quiz-app-six.vercel.app/" class="project-wrapper" target="_blank">
          <article class="project">
            <div class="project-illustration-wrapper">
              <g-image class="project-illustration" src="~/assets/project1.png" alt=""/>
            </div>
            <h3 class="project-title">
              Frontend Development Quiz
            </h3>
            <p class="project-description">
              Vue 3, SCSS
            </p>
          </article>
        </a>
        <a href="https://fm-rest-countries-phi.vercel.app/" class="project-wrapper" target="_blank">
          <article class="project">
            <div class="project-illustration-wrapper">
              <g-image class="project-illustration" src="~/assets/project2.png" alt=""/>
            </div>
            <h3 class="project-title">
              Frontend Mentor Rest Countries
            </h3>
            <p class="project-description">
              Vue 3, Tailwindcss, API
            </p>
          </article>
        </a>
        <a href="https://aerolab-coding-challenge-dun.vercel.app/" class="project-wrapper" target="_blank">
          <article class="project">
            <div class="project-illustration-wrapper">
              <g-image class="project-illustration" src="~/assets/project3.png" alt=""/>
            </div>

            <h3 class="project-title">
              Aerolab Coding Challenge
            </h3>
            <p class="project-description">
              Vue 3, API
            </p>
          </article>
        </a>
        <a href="https://peaceful-swirles-f2d06c.netlify.app/" class="project-wrapper" target="_blank">
          <article class="project">
            <div class="project-illustration-wrapper">
              <g-image class="project-illustration" src="~/assets/project4.png" alt=""/>
            </div>
            <h3 class="project-title">
              Gaming Dashboard
            </h3>
            <p class="project-description">
              Tailwind css, Alpine js
            </p>
          </article>
        </a>
      </section>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "ElMehdi El Fatihi's portfolio"
  }
}
</script>



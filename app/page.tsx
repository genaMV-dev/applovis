import Link from "next/link"
import css from "./page.module.css"

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.videoCropContainer}>
        <video
          className={css.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </div>

      <div>
        <h1 className={css.title}>
          Building High-Performance Digital Solutions for Modern Brands
        </h1>

        <p className={css.paragraph}>
          We engineer custom web applications and mobile apps designed to scale
          your business. Transform your digital presence with our cutting-edge
          development team.
        </p>

        <div className={css.btnGroup}>
          <Link className={css.projectsBtn} href="/projects">
            Our Cases
          </Link>
          <Link className={css.servicesBtn} href="/services">
            What We Build
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage

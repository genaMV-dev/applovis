import CornerLine from "@/components/CornerLine/CornerLine"
import css from "./PortfolioPage.module.css"
import Link from "next/link"
import Image from "next/image"
import { MdSmartphone } from "react-icons/md"
import { PiFlowerTulipBold } from "react-icons/pi"
import { TbCamper } from "react-icons/tb"
import { LuSofa } from "react-icons/lu"


const PortfolioPage = () => {
  const testProjects = [
    {
      title: "Fonik",
      description:
        "Fonik is a modern web application for buying and selling smartphones, built with Next.js and TypeScript. It offers a seamless marketplace experience where users can browse listings, manage a shopping cart, and create their own advertisements. With support for user authentication and profile management, Fonik provides a convenient platform for trading devices directly between users.",
      image: "/testImages/fonik.png",
      link: "https://fonik-inky.vercel.app/",
      icon1: MdSmartphone,
    },
    {
      title: "Harmoniq",
      description:
        "Harmoniq is a mindful publishing platform for mental health, built with Next.js 16 and App Router. It features REST API integration, JWT authentication, article creation with Cloudinary uploads, filtering, pagination, saved articles, and a strong focus on seamless UX/UI.",
      image: "/testImages/harmoniq.png",
      link: "https://front-harmoniq.vercel.app/",
      icon1: PiFlowerTulipBold,
    },
    {
      title: "Campers",
      description:
        "A modern camper rental catalog built with Next.js and TypeScript. The app allows users to browse available campers, filter them by location, vehicle type, engine, and transmission, open detailed camper pages, and submit booking requests.",
      image: "/testImages/campers.png",
      link: "https://campers-peach-eight.vercel.app/",
      icon1: TbCamper,
    },
    {
      title: "Mebleria",
      description:
        "Mebleria is a website for finding and ordering furniture and home interior items. The project is designed to allow users to select the products they need quickly, conveniently, and efficiently, thanks to a simple interface and intuitive functionality.",
      image: "/testImages/mebleria.png",
      link: "https://romanromanr.github.io/my-project-withJS/",
      icon1: LuSofa,
    },
  ]

  return (
    <div className={css.container}>
      <h1 className={css.title}>SELECTED PROJECTS</h1>

      <ul className={css.projectsList}>
        {testProjects.map((project, index) => {
          const IconComponent1 = project.icon1
          

          return (
            <li key={index} className={css.projectItem}>
              <CornerLine />

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={css.imageLink}
              >
                <div className={css.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
                    className={css.projectImage}
                  />
                </div>
              </Link>

              <div className={css.mainText}>
                <div className={css.iconsContainer}>
                  <div className={css.iconWrapper}>
                    <IconComponent1 className={css.icon} size={20} />
                  </div>
                </div>
                <h2 className={css.itemTitle}>{project.title}</h2>
              </div>

              <p className={css.paragraph}>{project.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PortfolioPage

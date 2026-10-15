import CornerLine from "@/components/CornerLine/CornerLine"
import css from "./ServicesPage.module.css"
import { LuCodeXml } from "react-icons/lu"
import { MdSmartphone } from "react-icons/md"
import { GiArtificialIntelligence } from "react-icons/gi"
import { AiOutlineCloudServer } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import { BiPalette } from "react-icons/bi"
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>SERVICES WE PROVIDE</h1>

      <ul className={css.servicesList}>
        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <LuCodeXml className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>CUSTOM SOFTWARE DEVELOPMENT</h2>
          </div>
          <p className={css.paragraph}>
            TAILORED, SCALABLE SOLUTIONS TO MEET UNIQUE BUSINESS LOGIC NEEDS.
            FULL-STACK DEVELOPMENT, ARCHITECTURE DESIGN, AND MAINTENANCE.
          </p>
        </li>

        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <MdSmartphone className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>WEB & MOBILE APP DEVELOPMENT</h2>
          </div>
          <p className={css.paragraph}>
            NATIVE & CROSS-PLATFORM APPLICATIONS BUILT FOR PERFORMANCE,
            ENGAGEMENT, AND BUSINESS METRICS. FROM CONCEPT TO DEPLOYMENT.
          </p>
        </li>

        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <GiArtificialIntelligence className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>MACHINE LEARNING INTEGRATION</h2>
          </div>
          <p className={css.paragraph}>
            INTELLIGENT SYSTEMS, PREDICTIVE ANALYTICS, NATURAL LANGUAGE
            PROCESSING, AND COMPUTER VISION. DATA-DRIVEN INSIGHTS AND
            AUTOMATION.
          </p>
        </li>

        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <AiOutlineCloudServer className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>CLOUD DEVOPS</h2>
          </div>
          <p className={css.paragraph}>
            EFFICIENT CLOUD INFRASTRUCTURE, CI/CD PIPELINE AUTOMATION,
            CONTAINERIZATION, AND INFRASTRUCTURE-AS-CODE. RELIABLE AND SCALABLE
            DEPLOYMENT.
          </p>
        </li>

        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <MdOutlineSecurity className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>CYBERSECURITY</h2>
          </div>
          <p className={css.paragraph}>
            COMPREHENSIVE THREAT DETECTION, INCIDENT RESPONSE, PENETRATION
            TESTING, AND VULNERABILITY ASSESSMENTS. SECURING CRITICAL ASSETS AND
            DATA.
          </p>
        </li>

        <li className={css.servicesItem}>
          <CornerLine />
          <div className={css.mainText}>
            <div className={css.iconWrapper}>
              <BiPalette className={css.icon} size={20} />
            </div>
            <h2 className={css.itemTitle}>UI/UX DESIGN</h2>
          </div>
          <p className={css.paragraph}>
            INTUITIVE, RESEARCH-DRIVEN USER INTERFACES AND EXPERIENCES. USER
            JOURNEY MAPPING, WIREFRAMING, AND PROTOTYPING. DESIGN THAT CONVERTS.
          </p>
        </li>
      </ul>

      <div className={css.btnGroup}>
        <button className={css.startBtn} type="button">
          START YOUR PROJECT
        </button>
        <Link className={css.contactsBtn} href="/contact">
          TALK TO OUR EXPERTS
        </Link>
      </div>
    </div>
  )
}

export default ServicesPage

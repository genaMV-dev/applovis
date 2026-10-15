import Link from "next/link"
import css from "./BurgerMenu.module.css"
import { IoIosClose } from "react-icons/io"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const BurgerMenu = ({ isOpen, onClose }: Props) => {
  return (
    <div className={`${css.container} ${isOpen ? css.isOpen : ""}`}>
      <button className={css.close} onClick={onClose} type="button">
        <IoIosClose className={css.closeIcon} size={28} />
      </button>
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/projects">Portfolio</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default BurgerMenu

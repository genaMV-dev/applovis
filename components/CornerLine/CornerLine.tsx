import React from "react"
import css from "./CornerLine.module.css"

const CornerLine: React.FC = () => {
  return (
    <>
      <div className={css.cornerLinesWrapper}>
        <svg
          className={css.cyberCornerLine}
          viewBox="0 0 100 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,6 L 17,35 Q 20,40 25,40 L 73,40 Q 78,40 81,44 L 87,52 L 96,52"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="1"
          />

          <path
            d="M 8,6 L 17,20 Q 20,25 25,25 L 73,25 Q 78,25 81,29 L 87,37 L 96,37"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="1"
          />
        </svg>
      </div>
    </>
  )
}

export default CornerLine

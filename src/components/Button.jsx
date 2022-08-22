import React from 'react'

const Button = ({styles, title="Button"}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-mediun text-[18px] text-primary outline-none ${styles}`}>
      {title}
    </button>
  )
}

export default Button
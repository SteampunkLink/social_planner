import React from 'react'

const TextField = ({ type = "text", name, placeholder, aria, defaultVal = "", fieldClass = "input" }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      aria-label={aria}
      defaultValue={defaultVal}
      className={fieldClass}
    />
  )
}

export default TextField
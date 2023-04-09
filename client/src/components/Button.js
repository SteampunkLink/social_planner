import React from 'react';

const SubmitBtn = ({ className, hover, text }) => {
  return (<button className={`btn btn-${className} btn-hover-${hover}`} type="submit" >{text}</button>)
}

const FuncBtn = ({ className, hover, text, handleClick }) => {
  return (<button className={`btn btn-${className} btn-hover-${hover}`} onClick={handleClick} >{text}</button>)
}

const Button = ({ 
  className = "default",
  hover = "default",
  text = "Test",
  handleClick,
  isSubmit = false,
}) => {
  return (
    <>
      { isSubmit ? <SubmitBtn className={className} hover={hover} text={text} /> : <FuncBtn className={className} hover={hover} text={text} handleClick={handleClick} />}
    </>
  )
}

export default Button;

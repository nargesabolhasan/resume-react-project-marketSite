import React from 'react'

const InputChange = (props) => {
const {inputType,changeHandler,value,clickHandler,keyInput}=props
  return (
    <div>
        <input type={inputType} value={value} onChange={changeHandler} onClick={clickHandler} key={keyInput}/>
    </div>
  )
}

export default InputChange
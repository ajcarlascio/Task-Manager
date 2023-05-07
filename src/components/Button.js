
const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log(e)
    }

  return (
    <div>
        <button style= {{backgroundColor: color}} className='btn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
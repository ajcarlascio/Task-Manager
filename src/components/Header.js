import PropTypes from 'prop-types'
import Button from "./Button"

const Header = (props) => {
  return (
    <header className= 'header'>
      <h1 style={{color: 'red', backgroundColor: 'black', alignSelf: 'center', textAlign: 'center'}}/*style={headingStyle}*/>Task Tracker</h1>
      <Button color='blue' text='Add'/>
    </header>
  )
}

const headingStyle = {
  color: 'red', backgroundColor: 'black'
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
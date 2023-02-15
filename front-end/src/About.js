import { useState, useEffect } from 'react'
import './About.css'
import axios from 'axios'


/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [myImage, setImage] = useState('')
  const [myText, setText] = useState('')

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchAbout = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        const aboutText = response.data.txt
        const imageUrl = response.data.img
        setText(aboutText)
        setImage(imageUrl)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoaded(true)
      })
  }

  useEffect(() => {
    fetchAbout()
  }, []) 

  return (
    <>
      <h1>About Me</h1>
      {error && <p className="MessageForm-error">{error}</p>}
      <img src={myImage} alt='' style={{maxHeight:"250px", width:"auto"}}/>
      <p style={{ width: '35%', margin: 'auto', lineHeight: '2'}}>
        {myText}
      </p>

    </>
  )
}

export default About
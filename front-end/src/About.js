import { Link } from 'react-router-dom'
import './About.css'
import Image from './hillary.jpeg'

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
    return (
      <>
        <img src={Image} alt="image" />
        <h1>About Me</h1>
        
        <p  class = "text">Hello! My name is Hillary. I am a senior computer science major, and integrated design 
            and Media minor from Dallas, Texas!

            A fun fact about me is that I am a Triplet, and I spent my entire sophmore year
            on a road trip around the continental United States. In my free time I love to bake, 
            workout, read, explore different resturaunts and hang out with my dogs.

            Some of my favorite artists are Beyonce (who's concert I am desperately trying to get tickets to),
            Alabama Shakes, Norah Jones, Kendrick and the Monophonics. My favorite song at 
            the moment is 'I'm That Girl' by Beyonce. I am nervous and excited for graduation in the spring!

            Thanks for reading!
        </p>
      </>
    )
  }

// make this component available to be imported into any other file
export default About
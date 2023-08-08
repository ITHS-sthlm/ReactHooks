import { useParams } from 'react-router-dom'

function About() {
  const { userName } = useParams()

  return <div>Hi {userName}!</div>
}

export default About

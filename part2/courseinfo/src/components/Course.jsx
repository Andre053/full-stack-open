
const Course = ({ course }) => (
    <div id={course.id}>
      <Header text={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
  const Header = ({ text }) => <h2>{text}</h2>
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        <b>total of {parts.reduce((total, part) => total + part.exercises, 0,)} exercises</b>
      </>
    )
  }
  
  const Part = ({ id, name, exercises }) => <div key={id}>{name} {exercises}</div>

  export default Course
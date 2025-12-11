const CourseDetails = ({ course }) => {
    return (
        <>
            <div>
                {<h2>course 1:</h2>}
                {<h3>Name:{course[0].Name} </h3>}
                {<h3>Mark:{course[0].Mark}</h3>}

            </div>
            <div>
                {<h2>course 2:</h2>}
                {<h3>Name:{course[1].Name} </h3>}
                {<h3>Mark:{course[1].Mark}</h3>}
            </div>


        </>
    )
}
export default CourseDetails
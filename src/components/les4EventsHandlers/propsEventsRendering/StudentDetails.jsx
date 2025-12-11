import React from 'react'

const StudentDetails = ({ studentsWithLevel, exit }) => {
 
   
    return (
        <>
            <div id="studentDetails">
                {studentsWithLevel.map((st, index=1) => (
                    <div key={st.id}>
                        <h2>student: {index}</h2>
                        <h3>שם:{st.name}</h3>
                        <h3>תז:{st.id}</h3>
                        <h3>ציון:{st.mark}</h3>
                        <h3>כיתה:{st.class}</h3>
                        <h3>מקצוע אהוב:{st.favoriteSubject}</h3>
                        <h3>תאור:{st.level}</h3>
                        <button onClick={()=> exit(st)}>ליציאה</button>
                    </div>


                ))}
            </div>
            

        </>
    )
 }

export default StudentDetails
import React from 'react'
import StudentDetails from './StudentDetails';

const School = () => {
    const students = [
        {
          id: 1,
          name: "שרה לוי",
          age: 11,
          mark: 90,
          class: "א",
          favoriteSubject: "עברית"
        },
        {
          id: 2,
          name: "נועה פרץ",
          age: 12,
          mark: 50,
          class: "ב",
          favoriteSubject: "היסטוריה"
        },
        {
          id: 3,
          name: "תמר ישראלי",
          age: 13,
          mark: 88,
          class: "ג",
          favoriteSubject: "מדעים"
        },
        {
          id: 4,
          name: "מירה כהן",
          age: 12,
          mark: 77,
          class: "א",
          favoriteSubject: "מתמטיקה"
        },
        {
          id: 5,
          name: "אילה שמואלי",
          age:11,
          mark: 100,
          class: "ב",
          favoriteSubject: "ספורט"
        }
      ];
      const exit=(s)=>{
        const now = new Date().toLocaleTimeString();
        console.log("השער נפתח");
        console.log(`${s.name} - יצאת בשעה ${now}`);
        
        
      }
      const studentsWithLevel = students.map(s => {
        let level = "";
        if (s.mark > 90) level = "תלמיד מצטיין";
        else if (s.mark < 60) level = "טעון שיפור";
        return { ...s, level };
      });
  return (
    <>
    
    <StudentDetails exit={exit}studentsWithLevel= {studentsWithLevel}/>

    </>
  )
}

export default School
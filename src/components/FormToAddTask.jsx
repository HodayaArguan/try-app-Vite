import React from 'react'
import { use } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AllTask from './AllTask';
const FormToAddTask = () => {

    const [HeadLine, setHeadLine]=useState("")
    const [Describe, setDescribe]=useState("")
    const handleHeadLine=(e)=>{
        setHeadLine(e.target.value)
    }
    const handleDescribe=(e)=>{
        setDescribe(e.target.value)
    }
    const handleSubmitForm=()=>{
        const addTask={HeadLine,Describe}
        // מה המטרה בשורה הזו?
        // //בהתחלה חשבתי ליצור אובייקט עם כל הפרטים ואז לשלוח אותו ככה
        // //עכשיו אני מבינה שצריך שפה יהיו רק 2 סטייטים אז אני כן יעביר את זה אחד אחד לקומפוננטה שתיקח את הכל תכין אובייקט ואז תצצרף למערך
        // קודםם כל- יש לך חשיבה יפהץ
        // אני כן מחדדת שיש אפשרות  (זה תלוי גישה)  להכין את האובייקט המחלא בקומפוננטה של הטופסץ יש מצב שיש אפילו עדיפות לגישה שזה נעשה בטופסץ
        // בכל מקרה לא קריטיץ ההבנה יפה שצריך להכין אובייקט ולהויף למערך :)
        // //אז כן עדיף לי להשאיר פה את האבייקט עם כל הנתונים?
        // מה יותר קל לך? אין לך הרבה זמו עודץ 
        // בכל מקרה הכתיב והכל צריך להשתנות קצתץץץ
        // אז באמת שאיך שיותר קל
        // //המורה אני מרגישה ש/למדתי הרבה ומשום מה אני לא כל כך מרוכזת יש אפשרות להמשיך את זה בבית כמובן בלי עזרה רק יותר ריזוז?

        // //חבל לי ממש
        // קודם כל אלופה את! כל הכבוד!
        // ואני מכירה אותך- בטוחה שיש לך את הידע טוב<!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8" />
        //     <meta name="viewport" content="width=אני כן הולכת לעבור עכשו על התרגיל וזה לדעתי חשוב לא פחות מהמבחןץץץ
        //     אז אוטלי נעשה שאת תהיי פה איתנו במעבר על התרגיל,
        //     ואחכ בלי להסתכל בתרגיל שלי- את פשוט תעשי את זה שוב בביתץץץמה אומרת?
        //     , initial-scale=1.0" />
            {/* //אז בעצם בהבנה להיוץת פה?
            ואז להמשיך בבית?
            אני אשמח ממשאין מילים
            אניי פשוט נוסעם היום מוקדם וקצת בלחץ....
            אז תצאי מתי שמתאים לך, ניעה טובה וכל הכבוד שבאת<!DOCTYPE html> */}

        {<AllTask addTask />}
    }
    const handleSubmitToDoList=()=>{
        
    }


  return (
    <div>
        <form >
            <input type="text" placeholder='HeadLine of task' onBlur={handleHeadLine} /><br />
            <input type="text" placeholder='Describe your task' onBlur={handleDescribe} />


        </form>
        <button onSubmit={handleSubmitForm} >create task</button>
        <button  onSubmit={handleSubmitToDoList}>ToDoList</button>
        
       
      
    </div>
  )
}

export default FormToAddTask

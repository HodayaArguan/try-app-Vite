import React from 'react'

const Books = () => {
    const books=[
        {id:"111", bookName:"Mahalalel", author: "Maya Keinan", publishedYear:2015, amount:10000},
        {id:"222", bookName:"Gam Ki Eleh", author: "Libi Klain", publishedYear:2006, amount:250000},
        {id:"333", bookName:"Dadi Gamadi", author: "Menucha Fuks", publishedYear:1980, amount:6500},
        {id:"444", bookName:"Dar Kar", author: "Yona Sapir", publishedYear:2000, amount:40000},
        
    ]
  return (

    <>
    <div>Books</div>
    <h1>My books: </h1>
    {
       <table>
        <th>id</th>
        <th>bookName</th>
        <th>author</th>
        <th>publishedYear</th>
        <th>amount</th>

       {
           books.map(book=>
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.publishedYear}</td>
              <td>{book.ampunt}</td>
            </tr>


           )
       }
       </table>
    }
    
    </>
    
  )
}

export default Books
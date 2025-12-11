import React from 'react'

const Books = () => {
    const books = [
        {
            name: "כי אתה עמדי ",
            year: 2015,
            author: "ליבי קליין",
            publisher: "פלדהיים",
            pages: 240,
            id: 111
        },
        {
            name: "כי אבי ואימי ",
            year: 2020,
            author: "ליבי קליין",
            publisher: "ספרי מזרחי",
            pages: 320,
            id: 222
        },
        {
            name: "לראות בטוב ",
            year: 2019,
            author: "ליבי קליין",
            publisher: "ספרי מזרחי",
            pages: 285,
            id: 333
        },
        {
            name: "מעגלים של שמחה",
            year: 2017,
            author: "מנוחה פוקס",
            publisher: "פלדהיים",
            pages: 210,
            id: 444
        },
        {
            name: "מאין יבוא",
            year: 2021,
            author: "ליבי קליין",
            publisher: "ספרי מזרחי",
            pages: 350,
            id: 555
        }
    ];
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>year</th>
                        <th>author</th>
                        <th>publisher</th>
                        <th>pages</th>
                    </tr>

                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.year}</td>
                            <td>{book.author}</td>
                            <td>{book.publisher}</td>
                            <td>{book.pages}</td>
                        </tr>
                    ))}
                </thead>
            </table>
        </>
    )
}

export default Books
// const book = {
//     tilte: "selfhelp",
//     author: "shyam khanna",
//     year: 2006
// }

// console.log(book);
// console.log(book.tilte);
// console.log(book.author);


// objects Methods

// const book = {
//     title: "selfhelp",
//     author: "shyam khanna",
//     year: 2006,
//     getBookinfo: function() {  // here we created a method
//         return `${this.title} by ${this.author}`;  // it returns a string
//     },
// };

// console.log(book.getBookinfo());


// const book = {
//     title: "selfhelp",
//     author: "shyam khanna",
//     year: 2006,
//     updateyear: function(year) {
//         this.year = year;
//     },
// };

// console.log(book.year);
// book.updateyear(2009);
// console.log(`updated year ${book.year}`);


// let lib = {
//     name: "Froster Libraray",
//     location: "gaziyabad",
    
// books : [
//     {
//         title: "dhivkosh",
//         author: "Narayan",
//         year: 2021 

//     },
//      {
//         title: "hexacon",
//         author: "John stuart",
//         year: 2022 

//     },
//      {
//         title: "periodictimes",
//         author: "Richard golem",
//         year: 2028 

//     },
// ]
// }

// //console.log(lib);
// console.log(lib.name);


// lib.books.forEach(e => {
//     console.log(`Title: ${e.title}`)
// });



// const myBook = {
//     title: 'Dune',
//     author: 'Frank Herbert',
//     year: 1965,
//     bookDetails: function() {
//        return `title: ${this.title}, author: ${this.author}, year: ${this.year}`
//     }
// }

// console.log(myBook.bookDetails())



// for in loop in javascript
// const myBook = {
//     title: 'Dune',
//     author: 'Frank Herbert',
//     year: 1965,

// }

// for(const property in myBook) {
//     console.log(`${property}: ${myBook[property]}`);
    
// }


//object.keys and object.values in Objects of javascript

const myBook = {
    title: 'Dune',
    author: 'Frank Herbert',
    year: 1965,

}

console.log(`Keys: ${Object.keys(myBook)}`)
console.log(`Values: ${Object.values(myBook)}`)
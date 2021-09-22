const button = document.querySelector('button');
const newQuote = document.querySelector('span');




//   const updateQuote = () => {
//     button.addEventListener('click', () => {

//         const getQuote = async() => {
//             fetch('https://api.kanye.rest')
//           .then(response => response.json())
//           .then(data => console.log(data));
//         }
         
//         getQuote()
//         // newQuote.innerHTML = `${data.quote}`

//     })
// }
// updateQuote()



const updateQuote = () => {
        button.addEventListener('click', () => {
    
            const getQuote = async() => {
                fetch('https://api.kanye.rest')
              .then(response => response.json())
              .then(data => newQuote.innerHTML = `${data.quote}`)
            }
            getQuote()
        })
    }
    updateQuote()
















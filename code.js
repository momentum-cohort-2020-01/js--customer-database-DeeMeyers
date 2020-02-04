//List of customers is const "customers"
//  
//for each customer you need to pull:
    // thumbnail pic
        //will need css styling
    // email
        //will need css styling
    // adress
        //will need to change full state name to abbreviation
    // DOB
        //will need to be changed with moment.js
    // customer since: 
        //will need to be calculated with moment.js
// im going to use flex to put this info inside of a div per customer, using more 
// divs for each bit of info. Should be able to use js to create all the elements. 



const custumerNames = customers.map(function (customer){
    return customer.name.first[0].toUpperCase() + customer.name.slice(1) + 
    ' ' +
    customer.name.last[0].toUpperCase() + 
    customer.name.last.slice(1)
})

function capitalizeFirstLetter(string){
    return string[0].toUpperCase + string.slice(1)
}

const custumerNames = customers.map(function (customer){
    return capitalizeFirstLetter(customer.name.first) +
    ' ' +
    capitalizeFirstLetter(customer.name.last)
})


const customerListItems = customerNames.map(function (name){
    const li = document.createElement('li')
    li.textContent = name
    return li
})

const ul = document.createElement('ul')
for (const li of customerListItems){
    ul.appendChild(li)
}
document.querySelector('#customers').appendChild(ul)
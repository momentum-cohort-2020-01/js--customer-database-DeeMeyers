//List of customers is const "customers"
//  
//for each customer you need to pull:
    // thumbnail pic - done
        //will need css styling
    // email - done
        //will need css styling 
    // adress - need to capitalize stuff, states done
        //will need to change full state name to abbreviation
    // DOB -done
        //will need to be changed with moment.js
    // customer since: 
        //will need to be calculated with moment.js
// im going to use flex to put this info inside of a div per customer, using more 
// divs for each bit of info. Should be able to use js to create all the elements. 




function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1)
}

const customerNames = customers.map(function (customer){
    return capitalizeFirstLetter(customer.name.first) +
    ' ' +
    capitalizeFirstLetter(customer.name.last)
})

console.log(customerNames);

const customerListItems = customerNames.map(function (name){
    const div = document.createElement('div')
    div.textContent = name
    return div
})
console.log(customerListItems);
console.log(customerListItems[2]);
const ul = document.createElement('ul')
console.log(ul);

for (const li of customerListItems){
    ul.appendChild(li)
}
document.querySelector('#customers').appendChild(ul)
//gets me all the picture urls
const customerPics = customers.map(function (customer){
    return customer.picture.thumbnail
})

//insert pics

console.log( customerPics)

//gets me all the emails
const customerEmails = customers.map(function (customer){
    return customer.email
})

console.log(customerEmails)

//get all adress and make them ok

const states = customers.map(function(customer){
    return nameToAbbr(customer.location.state)
})
console.log(states);

const adressObj = customers.map(function (customer){
    return customer.location.street + ' ' + customer.location.city
})

console.log(adressObj);

//get DOB

const dob = customers.map(function(customer){
    return "DOB: "+moment(customer.dob).format('MMMM Do, YYYY')
})
console.log({dob})

//crust since

const custSince = customers.map(function(customer){
    return "Customer Since: "+moment(customer.registered).format('MMMM Do, YYYY')
})

//make a div with a shared class for each item in an array
console.log(custSince)
 function makeDiv(arr, class){
     for(let each of arr){

     }
 }

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





// const customerNames = customers.map(function (customer){
//     return capitalizeFirstLetter(customer.name.first) +
//     ' ' +
//     capitalizeFirstLetter(customer.name.last)
// })



// const customerListItems = customerNames.map(function (name){
//     const div = document.createElement('div')
//     div.textContent = name
//     div.className = 'custy'
//     return div
// })
// console.log({customerListItems});

// const ul = document.createElement('ul')
// console.log({ul});

// for (const li of customerListItems){
//     ul.appendChild(li)
// }
// document.querySelector('#customers').appendChild(ul)

// //gets me all the picture urls
// const customerPics = customers.map(function (customer){
//     return customer.picture.thumbnail
// })



// //gets me all the emails
// const customerEmails = customers.map(function (customer){
//     return customer.email
// })



// //get all adress and make them ok

// const adressObj = customers.map(function (customer){
//     return customer.location.street + ' ' + customer.location.city + ' , ' + (nameToAbbr(customer.location.state)) + ' ' +customer.location.postcode
// })

// function adress(customer){
//     return customer.location.street + ' ' + customer.location.city + ' , ' + (nameToAbbr(customer.location.state)) + ' ' +customer.location.postcode
// }


// //get DOB

// const dob = customers.map(function(customer){
//     return "DOB: "+moment(customer.dob).format('MMMM Do, YYYY')
// })



// //crust since

// const custSince = customers.map(function(customer){
//     return "Customer Since: "+moment(customer.registered).format('MMMM Do, YYYY')
// })




// //insert pics

// for(let item of customerListItems){
//     let el = document.createElement('img')
//     el.src = 
    
// }

//everything is a function now
//taking what i used to get pull all the info by category
//im going to try to get everything per customer

const customerListItems = customerNames.map(function (name){
    const div = document.createElement('div')
    div.textContent = name
    div.className = 'custy'
    return div
})
console.log({customerListItems});

const ul = document.createElement('ul')
console.log({ul});

for (const li of customerListItems){
    ul.appendChild(li)
}
document.querySelector('#customers').appendChild(ul)



function capitalizeFirstLetter(string){
    return string[0].toUpperCase() + string.slice(1)
}

function customerNames(){
    return capitalizeFirstLetter(customer.name.first) +
    ' ' +
    capitalizeFirstLetter(customer.name.last)
}

function customerPics(){
     return customer.picture.thumbnail
}

function emailAdresss(){
    return customer.email
}

function adress(){
    return customer.location.street + ' ' + customer.location.city + ' , ' + (nameToAbbr(customer.location.state)) + ' ' +customer.location.postcode
}

function DOB(){
    return "DOB: "+moment(customer.dob).format('MMMM Do, YYYY')
}

function crustSince(){
    return "Customer Since: "+moment(customer.registered).format('MMMM Do, YYYY')
}


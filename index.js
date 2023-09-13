/*

let stocks = {
    fruits: ['strawberry', 'grapes', 'banana', "apple"],
    liquid: ["water", "ice"],
    holder: ['cone', "cup", "stick"],
    toppings: ['chocolate', 'peanuts']
};

let is_shop_open = true;

let order = (time, work)=>{
    return new Promise( (resolve, reject)=>{
        if (is_shop_open) {
            setTimeout(()=>{
                resolve(work())
            }, time)
        } else {
            reject(console.log('customer not served'))
        }
    } )
}

order(2000, ()=>console.log(`${stocks.fruits[2]} was selected`)).then(()=>{
    return order(0000, ()=>console.log('production started'))
}).then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} was added`))
}).then(()=>{
    return order(1000, ()=>console.log(`${stocks.holder[1]} was selected`))
}).then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
}).then(()=>{
    return order(1000, ()=>console.log('customer is served'))
}).catch(()=>{
    console.log('customer left')
})


function one(call_two) {
    console.log('step 1');
    call_two()
}

function two() {
    console.log('step 2')
}

one(two)


*/



/*

console.log('callback fired');
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }



    getTodos('todos/todos.json', (data)=>{
    console.log(data);
    getTodos('todos/habeeb.json', (data)=>{
        console.log(data);
        getTodos('todos/sherifat.json', (data)=>{
            console.log(data);
        })
    })
});

*/

//console.log(request, request.responseText)
//console.log('could not fetch the data');

/*

const getTodos = (resource) => {

    return new Promise((resolve, reject)=>{

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=>{
        
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        })
        request.open('GET', resource);
        request.send();
    });
}

getTodos('todos/habeeb.json').then(data => {
    console.log(data);
    return getTodos('todos/todos.json').then((data)=>{
        console.log(data)
        return getTodos('todos/sherifats.json').then((data)=>{
            console.log(data)
        })
    })
}).catch(err => console.log(err))

*/

fetch('todos/habeeb.json').then((response)=>{
    console.log(response)
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch(err => {
    console.log('error')
})

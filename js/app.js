'use strict';


let clocks = ['6am' ,'7am', '8am', '9am', '10am' ,'11am' ,'12pm' ,'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let container = document.getElementById('container');
let Seattle = {
    location :'Seattle',
    minCust : 23,
    maxCust : 65,
    avgCookies : 6.3,
    randomCustomers : [],
    cookiesPerHour : [],
    dailySales : 0,




    randomCustomerPerHour:function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    },

    cookiesSoldPerHour:function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    },

    render:function(){
           let header = document.createElement('h2')
            container.appendChild(header);
            header.textContent = this.location;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.cookiesPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
            }
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total :' + this.dailySales + 'cookies';
        }
    }
        

Seattle.randomCustomerPerHour();
Seattle.cookiesSoldPerHour();
Seattle.render();
console.log(Seattle);


let Tokyo = {
    location :'Tokyo',
    minCust : 3,
    maxCust : 24,
    avgCookies : 1.2,
    randomCustomers : [],
    cookiesPerHour : [],
    dailySales : 0,

    randomCustomerPerHour:function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    },

    cookiesSoldPerHour:function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    },

    render:function(){
           let header = document.createElement('h2')
            container.appendChild(header);
            header.textContent = this.location;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.cookiesPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
            }
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total :' + this.dailySales + 'cookies';
        }
    }



  
    Tokyo.randomCustomerPerHour();
    Tokyo.cookiesSoldPerHour();
    Tokyo.render();
    console.log(Tokyo);

let Dubai = {
    location :'Dubai',
    minCust : 11,
    maxCust : 38,
    avgCookies : 3.7,
    randomCustomers : [],
    cookiesPerHour : [],
    dailySales : 0,



    randomCustomerPerHour:function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    },

    cookiesSoldPerHour:function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    },

    render:function(){
           let header = document.createElement('h2')
            container.appendChild(header);
            header.textContent = this.location;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.cookiesPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
            }
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total :' + this.dailySales + 'cookies';
        }
    }
    Dubai.randomCustomerPerHour();
    Dubai.cookiesSoldPerHour();
    Dubai.render();
    console.log(Dubai);
    

let Paris = {
    location :'Paris',
    minCust : 20,
    maxCust : 38,
    avgCookies : 2.3,
    randomCustomers : [],
    cookiesPerHour : [],
    dailySales : 0,



    randomCustomerPerHour:function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    },

    cookiesSoldPerHour:function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    },

    render:function(){
           let header = document.createElement('h2')
            container.appendChild(header);
            header.textContent = this.location;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.cookiesPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
            }
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total :' + this.dailySales + 'cookies';
        }
    }
    Paris.randomCustomerPerHour();
    Paris.cookiesSoldPerHour();
    Paris.render();
    console.log(Paris);
    

let Lima = {
    location :'Lima',
    minCust : 2,
    maxCust : 16,
    avgCookies : 4.6,
    randomCustomers : [],
    cookiesPerHour : [],
    dailySales : 0,



    randomCustomerPerHour:function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    },

    cookiesSoldPerHour:function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    },

    render:function(){
           let header = document.createElement('h2')
            container.appendChild(header);
            header.textContent = this.location;
            let ulEl = document.createElement('ul');
            container.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.cookiesPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
            }
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = 'Total :' + this.dailySales + 'cookies';
        }
    }
    Lima.randomCustomerPerHour();
    Lima.cookiesSoldPerHour();
    Lima.render();
    console.log(Lima);


function getRandomIntInclusive(minCust, maxCust) {
   
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}  

'use strict';


let clocks = ['6am' ,'7am', '8am', '9am', '10am' ,'11am' ,'12pm' ,'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

let Seattle = {
    location :'Seattle',
    minCust : 23,
    maxCUst : 65,
    avgCookies : 6.3,
    custumerPerHour : [],
    dailySales : 0,




    amountOfCookies:function(){
        for(let i=0; i<clocks.length; i++){
            this.custumerPerHour.push(getRandomIntInclusive(23,65));
        }
            let body = document.getElementById('body');
            let paragraph = document.createElement('p');
            body.appendChild(paragraph);
            paragraph.textContent = this.location;
            let ulEl = document.createElement('ul');
            body.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.custumerPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.custumerPerHour[x]} cookies`;
            }
        


    },
    totalSales:function(){
        for (let index = 0; index < this.custumerPerHour.length; index++) {
            this.dailySales += (this.custumerPerHour[index]*this.avgCookies);
        }

        let ulEl2 = document.createElement('ul');
        body.appendChild(ulEl2);
        let liEl2 = document.createElement('li');
        ulEl2.appendChild(liEl2);
        liEl2.textContent =`Total: ${Math.floor(this.dailySales)} cookies`;
    }

    


}
Seattle.amountOfCookies();
console.log(Seattle);
Seattle.totalSales();


let Tokyo = {
    location :'Tokyo',
    minCust : 3,
    maxCUst : 24,
    avgCookies : 1.2,
    custumerPerHour : [],
    dailySales : 0,



    amountOfCookies:function(){
        for(let i=0; i<clocks.length; i++){
            this.custumerPerHour.push(getRandomIntInclusive(23,65));
        }
            let body = document.getElementById('body');
            let paragraph = document.createElement('p');
            body.appendChild(paragraph);
            paragraph.textContent = this.location;
            let ulEl = document.createElement('ul');
            body.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.custumerPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.custumerPerHour[x]} cookies` ;


            }
        


    },
    totalSales:function(){
        for (let index = 0; index < this.custumerPerHour.length; index++) {
            this.dailySales += (this.custumerPerHour[index]*this.avgCookies);
        }

        let ulEl2 = document.createElement('ul');
        body.appendChild(ulEl2);
        let liEl2 = document.createElement('li');
        ulEl2.appendChild(liEl2);
        liEl2.textContent =`Total: ${Math.floor(this.dailySales)} cookies`;
    }


}
Tokyo.amountOfCookies();
console.log(Tokyo);
Tokyo.totalSales();


let Dubai = {
    location :'Dubai',
    minCust : 11,
    maxCUst : 38,
    avgCookies : 3.7,
    custumerPerHour : [],
    dailySales : 0,



    amountOfCookies:function(){
        for(let i=0; i<clocks.length; i++){
            this.custumerPerHour.push(getRandomIntInclusive(23,65));
        }
            let body = document.getElementById('body');
            let paragraph = document.createElement('p');
            body.appendChild(paragraph);
            paragraph.textContent = this.location;
            let ulEl = document.createElement('ul');
            body.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.custumerPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.custumerPerHour[x]} cookies` ;



            }
        


    },
    totalSales:function(){
        for (let index = 0; index < this.custumerPerHour.length; index++) {
            this.dailySales += (this.custumerPerHour[index]*this.avgCookies);
        }

        let ulEl2 = document.createElement('ul');
        body.appendChild(ulEl2);
        let liEl2 = document.createElement('li');
        ulEl2.appendChild(liEl2);
        liEl2.textContent =`Total: ${Math.floor(this.dailySales)} cookies`;
    }


}
Dubai.amountOfCookies();
console.log(Dubai);
Dubai.totalSales();


let Paris = {
    location :'Paris',
    minCust : 20,
    maxCUst : 38,
    avgCookies : 2.3,
    custumerPerHour : [],
    dailySales : 0,



    amountOfCookies:function(){
        for(let i=0; i<clocks.length; i++){
            this.custumerPerHour.push(getRandomIntInclusive(23,65));
        }
            let body = document.getElementById('body');
            let paragraph = document.createElement('p');
            body.appendChild(paragraph);
            paragraph.textContent = this.location;
            let ulEl = document.createElement('ul');
            body.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.custumerPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.custumerPerHour[x]} cookies` ;


            }
        


    },
    totalSales:function(){
        for (let index = 0; index < this.custumerPerHour.length; index++) {
            this.dailySales += (this.custumerPerHour[index]*this.avgCookies);
        }

        let ulEl2 = document.createElement('ul');
        body.appendChild(ulEl2);
        let liEl2 = document.createElement('li');
        ulEl2.appendChild(liEl2);
        liEl2.textContent =`Total: ${Math.floor(this.dailySales)} cookies`;
    }


}
Paris.amountOfCookies();
console.log(Paris);
Paris.totalSales();


let Lima = {
    location :'Lima',
    minCust : 2,
    maxCUst : 16,
    avgCookies : 4.6,
    custumerPerHour : [],
    dailySales : 0,



    amountOfCookies:function(){
        for(let i=0; i<clocks.length; i++){
            this.custumerPerHour.push(getRandomIntInclusive(23,65));
        }
            let body = document.getElementById('body');
            let paragraph = document.createElement('p');
            body.appendChild(paragraph);
            paragraph.textContent = this.location;
            let ulEl = document.createElement('ul');
            body.appendChild(ulEl);
            let liEl;
        
            for(let x=0; x<this.custumerPerHour.length; x++){
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent =`${clocks[x]} : ${this.custumerPerHour[x]} cookies` ;


            }
        


    },
    totalSales:function(){
        for (let index = 0; index < this.custumerPerHour.length; index++) {
            this.dailySales += (this.custumerPerHour[index]*this.avgCookies);
        }

        let ulEl2 = document.createElement('ul');
        body.appendChild(ulEl2);
        let liEl2 = document.createElement('li');
        ulEl2.appendChild(liEl2);
        liEl2.textContent =`Total: ${Math.floor(this.dailySales)} cookies`;
    }


}
Lima.amountOfCookies();
console.log(Lima);
Lima.totalSales();


function getRandomIntInclusive(minCust, maxCUst) {
    minCust = Math.ceil(minCust);
    maxCUst = Math.floor(maxCUst);
    return Math.floor(Math.random() * (maxCUst - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}  

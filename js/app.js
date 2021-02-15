'use strict';

function getRandomIntInclusive(minCust, maxCust) {
   
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}  

let clocks = ['6am' ,'7am', '8am', '9am', '10am' ,'11am' ,'12pm' ,'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);
function Cookiestand(location,minCust,maxCust,avgCookies){
    this.location =location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.randomCustomers = [];
    this.cookiesPerHour = [];
    this.dailySales = 0;
}



    Cookiestand.prototype.randomCustomerPerHour=function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    }

    Cookiestand.prototype.cookiesSoldPerHour=function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
             this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    }

    Cookiestand.prototype.header=function(){
       
            let tr =document.createElement('tr');
            table.appendChild(tr);
            let th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = ' ';


            for (let index = 0; index < clocks.length; index++) {
                
            let th1 = document.createElement('th1');
            tr.appendChild(th1);
            th1.textContent = clocks[index];
            let th2 = document.createElement('th2');
            tr.appendChild(th2);          
          }
    }
            

     Cookiestand.prototype.render=function(){
         let tr1 = document.createElement('tr1');
         table.appendChild(tr1);
         let td = document.createElement('td');
         tr1.appendChild(td);
         td.textContent = this.location;
             
             let td2 = document.createElement('td2');
             tr1.appendChild(td2);
             td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];

            //  let td2 = document.createElement('td2');
            //  tr1.appendChild(td2);
            //  td2.textContent = this.cookiesPerHour[0];


         
         
    }

    Cookiestand.prototype.footer=function(){

    }

   let seattle = new Cookiestand('seattle',23,65,6.3);
   seattle.randomCustomerPerHour();
   seattle.cookiesSoldPerHour();
   seattle.header();
   seattle.render();
   // Cookiesstand.prototype.render=function(){
    //        let header = document.createElement('h2')
    //         container.appendChild(header);
    //         header.textContent = this.location;
    //         let ulEl = document.createElement('ul');
    //         container.appendChild(ulEl);
    //         let liEl;
        
    //         for(let x=0; x<this.cookiesPerHour.length; x++){
    //         liEl = document.createElement('li');
    //         ulEl.appendChild(liEl);
    //         liEl.textContent =`${clocks[x]} : ${this.cookiesPerHour[x]} cookies`;
    //         }
    //         liEl = document.createElement('li');
    //         ulEl.appendChild(liEl);
    //         liEl.textContent = 'Total :' + this.dailySales + 'cookies';
    //     }
    
        

// Seattle.randomCustomerPerHour();
// Seattle.cookiesSoldPerHour();
// Seattle.render();
// console.log(Seattle);





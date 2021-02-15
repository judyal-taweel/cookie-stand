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
    // this.dailySales = 0;
}



    Cookiestand.prototype.randomCustomerPerHour=function(){
        for(let i=0; i<clocks.length; i++){
            this.randomCustomers.push(getRandomIntInclusive(this.minCust,this.maxCust));
        }
    }

    Cookiestand.prototype.cookiesSoldPerHour=function(){
        for (let index = 0; index < clocks.length; index++) {
             this.cookiesPerHour.push(Math.floor(this.randomCustomers[index]*this.avgCookies));
            //  this.dailySales = this.dailySales + this.cookiesPerHour[index];
            
        }
    }

    Cookiestand.prototype.header=function(){
        let table2 =document.createElement('table2');
        container.appendChild(table2);
       
            let tr =document.createElement('tr');
            table2.appendChild(tr);
            let th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = ' ';

            let th1;

            for (let index = 0; index < clocks.length; index++) {
            th1 = document.createElement('th1');
            tr.appendChild(th1);
            th1.textContent = clocks[index];
          }
                

          
    }
            

     Cookiestand.prototype.render=function(){
        this.randomCustomerPerHour();
        this.cookiesSoldPerHour();
        let tr=document.createElement('tr');
        table.appendChild(tr);
        let th=document.createElement('th');
        tr.appendChild(th);
        th.textContent=this.location;
        let td ;
        let total=0;
        for (let i = 0; i < this.randomCustomers.length; i++) {
            td=document.createElement('td');
            tr.appendChild(td);
            td.textContent= this.randomCustomers[i];
            total=total+this.randomCustomers[i];
            }
            td=document.createElement('td');
            tr.appendChild(td);
            td.textContent=total;    
    };

    function lowerRow() {
        let tr=document.createElement('tr');
        table.appendChild (tr); 
        let th=document.createElement('th');
         tr.appendChild(th);
         th.textContent='Total';
    }

    

   let Seattle = new Cookiestand('Seattle',23,65,6.3);
   let Tokyo=new Cookiestand('Tokyo',3,24,1.2);
   let Dubai=new Cookiestand('Dubai',11,38,3.7);
   let Paris=new Cookiestand('Paris',20,38,2.3);
   let Lima=new Cookiestand('Lima',2,16,4.6);


   Seattle.header();
   Tokyo.header();
   Dubai.header();
   Paris.header();
   Lima.header();

   Seattle.render();
   Tokyo.render();
   Dubai.render();
   Paris.render();
   Lima.render();



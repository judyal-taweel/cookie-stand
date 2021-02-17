'use strict';

function getRandomIntInclusive(minCust, maxCust) {
   
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust); //The maximum is inclusive and the minimum is inclusive
}  

let clocks = ['6am' ,'7am', '8am', '9am', '10am' ,'11am' ,'12pm' ,'1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
let arrayOfTotal=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalOfTotal =0;

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
             arrayOfTotal[index] + arrayOfTotal[index] + this.cookiesPerHour[index];
            
        }
    }

    function header(){
        let tr=document.createElement('tr');
        table.appendChild(tr);
        let th1=document.createElement('th');
        tr.appendChild(th1);
        th1.textContent = ' ';

        let th;
        for(let i=0 ; i<clocks.length; i++){
            th=document.createElement('th');
            tr.appendChild(th);
            th.textContent=clocks[i];

        }
        let dailyTotal= document.createElement('th');
        tr.appendChild(dailyTotal);
        dailyTotal.textContent='Daily Locatin Total';

        }  
        header();     

        let Seattle = new Cookiestand('Seattle',23,65,6.3);
        let Tokyo=new Cookiestand('Tokyo',3,24,1.2);
        let Dubai=new Cookiestand('Dubai',11,38,3.7);
        let Paris=new Cookiestand('Paris',20,38,2.3);
        let Lima=new Cookiestand('Lima',2,16,4.6);
    
            

     Cookiestand.prototype.render=function(){
      
       
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
            td.textContent=this.dailySales;    
            
    }
   

   


     let objects = [Seattle,Tokyo,Dubai,Paris,Lima];


     Seattle.randomCustomerPerHour();
     Seattle.cookiesSoldPerHour();
     Seattle.render();
     Tokyo.randomCustomerPerHour();
     Tokyo.cookiesSoldPerHour();
     Tokyo.render();
     Dubai.randomCustomerPerHour();
     Dubai.cookiesSoldPerHour();
     Dubai.render();
     Paris.randomCustomerPerHour();
     Paris.cookiesSoldPerHour();
     Paris.render();
     Lima.randomCustomerPerHour();
     Lima.cookiesSoldPerHour();
     Lima.render();

   function lowerRow() {

        let tr=document.createElement('tr');
        table.appendChild (tr); 
        let th=document.createElement('th');
         tr.appendChild(th);
         th.textContent='Total';
         for (let i=0; i <clocks.length; i++) {
             let sum=0;
         
         for (let index = 0; index < objects.length; index++) {
             sum=sum + objects[index].cookiesPerHour[i];
             
         }
         let th;
         totalOfTotal = totalOfTotal +sum;
         th = document.createElement('th');
         tr.appendChild(th);
         th.textContent = sum;
        }
        let th3 = document.createElement('th');
        tr.appendChild(th3);
        th3.textContent= totalOfTotal ;

    };

   
   
    

  



   const form = document.getElementById('cookies');
   form.addEventListener('submit',newCookiesStand);

   function newCookiesStand(event){
       event.preventDefault();
       console.log(event);

       const location = event.target.locationField.value;
    
       let minCust = event.target.minCustField.value;
       let maxCust = event.target.maxCustField.value;
       let avgCookies = event.target.avgCookiesField.value;
       
       let newStands = new Cookiestand (location,minCust,maxCust,avgCookies);

       newStands.randomCustomerPerHour();
       newStands.cookiesSoldPerHour();
       newStands.render();
       lowerRow();
       

      
    }
   

  



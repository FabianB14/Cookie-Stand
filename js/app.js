// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:
// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

'use strict';
//my first object 'firstandpike' with the property of mincust, maxcust, and avgCookiesale and each property has a value

var salesData = document.getElementById('saledata');
var firstAndPike = {
  locationName: '1st And Pike',
  minCust: 23,//the min. number of customers per hr.
  maxCust: 65,//the max. number of customers per hr.
  avgCookieSale: 6.3,// the average number of cookies purchased per customer
  storeCookies: [],

  makeRandomFirstAndPike: function (){
    var minimum = Math.floor(this.minCust);
    var maximum = Math.floor(this.maxCust);

    var numberCustomer = Math.random() * (maximum - minimum +1) + minimum;
    var cookiesPerHour = Math.round(numberCustomer * this.avgCookieSale);
    return cookiesPerHour;
  }
};

firstAndPike.eachHour = function(){
  for (var i = 0; i < 15; i++){
    this.storeCookies.push(this.makeRandomFirstAndPike());
  }
};
console.log(firstAndPike.storeCookies);


firstAndPike.mySaleData = function(){
  this.eachHour();
  var openHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']


  var liEl = document.createElement('li');
  var h2 = document.createElement('h2');
  h2.textContent= this.locationName;
  liEl.appendChild(h2);
  var ulEl = document.createElement('ul');



  var total = 0;

  for (var i=0; i < this.storeCookies.length; i++){
    var liElHour = document.createElement('li');
    liElHour.textContent= openHour[i] + ': ' + this.storeCookies[i] + ' cookies';

    ulEl.appendChild(liElHour);
    total = total + this.storeCookies[i];

  }

  var totalLi = document.createElement('li');
  totalLi.textContent= 'Total ' + ': ' + total + ' cookies';
  ulEl.appendChild(totalLi);
  liEl.appendChild(ulEl);
  salesData.appendChild(liEl);


};

firstAndPike.mySaleData();



//Location seaTacAirport//////////////////

var seaTacAirport = {
  locationName: 'Sea Tac Airport',
  minCust: 23,//the min. number of customers per hr.
  maxCust: 65,//the max. number of customers per hr.
  avgCookieSale: 6.3,// the average number of cookies purchased per customer
  storeCookies: [],

  makeRandomSeaTacAirport: function (){
    var minimum = Math.floor(this.minCust);
    var maximum = Math.floor(this.maxCust);

    var numberCustomer = Math.random() * (maximum - minimum +1) + minimum;
    var cookiesPerHour = Math.round(numberCustomer * this.avgCookieSale);
    return cookiesPerHour;
  }
};

seaTacAirport.eachHour = function(){
  for (var i = 0; i < 15; i++){
    this.storeCookies.push(this.makeRandomSeaTacAirport());
  }
};
console.log(seaTacAirport.storeCookies);


seaTacAirport.mySaleData = function(){
  this.eachHour();
  var openHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']


  var liEl = document.createElement('li');
  var h2 = document.createElement('h2');
  h2.textContent= this.locationName;
  liEl.appendChild(h2);
  var ulEl = document.createElement('ul');



  var total = 0;

  for (var i=0; i < this.storeCookies.length; i++){
    var liElHour = document.createElement('li');
    liElHour.textContent= openHour[i] + ': ' + this.storeCookies[i] + ' cookies';

    ulEl.appendChild(liElHour);
    total = total + this.storeCookies[i];

  }

  var totalLi = document.createElement('li');
  totalLi.textContent= 'Total ' + ': ' + total + ' cookies';
  ulEl.appendChild(totalLi);
  liEl.appendChild(ulEl);
  salesData.appendChild(liEl);


};

seaTacAirport.mySaleData();















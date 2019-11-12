'use strict';

var seattleLocation = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookieSale: 6.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

seattleLocation.soldCookiesEachHour = function () {
  return Math.floor((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus);
};

seattleLocation.getCookiesSoldEachHour = function () {
  for (var i = 0; i < 14; i++) {
    var cookies = this.soldCookiesEachHour();
    // console.log('cookies :', cookies);
    this.cookiesSoldEachHour.push(cookies);
    // console.log('test arr: ', this.cookiesSoldEachHour);
    this.totalCookies += cookies;
  }
};

seattleLocation.getCookiesSoldEachHour();
// console.log('cookiesSoldEachHour :', seattleLocation.cookiesSoldEachHour);
// console.log('totalCookies :', seattleLocation.totalCookies);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Title of Seattle location
var seattle = document.getElementById('seattle');
var seattleTitle = document.createElement('h2');
seattleTitle.textContent = seattleLocation.location;
seattle.appendChild(seattleTitle);

var seattleList = document.createElement('ul');
seattle.appendChild(seattleList);
for (var i = 0; i < seattleLocation.cookiesSoldEachHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + seattleLocation.cookiesSoldEachHour[i] + ' cookies';
  seattleList.appendChild(li);
  if (i === (13)) {
    li.textContent = 'Total: ' + seattleLocation.totalCookies + ' cookies';
  }
}

var tokyoLocation = {
  location: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookieSlae: 1.2,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

tokyoLocation.soldCookiesEachHour = function () {
  return Math.floor((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus);
};

tokyoLocation.getCookiesSoldEachHour = function () {
  for (var i = 0; i < 14; i++) {
    var cookies = this.soldCookiesEachHour();
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

tokyoLocation.getCookiesSoldEachHour();


var dubaiLocation = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookieSlae: 3.7,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

dubaiLocation.soldCookiesEachHour = function () {
  return Math.floor((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus);
};

dubaiLocation.getCookiesSoldEachHour = function () {
  for (var i = 0; i < 14; i++) {
    var cookies = this.soldCookiesEachHour();
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

dubaiLocation.getCookiesSoldEachHour();



var parisLocation = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookieSlae: 2.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

parisLocation.soldCookiesEachHour = function () {
  return Math.floor((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus);
};

parisLocation.getCookiesSoldEachHour = function () {
  for (var i = 0; i < 14; i++) {
    var cookies = this.soldCookiesEachHour();
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

parisLocation.getCookiesSoldEachHour();


var limaLocation = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookieSlae: 4.6,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

limaLocation.soldCookiesEachHour = function () {
  return Math.floor((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus);
};

limaLocation.getCookiesSoldEachHour = function () {
  for (var i = 0; i < 14; i++) {
    var cookies = this.soldCookiesEachHour();
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

limaLocation.getCookiesSoldEachHour();

console.log('seattle total :', seattleLocation.totalCookies);
console.log('tokyo total :', tokyoLocation.totalCookies);
console.log('dubai total :', dubaiLocation.totalCookies);


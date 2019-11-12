'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getNumCookiesEachHour(max, min) {
  return Math.floor((Math.random() * (max - min +1)) + min);
}

function getCookiesSalesReport(location) {
  for (var i = 0; i < 14; i++) {
    var cookies = getNumCookiesEachHour(location.maxCus, location.minCus);
    location.cookiesSoldEachHour.push(cookies);
    location.totalCookies += cookies;
  }
}

function createHourlySalesObj(hoursArr, salesArr) {
  var obj = [];
  for (var i = 0; i < hoursArr.length; i++) {
    obj.push({
      key: hoursArr[i],
      value: salesArr[i],
    });
  }
  return obj;
}


var seattleLocation = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookieSale: 6.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

getNumCookiesEachHour(seattleLocation.maxCus, seattleLocation.minCus);
getCookiesSalesReport(seattleLocation);

var seattleHourlySalesArr = createHourlySalesObj(hours, seattleLocation.cookiesSoldEachHour);
console.log('seattleHourlySalesArr :', seattleHourlySalesArr);
var seattle = document.getElementById('seattle');
var seattleTitle = document.createElement('h2');
seattleTitle.textContent = seattleLocation.location;
seattle.appendChild(seattleTitle);

var seattleList = document.createElement('ul');
seattle.appendChild(seattleList);
for (var i = 0; i < seattleHourlySalesArr.length; i++) {
  var li = document.createElement('li');
  li.textContent = seattleHourlySalesArr[i].key + ': ' + seattleHourlySalesArr[i].value + ' cookies';
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

getNumCookiesEachHour(tokyoLocation.maxCus, tokyoLocation.minCus);
getCookiesSalesReport(tokyoLocation);
var tokyoHourlySalesArr = createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour);

var tokyo = document.getElementById('tokyo');
var tokyoTitle = document.createElement('h2');
tokyoTitle.textContent = tokyoLocation.location;
tokyo.appendChild(tokyoTitle);

var tokyoList = document.createElement('ul');
tokyo.appendChild(tokyoList);
for (var j = 0; j < tokyoHourlySalesArr.length; j++) {
  var tokyoElem = document.createElement('li');
  tokyoElem.textContent = seattleHourlySalesArr[j].key + ': ' + tokyoHourlySalesArr[j].value + ' cookies';
  tokyoList.appendChild(tokyoElem);
  if (j === (13)) {
    tokyoElem.textContent = 'Total: ' + tokyoLocation.totalCookies + ' cookies';
  }
}


var dubaiLocation = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookieSlae: 3.7,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

getNumCookiesEachHour(dubaiLocation.maxCus, dubaiLocation.minCus);
getCookiesSalesReport(dubaiLocation);
var dubaiHourlySalesArr = createHourlySalesObj(hours, dubaiLocation.cookiesSoldEachHour);

var dubai = document.getElementById('dubai');
var dubaiTitle = document.createElement('h2');
dubaiTitle.textContent = dubaiLocation.location;
dubai.appendChild(dubaiTitle);

var dubaiList = document.createElement('ul');
dubai.appendChild(dubaiList);
for (j = 0; j < dubaiHourlySalesArr.length; j++) {
  var dubaiElem = document.createElement('li');
  dubaiElem.textContent = dubaiHourlySalesArr[j].key + ': ' + dubaiHourlySalesArr[j].value + ' cookies';
  dubaiList.appendChild(dubaiElem);
  if (j === (13)) {
    dubaiElem.textContent = 'Total: ' + dubaiLocation.totalCookies + ' cookies';
  }
}


var parisLocation = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookieSlae: 2.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

getNumCookiesEachHour(parisLocation.maxCus, parisLocation.minCus);
getCookiesSalesReport(parisLocation);
var parisHourlySalesArr = createHourlySalesObj(hours, parisLocation.cookiesSoldEachHour);

var paris = document.getElementById('paris');
var parisTitle = document.createElement('h2');
parisTitle.textContent = parisLocation.location;
paris.appendChild(parisTitle);

var parisList = document.createElement('ul');
paris.appendChild(parisList);
for (j = 0; j < parisHourlySalesArr.length; j++) {
  var parisElem = document.createElement('li');
  parisElem.textContent = parisHourlySalesArr[j].key + ': ' + parisHourlySalesArr[j].value + ' cookies';
  parisList.appendChild(parisElem);
  if (j === (13)) {
    parisElem.textContent = 'Total: ' + parisLocation.totalCookies + ' cookies';
  }
}


var limaLocation = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookieSlae: 4.6,
  cookiesSoldEachHour: [],
  totalCookies: 0,
};

getNumCookiesEachHour(limaLocation.maxCus, limaLocation.minCus);
getCookiesSalesReport(limaLocation);
var limaHourlySalesArr = createHourlySalesObj(hours, limaLocation.cookiesSoldEachHour);

var lima = document.getElementById('lima');
var limaTitle = document.createElement('h2');
limaTitle.textContent = limaLocation.location;
lima.appendChild(limaTitle);

var limaList = document.createElement('ul');
lima.appendChild(limaList);
for (j = 0; j < limaHourlySalesArr.length; j++) {
  var limaElem = document.createElement('li');
  limaElem.textContent = limaHourlySalesArr[j].key + ': ' + limaHourlySalesArr[j].value + ' cookies';
  limaList.appendChild(limaElem);
  if (j === (13)) {
    limaElem.textContent = 'Total: ' + limaLocation.totalCookies + ' cookies';
  }
}


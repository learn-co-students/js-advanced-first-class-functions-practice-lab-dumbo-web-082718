// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver){
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue
  })
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};


const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

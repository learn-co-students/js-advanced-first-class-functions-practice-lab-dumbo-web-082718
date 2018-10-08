// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {console.log(driver.name)});
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {console.log(driver.name)}})}

function driversByRevenue (drivers) {
  let newarray = drivers.slice();
  const sorted = function (a, b) {
    return (a.revenue - b.revenue);
  }
  newarray.sort(sorted)
  return newarray;
}

function driversByName (drivers) {
  let newarray = drivers.slice();
  const sorted = function (a, b) {
    debugger
    return (a.name.localeCompare(b.name));
  };
  newarray.sort(sorted);
  return newarray;
}

function totalRevenue(drivers) {
  let total = 0
  drivers.forEach(function(driver) {
    total += driver.revenue;
  })
  return total;
}

function averageRevenue(drivers) {
  let total = 0
  drivers.forEach(function(driver) {
    total += driver.revenue;
  })
  return total / drivers.length;
}

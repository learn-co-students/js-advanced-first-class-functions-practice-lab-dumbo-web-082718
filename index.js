// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  let filtered = drivers.filter(x => x.hometown === location);
  logDriverNames(filtered);
}

function driversByRevenue(drivers){
  const newObj = [...drivers];
  return newObj.sort((a,b) => a.revenue - b.revenue);
}

function driversByName(drivers){
  const newObj = [...drivers];
  return newObj.sort((a,b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers){
  return drivers.reduce(function(acc,curr){
    return acc + curr.revenue;
  },0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}

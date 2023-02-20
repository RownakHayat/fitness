const addTodb = (e) => {
    let storeTime;
    const activity = document.getElementById('active').value;
    const breaktime = document.getElementById('break-time').value;

   console.log(activity, breaktime);
    const sotoredTime = localStorage.getItem('break-time', 'active');
    if (sotoredTime) {
        storeTime = JSON.parse(sotoredTime)
    }

    else {

        storeTime = {}
    }

    const quantity = storeTime[e];
    if (quantity) {

        const newquantity = parseInt(quantity) + 1;
        storeTime[e] = newquantity;

    }

    else {

        storeTime[e] = 1;
        
    }

    localStorage.setItem('break-time','active', JSON.stringify(storeTime));
  
   }








export {
    addTodb,
  
    
}
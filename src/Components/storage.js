const addTodb = (e) => {
    let storeTime;

    const sotoredTime = localStorage.getItem('break-time');
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
        localStorage.setItem('break-time', JSON.stringify(storeTime));
    }


   






}

export {
    addTodb
   
}
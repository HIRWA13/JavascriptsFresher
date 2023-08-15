const fetcData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved successfully')
        }, 2000);
    });
}

async function promise(){
    console.log('fetching data...');
    const result = await fetcData();
    console.log(result);
}

promise();
function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a + b);
    }, 4000);
    })
}

async function resSoma(a, b, c) {
    let x = somaComDelay(a, b);
    let Y = c;

    return await x + Y;
}

resSoma(1, 2, 3).then(value => console.log(value));


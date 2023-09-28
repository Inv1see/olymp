let max_x = 0;
let max_p = 0;

for (let x = 1; x <= 80; x++) {
    for (let p = 2; p <= 17; p++) {
        const sum = parseInt(x.toString(p), p) + parseInt(x.toString(p), p);
        const result = parseInt((x + "0"), p);

        if (sum === result) {
            max_x = x;
            max_p = p;
        }
    }
}

const answer = max_x.toString() + max_p.toString() - 25;
console.log(answer); // 99
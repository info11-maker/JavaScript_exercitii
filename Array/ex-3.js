let styles = ["Jazz", "Bluz"]
console.log(styles);

const newArr = styles.push("Rock & Roll");
console.log(styles);

const newArr1 = styles.splice(1, 1, "Clasic");
console.log(styles);

const newArr2 = styles.shift("");
console.log(styles);

const newArr3 = styles.unshift("Rap", "Raggy");
console.log(styles);
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Fail due to no numbers");
  return;
}

let time = 0;
for (const element of args) {
  if (Math.sign(element) === 1 && isNaN(element) !== 1) {
    setTimeout(() => {
      process.stdout.write(`\x07 ${element}`);
    }, time);
    time += 2000;
  }
}  


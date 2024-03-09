var promp =  require("prompt-sync")();

let value1 = parseInt(promp("ENTER THE FIRST NUMBER..."));
let value2 = parseInt(promp("ENTER THE LAST NUMBER..."));

let operate = (promp("ENTER THE OPERATOR (+,-,*,/)"));

if (operate = "+"){
    console.log(`YOUR ANSWER IS ${value1} ${operate} ${value2} = ${value1+value2}`);
}

if (operate = "-"){
    console.log(`YOUR ANSWER IS ${value1} ${operate} ${value2} = ${value1-value2}`);
}

if (operate = "*"){
    console.log(`YOUR ANSWER IS ${value1} ${operate} ${value2} = ${value1*value2}`);
}

if (operate = "/"){
    console.log(`YOUR ANSWER IS ${value1} ${operate} ${value2} = ${value1/value2}`);
}else {
    console.log("PLEASE SELECT A NUMBER");
}

export{};
import { Person } from './person';
import readline from "readline";

let pete: Person = {
    name: "pete", 
    id: 123n, // it's a bigint
    years: 30
    // data: new Uint8Array([0xDE, 0xAD, 0xBE, 0xEF]);
};

console.log(pete)

let bytes = Person.toBinary(pete);
pete = Person.fromBinary(bytes);

console.log(pete)

pete = Person.fromJsonString('{"name":"pete", "id":"123", "years": 30}')

console.log(pete)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function ask() {
     rl.question("What kind of person do ypu want to create? ", function(json) {
        console.log(`Received '${json}'`)
        if (json === '') {
            rl.close();
        }   else {
            const someone = Person.fromJsonString(json)
            console.log(someone)
            ask()
        }
    }); 
}

ask()



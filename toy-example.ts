import { Person } from './person';
import * as readline from "readline";

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

console.log(
    `Some valid examples for json input:
    {"name":"pete", "id":"123", "years": 30}
    {"name":"pete", "id":"1234567891011121314", "years": 30, "picture": "wertzuiojhgcvbnkoiuztss"}
    {"name":"pete", "id":"1234", "years": 90, "nickname": "P"}`)

function ask() {
     rl.question("What kind of person do you want to create? ", function(json) {
        console.log(`Received '${json}'`)
        if (json === '') {
            console.log("\nBYE BYE !!!");
            process.exit(0);
        } else {
            try {
                const someone = Person.fromJsonString(json)
                console.log(someone)
            }
            catch (ex) {
                console.error(ex)
            }
            ask()
        }
    }); 
}

ask()



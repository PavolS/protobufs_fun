import { Person } from './person';
import { performance } from 'perf_hooks'
import { assert } from 'console';

const pete0: Person = {
    name: "pete", 
    id: 1234567891011121314n, // it's a bigint
    years: 30
    // data: new Uint8Array([0xDE, 0xAD, 0xBE, 0xEF]);
};

let pete = pete0

console.log(pete)

// let pete_json_str = JSON.stringify(pete) --> cannot work with bigint

const pete_json_str = '{"name":"pete", "id":"1234567891011121314", "years": 30, "picture": "wertzuiojhgcvbnkoiuztss"}'

console.log(pete_json_str)

const N = 1e5

let start = performance.now();
for (let i=0; i<N; ++i) {
    pete = JSON.parse(pete_json_str)
   // assert( pete0.id === pete.id)
}
let end = performance.now();
console.log(`JSON needed ${end-start}ms for ${N} decodes`)

start = performance.now();
for (let i=0; i<N; ++i) {
    pete = Person.fromJsonString(pete_json_str)
    //assert( pete0.id === pete.id)
}
end = performance.now();
console.log(`PersonMsg needed ${end-start}ms for ${N} (text) decodes`)

const pete_proto_bytes = Person.toBinary(pete)
start = performance.now();
for (let i=0; i<N; ++i) {
    pete = Person.fromBinary(pete_proto_bytes)
   // assert( pete0.id === pete.id)
}
end = performance.now();
console.log(`PersonMsg needed ${end-start}ms for ${N} (binary) decodes`)
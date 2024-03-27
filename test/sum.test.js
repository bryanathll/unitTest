import {sum} from "../src/sum.js";

test("test sum function 1",()=>{
    const result = sum(1, 2)

    expect(result).toBe(3);
});
 
test("test sum function 2",()=>{
    const result = sum(3, 2)

    expect(result).toBe(5);
});
 
test("test sum function 3",()=>{
    const result = sum(3, 5)

    expect(result).toBe(8);
});
 
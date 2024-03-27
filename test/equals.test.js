test("test to be" ,()=>{
    const name = "Brian";
    const hello = `Hello ${name}`;

    expect(hello).toBe("Hello Brian");
});


test("test toEqual",()=>{
    let person = {id: 717};
    Object.assign(person, {name: "brian"});

    expect(person).toEqual({id: 717, name: "brian"});
})

import hello from "../utils/hello.js";

Item("Should say Allison", ()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Allison");
})
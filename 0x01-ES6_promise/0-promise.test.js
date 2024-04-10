import getResponseFromAPI from "./0-promise.js";

test('if response is instance of pronice',()=>{
    const response = getResponseFromAPI();
    expect(response instanceof Promise).toBe(true);
})
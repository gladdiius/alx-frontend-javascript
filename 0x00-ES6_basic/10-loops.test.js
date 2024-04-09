import appendToEachArrayValue from './10-loops.js';

test('test if string is correctly appended',()=>{
    expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toEqual([ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ])
})
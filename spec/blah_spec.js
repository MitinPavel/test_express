// Run: ./node_modules/jasmine-node/bin/jasmine-node  spec/
describe("Jasmine", function() {
  it("makes testing JavaScript awesome!", function() {
    var foo = 0;                  // set up the world
    foo++;                         // call your application code
    expect(foo).toEqual(1);
  });
});


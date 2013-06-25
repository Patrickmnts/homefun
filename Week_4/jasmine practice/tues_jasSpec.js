//Hello World functions
describe("Hello World", function(){
  it("says hello", function(){
    expect(helloWorld()).toEqual("Hello world!");
  });

  it("should contain world", function(){
    expect(helloWorld()).toContain("world");
  });
});

//Creates a new matcher "toBeDivisibleByTwo"
describe("Hello world", function(){
  beforeEach(function(){
    this.addMatchers({
      toBeDivisibleByTwo: function() {
        return(this.actual % 2) === 0;
      }
    });
  });
  it('is divisible by 2', function(){
    expect(gimmeANumber()).toBeDivisibleByTwo();
  });
});


// This will Make a fake person solely for testing purposes
//then spy on this fake person's sayHello() method.
describe("Person", function(){
  it("calls the sayHello() function", function(){
    var fakePerson = new Person();
    spyOn(fakePerson, "sayHello");
    fakePerson.helloSomeone("world");

  expect(fakePerson.sayHello).toHaveBeenCalled();
  });
});

// Another spy
describe("Person", function(){
  it("greets the world", function(){
    var fakePerson = new Person();
    spyOn(fakePerson, "helloSomeone");
    fakePerson.helloSomeone("world");

  expect(fakePerson.helloSomeone).toHaveBeenCalledWith("world");

// To test the inverse use the .not
  expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith("WHAA");
  });
});

//Testing spying on a function that I modify
describe("Person", function() {
  it("says hello", function() {
    var fakePerson = new Person();
    fakePerson.sayHello = jasmine.createSpy("Say-hello spy").andReturn("ello ello");
    fakePerson.helloSomeone("world");

  expect(fakePerson.sayHello).toHaveBeenCalled();
  });
});

fakePerson.sayHello = jasmine.createSpy('"Say hello" spy').andReturn("ello ello");





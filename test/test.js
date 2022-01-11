describe("Object creation tests", () => {
  it("Validate the correct creation of a person with name: 'Vladimir', nickname: 'Francisco Díaz' and age: 21", () => {
    expect(() => {
      new Person("Vladimir", "Francisco Díaz", 21);
    }).to.not.throw();
  });
  it("Validate the incorrect creation of a person with name: '&&&', nickname: '&*^%' and age: 1", () => {
    expect(() => {
      new Person("&&&", "&*^%", 1);
    }).to.throw();
  });
  it("Validate the incorrect creation of a person with name: 'a', nickname: 'Francisco Díaz' and age: 21", () => {
    expect(() => {
      new Person("a", "Francisco Díaz", 21);
    }).to.throw();
  });
  it("Validate the incorrect creation of a person with name: 'Vladimir', nickname: 'a' repeated 200 times and age: 21", () => {
    expect(() => {
      new Person("Vladimir", "a".repeat(200), 21);
    }).to.throw();
  });
  it("Validate the incorrect creation of a person with name: 'Vladimir', nickname: 'Francisco Díaz' and age: 121", () => {
    expect(() => {
      new Person("Vladimir", "Francisco Díaz", 121);
    }).to.throw();
  });
  it("Validate the incorrect creation of a person with name: 'Vladimir', nickname: 'Francisco Díaz' and age: 1", () => {
    expect(() => {
      new Person("Vladimir", "Francisco Díaz", 1);
    }).to.throw();
  });
  it("Validate the incorrect creation of a person with name: 'Vladimi$', nickname: 'Francisco Díaz' and age: 21", () => {
    expect(() => {
      new Person("Vladimi$", "Francisco Díaz", 21);
    }).to.throw();
  });
});

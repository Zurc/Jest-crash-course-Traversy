const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name....");

describe("Cheching Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 4", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite to toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy is the opposite of toBeTruthy

// toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy;
  expect(functions.checkValue(0)).toBeFalsy;
  expect(functions.checkValue(undefined)).toBeFalsy;
});

// this fails because toBe is not for Object types
// it's only for primitives
// test('User should be Choco Late object', () => {
//   expect(functions.createUser()).toBe({ firstName: 'Choco', lastName: 'Late'});
// });

// toEqual
test("User should be Choco Late object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Choco",
    lastName: "Late"
  });
});

// Less than and greater than
test("should be under 1600", () => {
  // the logic could be here as well (|| other file)
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team ", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames ", () => {
  const usernames = ["Admin", "Choco", "Cuqui"];
  expect(usernames).toContain("Admin");
});
test("usernames should be an Array ", () => {
  const usernames = ["Admin", "Choco", "Cuqui"];
  expect(usernames).toBeInstanceOf(Array);
});

// working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

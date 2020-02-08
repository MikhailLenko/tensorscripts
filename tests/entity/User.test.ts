import {User} from "../../src/entity/user";

describe('User', () => {
	let user = new User();
	describe("Constructor", () => {
		describe("Without arguments", () => {
			it("Instantiates a User", () => {
				expect(new User()).toBeInstanceOf(User)
			});

			it("Instantiates a User with all properties set to null", () => {
				let user = new User();
				expect(user.id).toBeNull()
				expect(user.firstName).toBeNull()
				expect(user.lastName).toBeNull()
				expect(user.age).toBeNull()
			});
		});

		describe("With a single argument", () => {
			it("Instantiates a User", () => {
				expect(new User("Cat")).toBeInstanceOf(User)
			});

			it("Instantiates a User with all properties set to null except firstName", () => {
				let user = new User("Cat");
				expect(user.id).toBeNull()
				expect(user.firstName).toBe("Cat")
				expect(user.lastName).toBeNull()
				expect(user.age).toBeNull()
			});
		});

		describe("With two arguments", () => {
			it("Instantiates a User", () => {
				expect(new User("Cat", "Dog")).toBeInstanceOf(User)
			});

			it("Instantiates a User with all properties set to null except firstName and lastName", () => {
				let user = new User("Cat", "Dog");
				expect(user.id).toBeNull()
				expect(user.firstName).toBe("Cat")
				expect(user.lastName).toBe("Dog")
				expect(user.age).toBeNull()
			});
		});

		describe("With three arguments", () => {
			it("Instantiates a User", () => {
				expect(new User("Cat", "Dog", 22)).toBeInstanceOf(User)
			});

			it("Instantiates a User with all properties set to null except firstName, lastName and age", () => {
				let user = new User("Cat", "Dog", 22);
				expect(user.id).toBeNull()
				expect(user.firstName).toBe("Cat")
				expect(user.lastName).toBe("Dog")
				expect(user.age).toBe(22)
			});
		});

		describe("With four arguments", () => {
			it("Instantiates a User", () => {
				expect(new User("Cat", "Dog", 22, 1)).toBeInstanceOf(User)
			});

			it("Instantiates a User with all properties having a value", () => {
				let user = new User("Cat", "Dog", 22, 1);
				expect(user.id).toBe(1)
				expect(user.firstName).toBe("Cat")
				expect(user.lastName).toBe("Dog")
				expect(user.age).toBe(22)
			});
		});

	});
});
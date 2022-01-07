import { objectType } from "nexus";

// User
export const User = objectType({
  name: "User",
  definition(t) {
	  t.id("id")
	  t.string('firstName')
	  t.string("lastName")
  }
});

// Board
export const Board = objectType({
	name: "Board",
	definition(t) {
		t.id("id")
		t.string("name")
		t.string("description")
	}
})

// Item
export const Item = objectType({
	name: "Item",
	definition(t) {
		t.id("id")
		t.string("content")
	}
})

// Vote
export const Vote = objectType({
	name: "Vote",
	definition(t) {
		t.id("itemId")
		t.id("userId")
	}
})

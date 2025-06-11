import { expect, test } from "vitest";
import { getPropertyFromItem } from "@/util/helpers";

test("test getPropertyFromItem", async () => {
  const item = {
    name: "Name",
    description: "Description",
  };
  expect(getPropertyFromItem(item, "name", null)).toBe("Name");
});

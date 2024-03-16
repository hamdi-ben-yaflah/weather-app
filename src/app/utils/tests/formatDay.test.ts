import { formatDay } from "../formatDay";

describe("formatDay", () => {
  it('should return "Today" if the date is today', () => {
    const unix = Date.now() / 1000;
    expect(formatDay(unix)).toBe("Today");
  });

  it("should return the weekday if the date is not today", () => {
    const unix = (Date.now() - 24 * 60 * 60 * 1000) / 1000; // 1 day ago
    const date = new Date(unix * 1000);
    const expected = date.toLocaleDateString(undefined, { weekday: "long" });
    expect(formatDay(unix)).toBe(expected);
  });
});

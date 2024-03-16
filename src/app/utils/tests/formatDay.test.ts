import { formatDay } from "../formatDay";

describe("formatDay", () => {
  it("should return 'Today' if the date is today", () => {
    const now = new Date();
    const today = Math.floor(now.getTime() / 1000);
    jest.spyOn(global, "Date").mockImplementation(() => now);
    expect(formatDay(today)).toBe("Today");
  });

  it("should return the weekday name if the date is not today", () => {
    const unix = 1627833600; // July 2, 2021 (Friday)
    const friday = new Date(unix * 1000);
    jest.spyOn(global, "Date").mockImplementation(() => friday);
    expect(formatDay(unix)).toBe("Friday");
  });

  it("should return the weekday name for a different date", () => {
    const unix = 1627919999; // July 3, 2021 (Saturday)
    const saturday = new Date(unix * 1000);
    jest.spyOn(global, "Date").mockImplementation(() => saturday);
    expect(formatDay(unix)).toBe("Saturday");
  });
});

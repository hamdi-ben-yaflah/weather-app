import { formatTime } from "../formatTime";

describe("formatTime", () => {
  it("should format the time correctly", () => {
    const mockDate = new Date(2021, 7, 1, 0, 0, 0); // August 1, 2021 00:00:00
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    const unix = 1627833600;
    const formattedTime = formatTime(unix);
    expect(formattedTime).toBe("12:00 AM");

    global.Date = Date;
  });
});

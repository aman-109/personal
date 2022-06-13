
import convertTime from "./timeConversion";


test ("converting time into string",()=>{
    expect(convertTime(5200)).toBe("5 Seconds")
    expect(convertTime(60000)).toBe("1 Minute")
    expect(convertTime(180000)).toBe("3 Minutes")
    expect(convertTime(200000)).toBe("3 Minutes 20 Seconds")
    expect(convertTime(3600000)).toBe("1 Hour")
})
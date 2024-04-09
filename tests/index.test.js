const { fetchData } = require("../src/fetch.js");
const { setRegionUrl, setCountryUrl } = require("../src/urlSetters.js");

test("GET HTTP request", async () => {
  const res = await fetchData(setCountryUrl("russia"));
  expect(res.ok).toBeTruthy();
});

test("the fetch fails with a Resource not found", async () => {
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("Resource not found");
  }
});

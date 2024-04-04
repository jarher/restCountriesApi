async function fetchData(url) {
  const res = await fetch(url, {
    "Content-Type": "application/json",
    method: "GET",
  });
  return res.json();
}

exports.fetchData = fetchData;

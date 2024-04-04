async function fetchData(url) {
  const res = await fetch(url, {
    "Content-Type": "application/json",
    method: "GET",
  });
  if (res.status == 404) {
    throw new Error("Resource Not Found");
  } else {
    return res.json();
  }
}

exports.fetchData = fetchData;

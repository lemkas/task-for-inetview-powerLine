class Cars {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  async edit(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }
}

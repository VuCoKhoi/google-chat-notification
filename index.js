const args = process.argv
  .filter((item) => item.includes("--"))
  .reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    return {
      ...acc,
      [key.replace("--", "")]: value,
    };
  }, {});

console.log("args", args);

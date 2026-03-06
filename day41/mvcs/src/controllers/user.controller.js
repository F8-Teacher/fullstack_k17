module.exports = {
  index: (req, res) => {
    //request
    //   console.log(req.url);
    //   console.log(req.method);
    //   console.log(req.headers["x-api-key"]);
    //   console.log(req.get("x-api-key"));
    const keyword = req.query.keyword;
    res.send(`
    <h1>Keyword: ${keyword}</h1>
    <form method="post">
        <input type="text" name="name" /> <br/>
        <input type="email" name="email" /> <br/>
        <button>Submit</button>
    </form>
    `);
  },
  find: (req, res) => {
    res.send(`<h1>Chi tiết: ${req.params.id}</h1>`);
  },
  create: (req, res) => {
    console.log(req.body);
    res.send("Create user");
  },
};

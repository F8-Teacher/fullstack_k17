module.exports = {
  index: (req, res) => {
    console.log(req.headers["cookie"]);

    //   res.status(404);
    //   res.set("x-api-key", "ahihi");
    //   res.redirect("/");
    //   res.json({
    //     name: "SP 1",
    //     price: 12000,
    //   });
    //   res.status(301);
    //   res.set("Location", "/");
    res.set("Set-Cookie", "email=a@mail.com;path=/;httpOnly;max-age=3600");
    res.send("");
  },
};

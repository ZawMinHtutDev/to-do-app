const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    const data = [
        { item: "Drink Milk" },
        { item: "Sleep More" },
        { item: "Kick some ass in PUBG or get my ass kicked" },
    ];
    app.get("/todo", (req, res) => {
        res.render("todo", { todos: data });
    });

    app.post("/todo", urlEncoded, (req, res) => {
        data.push(req.body);
        res.json(req.body);
    });

    app.delete("/todo/:item", (req, res) => {
        data.splice(data.indexOf(req.params.item.replace(/-/g," ")),1);
        res.json(data);
    });
};

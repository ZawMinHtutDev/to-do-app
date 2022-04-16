module.exports = function (app) {
    app.get("/todo", (req, res) => {
        res.render("todo");
    });
}
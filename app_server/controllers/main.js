const index = (req, res, next) => {
  res.render("index", { title: "Express", nama: "Demon" });
};

const demo = (req, res, next) => {
  res.render("index", { title: "Express", nama: "Demon" });
};

const show = (req, res, next) => {
  res.render("index", { title: "Express", nama: "Demon" });
};

const edit = (req, res, next) => {
  res.render("index", { title: "Express", nama: "Demon" });
};

const destroy = (req, res, next) => {
  res.render("index", { title: "Express", nama: "Demon" });
};

module.exports = { index, demo, show, edit, destroy };

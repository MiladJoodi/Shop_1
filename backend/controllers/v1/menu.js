const menuModel = require('../../models/menu');

exports.getAll = async (req, res) => {
  const menus = await menuModel.find().lean();

  for (const menu of menus) {
    const submenus = [];
    for (let i = 0; i < menus.length; i++) {
      const m = menus[i];
      if (m.parent?.equals(menu._id)) {
        submenus.push(menus.splice(i, 1)[0]);
        i = i - 1;
      }
    }
    menu.submenus = submenus;
  }

  return res.json(menus);
};

exports.create = async (req, res) => {
  const { href, title, parent } = req.body;

  const menu = await menuModel.create({ title, href, parent });

  return res.status(201).json(menu);
};

exports.getAllTopbarLinks = async (req, res) => {
  const menus = await menuModel.find().lean();
  let topbarLinks = []

  for(const menu of menus) {
    if(menu.parent) {
      topbarLinks.push(menu)
    }
  }

  res.json(topbarLinks)
}
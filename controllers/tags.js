const Tag = require("../models/Tag")

const list = async (req, res) => {
  try {
    await Tag.query().then(result => res.json(result))
  } catch (error) {
    res.json({ error: error.message })
  }

}

module.exports = list
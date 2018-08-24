module.exports = app => {
  app.post("/api/stripe", (req, res) => {
    res.json({
      ok: true
    })
  })
}

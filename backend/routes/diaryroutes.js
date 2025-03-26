const { Router } = require("express");

const DiaryEntry = require("../models/diaryentry");

const router = Router();

router.get("/public", async (req, res) => {
  try {
    const entry = await DiaryEntry.find({ isPrivate: false });
    res.send(entry);
  } catch (error) {
    console.log(error);
    res.send("No entry");
  }
});

router.get("/private", async (req, res) => {
  const entry = await DiaryEntry.find({ isPrivate: true });
  res.send(entry);
});

router.post("/", async (req, res) => {
  const {
    date,
    content,
    mood,
    salutation,
    signature,
    email,
    title,
    isPrivate,
  } = req.body;
  try {
    const diaryEntry = await DiaryEntry.create({
      date,
      content,
      mood,
      salutation,
      signature,
      email,
      title,
      isPrivate,
    });
    res.send(diaryEntry);
  } catch (error) {
    console.log(error);
    res.send("Error in creating entry");
  }
});

module.exports = router;

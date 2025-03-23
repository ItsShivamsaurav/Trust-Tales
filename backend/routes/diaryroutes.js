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

router.post("/public", async (req, res) => {
  const { date, entry, mood, salutation, signature, email, title } = req.body;
  try {
    const diaryEntry = await DiaryEntry.create({
      date,
      entry,
      mood,
      salutation,
      signature,
      email,
      title,
      isPrivate: false,
    });
    res.send(diaryEntry);
  } catch (error) {
    console.log(error);
    res.send("Error in creating entry");
  }
});


router.post("/private", async (req, res) => {
  const { date, entry, mood, salutation, signature, email, title } = req.body;
  try {
    const diaryEntry = await DiaryEntry.create({
      date,
      entry,
      mood,
      salutation,
      signature,
      email,
      title,
      isPrivate: true,
    });
    res.send(diaryEntry);
  } catch (error) {
    console.log(error);
    res.send("Error in creating entry");
  }
});

module.exports = router;

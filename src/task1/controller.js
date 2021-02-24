const fs = require("fs");
const csv = require("fast-csv");
const saveToDB = require("./saveToDb");
const { policyInfo, userSchema } = require("./schema/schemas");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let csvData = [];
    let path = __basedir + "/resources/" + req.file.filename;

    await fs
      .createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        csvData.push(row);
      })
      .on("end", async () => {
        const response = await saveToDB(csvData);

        res.status(201).json(response);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalame,
    });
  }
};

const findOne = async (req, res, next) => {
  try {
    const {
      query: { username },
    } = req;

    if (!username || username === "") {
      throw new Error("username is mandatory");
    }

    const userResponse = await userSchema.findOne({ firstname: username });

    const { _id: userId } = userResponse || {};
    let data;
    if (userId) {
      data = await policyInfo.find({ userId });
    }

    if (!userId || !data) {
      return res.sendStatus(404);
    }
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

const byuser = async (req, res, next) => {
  try {
    const data = await userSchema.aggregate([
      {
        $lookup: {
          from: "policyInfoDetails",
          localField: "_id",
          foreignField: "userId",
          as: "policyInfo",
        },
      },
    ]);

    if (data === null) {
      return res.sendStatus(404);
    }
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { upload, findOne, byuser };

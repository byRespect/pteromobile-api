const { Schema, default: mongoose } = require("mongoose");

const userDataSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      minLength: 10,
    },
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: ["CLIENT", "SERVER"],
        message: "{VALUE} is not supported.",
      },
    },
    url: {
      type: String,
      required: true,
      minLength: 10,
    },
    key: {
      type: String,
      required: true,
      minLength: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userData", userDataSchema);

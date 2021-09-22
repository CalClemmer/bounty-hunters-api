import mongoose, { Schema } from "mongoose";

const hunterSchema = new Schema({
  name: String,
  origin: String,
});

const bountySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  client: String,
  lastSeen: String,
  wantedFor: {
    type: String,
    minlength: 10,
    maxlength: 200,
  },
  reward: {
    type: Number,
    min: 1000,
    max: 1_000_000,
  },
  captured: {
    type: Boolean,
    default: false,
  },
  ship: String,
  // this is the only one that's plural and that's cuz it's an array
  hunters: [hunterSchema],
  // this is embedded: hunters: [hunterSchema]
  // this is reference: hunters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hunter" }],
});

const Bounty = mongoose.model("Bounty", bountySchema);

export default Bounty;

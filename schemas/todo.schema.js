import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  doneAt: {
    type: Date,
    required: false,
  },
});

// 프론트엔드 서빙을 위한 코드입니다. 모르셔도 괜찮아요!
TodoSchema.virtual("todoId").get(function () {
  return this._id.toHexString();
});
TodoSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model("Todo", TodoSchema);

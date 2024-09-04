import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
      "mongodb+srv://Nter99:choi6815!@express-mongo.rcxcy.mongodb.net/?retryWrites=true&w=majority&appName=express-mongo",
      {
        dbName: "todo_memo", // todo_memo 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(`MongoDB Error: ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB Error: ${err}`);
});

export default connect;

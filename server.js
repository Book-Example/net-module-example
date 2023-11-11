// net 모듈을 추가 합니다.
const net = require("net");

// createServer method 를 이용해 TCP Server 를 생성합니다.
const server = net.createServer((socket) => {
  // data 라는 식별자로 Client 에서 오는 값을 받습니다.
  socket.on("data", (data) => {
    console.log("Form client:", data.toString());
  });
  // close 는 net 모듈에 등록된 Keyword 로 Client 에서 Socket 을 닫을 때 응답합니다.
  socket.on("close", () => {
    console.log("client disconnected.");
  });
  // write method 를 이용해 Server 에서 Client 로 메세지를 전달합니다.
  socket.write("welcome to server");
});

server.on("error", (error) => {
  console.log("err" + error);
});

// 5000 번 Port 를 열고 기다립니다.
server.listen(5000, () => {
  console.log("listening on 5000");
});

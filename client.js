const net = require("net");

// connect method 를 사용해 5000 번 Port 의 Server 에 접속을 시도합니다.
const socket = net.connect({ port: 5000 });
socket.on("connect", () => {
  console.log("connected to server!");

  // 1초 간격으로 서버에 "Hello" 메세지를 요청합니다.
  setInterval(() => {
    socket.write("Hello.");
  }, 1000);
});

// 'data' 식별자로 Server 에서 오는 데이터를 수신합니다.
socket.on("data", (chunk) => {
  console.log("From Server:" + chunk);
});

// Server 와의 연결이 끊길 때 응답합니다.
socket.on("end", () => {
  console.log("disconnected.");
});

// 연결이 지연될 때 출력됩니다.
socket.on("error", (error) => {
  console.log(error);
});

socket.on("timeout", () => {
  console.log("connection timeout.");
});

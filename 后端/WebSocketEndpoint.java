package servlet;

import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint("/websocket")
public class WebSocketEndpoint {

    static boolean isChange=false;



    @OnOpen
    public void onOpen(Session session) {
        System.out.println("WebSocket opened: " + session.getId());
    }

    @OnMessage
    public void onMessage(String message, Session session) {
        // 处理收到的消息
        System.out.println("Message from " + session.getId() + ": " + message);
    }

    // 其他方法，如 @OnClose, @OnError，用于处理连接关闭和错误

    // 可以在后端的其他地方调用下面这样的方法向前端发送消息
    // session.getBasicRemote().sendText("Hello, client!");
}

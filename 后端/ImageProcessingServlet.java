package servlet;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/process-image")
public class ImageProcessingServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // 读取图片文件
        Path imagePath = Paths.get("D:/CBDtest/b.png");
        byte[] imageData = Files.readAllBytes(imagePath);

        // 设置响应的内容类型为图片
        response.setContentType("image/png");
        // 写入图片数据到响应
        response.getOutputStream().write(imageData);
    }
}


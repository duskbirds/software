package servlet;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Part;

@WebServlet("/upload-image")
@MultipartConfig
public class UploadImageServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            // 获取上传的文件部分
            Part filePart = request.getPart("image");
            // 将文件保存到服务器端
            Path filePath = Files.createTempFile("uploaded-image", ".png");
            Files.copy(filePart.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // 返回图片的 URL
            String imageUrl = "/show-image?path=" + filePath.toString();
            response.getWriter().write("{\"imageUrl\": \"" + imageUrl + "\"}");
        } catch (Exception e) {
            response.getWriter().write("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
}

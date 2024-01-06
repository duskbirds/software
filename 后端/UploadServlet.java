package servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import jakarta.servlet.annotation.WebServlet;

import java.io.IOException;


@MultipartConfig
@WebServlet("/upload")
public class UploadServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //1.从请求对象中，读取出Part对象

        Part part =req.getPart("a");
        //2.读取到Part 对象中的一些参数
        System.out.println(part.getSubmittedFileName()); // 上传文件真实的文件名
        System.out.println(part.getContentType()); // 文件的类型
        System.out.println(part.getSize()); // 文件的大小

        part.write("D:\\CBDtest\\a.png");

        try {
            // 提供exe文件的路径
            String exePath = "E:\\CBDNet-pytorch-master\\dist\\predict\\predict.exe";

            // 使用ProcessBuilder启动exe
            ProcessBuilder processBuilder = new ProcessBuilder(exePath);

            // 启动进程
            Process process = processBuilder.start();

            // 你可以通过调用waitFor等待进程结束
            int exitCode = process.waitFor();

            // 打印退出码
            Thread.currentThread().sleep(5000);
            System.out.println("退出码: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        WebSocketEndpoint WebSocketEndpoint=new WebSocketEndpoint();
        WebSocketEndpoint.isChange=true;


        //4.返回一个响应，通知用户上传成功
        //resp.getWriter().write("upload OK !");



    }
}
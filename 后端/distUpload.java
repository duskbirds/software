package servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import java.awt.*;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import jakarta.servlet.annotation.WebServlet;

import java.io.IOException;


@MultipartConfig
@WebServlet("/upload1")
public class distUpload extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //1.从请求对象中，读取出Part对象

        System.out.println("6");

        String picPatin="E:\\dist\\output\\stage_1_restore_output\\restored_image\\ab.png";
        String picFromPatin="D:\\CBDtest\\a.png";

        FileInputStream fis=new FileInputStream(picFromPatin);
        FileOutputStream fos=new FileOutputStream(picPatin);

        int len;
        while((len=fis.read())!=-1)
        {
            fos.write(len);
        }



        try {
            // 提供exe文件的路径
            String exePath = "E:\\dist\\run.exe";

            // 使用ProcessBuilder启动exe
            ProcessBuilder processBuilder = new ProcessBuilder(exePath);

            // 启动进程
            Process process = processBuilder.start();

            // 你可以通过调用waitFor等待进程结束
            int exitCode = process.waitFor();

            // 打印退出码
            Thread.currentThread().sleep(5000);
            System.out.println("dist退出码: " + exitCode);
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        WebSocketEndpoint WebSocketEndpoint=new WebSocketEndpoint();
        WebSocketEndpoint.isChange=true;


        //4.返回一个响应，通知用户上传成功
        //resp.getWriter().write("upload OK !");



    }
}
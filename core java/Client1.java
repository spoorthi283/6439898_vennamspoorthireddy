// Client.java
import java.net.*;
import java.io.*;
public class Client {
    public static void main(String[] args) throws IOException {
        Socket s = new Socket("localhost", 1234);
        BufferedReader in = new BufferedReader(new InputStreamReader(s.getInputStream()));
        PrintWriter out = new PrintWriter(s.getOutputStream(), true);
        System.out.println("Server says: " + in.readLine());
        out.println("Hi Server!");
        s.close();
    }
}
public class VirtualThreadExample {
    public static void main(String[] args) {
        Runnable task = () -> {
            System.out.println("Running in virtual thread: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);
    }
}

public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d; // Explicit casting
        System.out.println("Double to int: " + i);

        int j = 42;
        double k = j; // Implicit casting
        System.out.println("Int to double: " + k);
    }
}

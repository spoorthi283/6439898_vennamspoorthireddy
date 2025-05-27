interface Operation {
    int calculate(int a, int b);
}

public class LambdaExample {
    public static void main(String[] args) {
        Operation add = (a, b) -> a + b;
        Operation mul = (a, b) -> a * b;

        System.out.println("Add: " + add.calculate(5, 3));
        System.out.println("Multiply: " + mul.calculate(5, 3));
    }
}

import java.lang.reflect.Method;

class Person {
    public void sayHello() {
        System.out.println("Hello!");
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Person");
        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method method = clazz.getMethod("sayHello");
        method.invoke(obj);
    }
}

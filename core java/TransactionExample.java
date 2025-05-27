import java.sql.*;
public class TransactionExample {
    public void transferMoney(int from, int to, double amount) {
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password")) {
            con.setAutoCommit(false);
            try (PreparedStatement debit = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
                 PreparedStatement credit = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
                debit.setDouble(1, amount);
                debit.setInt(2, from);
                debit.executeUpdate();

                credit.setDouble(1, amount);
                credit.setInt(2, to);
                credit.executeUpdate();

                con.commit();
            } catch (SQLException e) {
                con.rollback();
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
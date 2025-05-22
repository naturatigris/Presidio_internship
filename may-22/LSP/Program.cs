public abstract class PaymentMethod
{
    public abstract void Pay(double amount);
    public double PriceCalculator(double price)
    {
        double tax = price * 0.10;
        return price + tax;
    }
}

public class CreditCard : PaymentMethod
{
    public override void Pay(double amount)
    {
        Console.WriteLine($"Paid {amount} using Credit Card.");
    }
}

public class PayPal : PaymentMethod
{
    public override void Pay(double amount)
    {
        Console.WriteLine($"Paid {amount} using PayPal.");
    }
}

public class LSPAdherenceDemo
{
    public static void Main()
    {
        PaymentMethod creditCard = new CreditCard();
        PaymentMethod payPal = new PayPal();

        creditCard.Pay(100);
        payPal.Pay(200);
    }
}

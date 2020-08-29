class PaymentCommand
{

}

//contrato
//common/interfaces

interface PaymentGatewayInterface
{
    void Payment(Account account, int amount);
}

interface AuthorizePaymentInterface
{
    void AuthorizePayment(Account account, int amount);
}

interface PaymentServicesInterface
{
    string Payment(Account account, int amount);
    string AuthorizePayment(Account account, int amount);
}

//implementacion concreta
//infraestructure/services

class MercadoPagoGateway : PaymentGatewayInterface, AuthorizePaymentInterface
{
    AuthorizePayment(Account account, int amount)
    {
        throw new Error("Method not implemented.");
    }

    void Payment(Account account, int amount)
    {
        //implementation
    }
}

class LdcPagoPararell : PaymentGatewayInterface
{

    void Payment(Account account, int amount)
    {
        //implementation
    }

    void AuthorizePayment(Account account, int amount)
    {
        //implementation
    }
}

//servicio que el handler utiliza

class PaymentService : PaymentServicesInterface
{

    private PaymentGatewayInterface passarell;
    private AuthorizePaymentInterface authorizeGateway;

    public PaymentService(PaymentGatewayInterface passarell, AuthorizePaymentInterface authorizeGateway)
    {
        this.passarell = passarell;
        this.authorizeGateway = authorizeGateway;
    }

    string Payment(Account account, int amount)
    {
        //implementation service 
        try
        {
            this.passarell.Payment(account, amount);
            return "todo ok";
        }
        catch (error)
        {
            throw new Error("ocurrio un error en procesar el pago");
        }
    }

    string AuthorizePayment(Account account, int amount)
    {
        try
        {
            this.authorizeGateway.AuthorizePayment(account, amount);
            return "todo ok";
        }
        catch (Exception)
        {
            return "ocurrió un error";
        }
    }
}


class PaymentHandler
{

    private PaymentServicesInterface paymentService;

    public PaymentHandler(PaymentServicesInterface paymentService)
    {
        this.paymentService = paymentService;
    }

    public Handle(PaymentCommand paymentCommand)
    {
        this.paymentService.Payment(null, null);
    }
}


class Program
{
    var ldcPagoPararell = new LdcPagoPararell();

    //lo que el inyector realiza

    var service = new PaymentService(new MercadoPagoGateway(), new MercadoPagoGateway());
    var service2 = new PaymentService(ldcPagoPararell, new MercadoPagoGateway());
}

/*
este ejemplo es exactamente igual ya que estos principios estan fuertemente ligados entre si, 
es bastante complejo violar uno sin violar el otro
*/
class PaymentCommand {

}

//contrato
//common/interfaces

interface PaymentPasarellInterface {
    Payment(account: Account, amount: number): void;
}

interface AuthorizePaymentInterface {
    AuthorizePayment(account: Account, amount: number): void;
}

interface PaymentServicesInterface {
    Payment(account: Account, amount: number): string;
    AuthorizePayment(account: Account, amount: number): string;
}

//implementacion concreta
//infraestructure/services

class MercadoPagoPasarell implements PaymentPasarellInterface, AuthorizePaymentInterface {
    AuthorizePayment(account: Account, amount: number): void {
        throw new Error("Method not implemented.");
    }

    Payment(account: Account, amount: number): void {
        //implementation
    }
}

class LdcPagoPararell implements PaymentPasarellInterface {

    Payment(account: Account, amount: number): void {
        //implementation
    }

    AuthorizePayment(account: Account, amount: number): void {
        //implementation
    }
}

//servicio que el handler utiliza

class PaymentService implements PaymentServicesInterface {

    private passarell: PaymentPasarellInterface;
    private authorizePasarell: AuthorizePaymentInterface;

    constructor(passarell: PaymentPasarellInterface, authorizePasarell: AuthorizePaymentInterface) {
        this.passarell = passarell;
        this.authorizePasarell = authorizePasarell;
    }

    Payment(account: Account, amount: number): string {
        //implementation service 
        try {
            this.passarell.Payment(account, amount);
            return "todo ok";
        } catch (error) {
            throw new Error("ocurrio un error en procesar el pago");
        }
    }

    AuthorizePayment(account: Account, amount: number): string {
        try {
            this.authorizePasarell.AuthorizePayment(account, amount);
            return "todo ok";
        } catch (error) {
            return "ocurrió un error";
        }
    }
}


class PaymentHandler {

    private paymentService: PaymentServicesInterface

    constructor(paymentService: PaymentServicesInterface) {
        this.paymentService = paymentService;
    }

    public Handle(paymentCommand: PaymentCommand) {
        this.paymentService.Payment(null, null);
    }
}


var ldcPagoPararell: LdcPagoPararell = new LdcPagoPararell();

//lo que el inyector realiza

var service = new PaymentService(new MercadoPagoPasarell(), new MercadoPagoPasarell());
var service2 = new PaymentService(ldcPagoPararell, new MercadoPagoPasarell());
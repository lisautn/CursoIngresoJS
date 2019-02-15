function mostrar()
{
    var precio;
    var resultado;
    var descuento;
    var propina;
    var amigos;
    var cadaUno;
    precio=prompt(precio);
    amigos=prompt(amigos)
    precio=parseInt(precio);
    descuento=precio-(precio*25/100);
    propina=descuento+(descuento*10/100);
    cadaUno=propina/amigos
    resultado=cadaUno
    alert("el precio final "+cadaUno)
}

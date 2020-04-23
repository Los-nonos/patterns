# POO o tambien programación orientada a objetos

## ¿qué es POO?

es un paradigma de programación que viene a innovar la forma de obtener resultados. Los objetos manipulan los datos de entrada para la obtención de datos de salida específicos, donde cada objeto ofrece una funcionalidad especial.

Muchos de los objetos prediseñados de los lenguajes de programación actuales permiten la agrupación en bibliotecas o librerías, sin embargo, muchos de estos lenguajes permiten al usuario la creación de sus propias bibliotecas.

Está basada en varias técnicas del sexenio: herencia, cohesión, abstracción, polimorfismo, acoplamiento y encapsulamiento.

esa es la definición teorica, pero, ¿que quiere decir ésto?

significa que nosotros no programamos un archivo con miles de lineas de código, lo vamos separando en partes que esto ayuda a simplificar la complejidad de éste código y ayudan al desarrollador a entender y poder manipular mejor el código escrito sin tener que reescribir toda la funcionalidad desde 0, se ayuda de las partes que ya existen enlazando los objetos y haciendo que estos colaboren entre sí.

## POO consta de varias partes.

### encapsulamiento

En programación orientada a objetos, se denomina encapsulamiento al ocultamiento del estado, es decir, de los datos miembro de un objeto de manera que solo se pueda cambiar mediante las operaciones definidas para ese objeto.

Cada objeto está aislado del exterior, es un módulo natural, y la aplicación entera se reduce a un agregado o rompecabezas de objetos. El aislamiento protege a los datos asociados de un objeto contra su modificación por quien no tenga derecho a acceder a ellos, eliminando efectos secundarios e interacciones.

De esta forma el usuario de la clase puede obviar la implementación de los métodos y propiedades para concentrarse solo en cómo usarlos. Por otro lado se evita que el usuario pueda cambiar su estado de maneras imprevistas e incontroladas.

### Abstracción

La abstracción consiste en aislar un elemento de su contexto o del resto de los elementos que lo acompañan.

En programación, el término se refiere al énfasis en el "¿qué hace?" más que en el "¿cómo lo hace?" (característica de caja negra).

esto va muy ligado a la encapsulación, si algo está bien encapsulado y abstraido solamente con leer los métodos publicos nos dice que es lo que hace ese objeto

### Herencia

La herencia es, después de la agregación o composición, el mecanismo más utilizado para alcanzar algunos de los objetivos más preciados en el desarrollo de software como lo son la reutilización y la extensibilidad. A través de ella, los diseñadores pueden crear nuevas clases partiendo de una clase o de una jerarquía de clases preexistente (ya comprobadas y verificadas) evitando con ello el rediseño, la modificación y verificación de la parte ya implementada. La herencia facilita la creación de objetos a partir de otros ya existentes e implica que una subclase obtiene todo el comportamiento (métodos) y eventualmente los atributos (variables) de su superclase.

Es la relación entre una clase general y otra clase más específica. Por ejemplo: Si declaramos una clase párrafo derivada de una clase texto, todos los métodos y variables asociadas con la clase texto, son automáticamente heredados por la subclase párrafo.

si bien la herencia es muy fuerte si se utiliza bien, no es recomendable utilizarla siempre, solo en casos necesarios

### Polimorfismo

El polimorfismo se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos. El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica es saber responder al mensaje que se les envía.

esto es uno de los pilares fundamentales en poo, ya que toda la base de colaboración de objetos es polimorfica

### Interfaces

Las interfaces, como las clases abstractas, incluyen métodos abstractos y constantes. Sin embargo, a diferencia de las clases abstractas, las interfaces solo pueden tener métodos públicos y no pueden tener variables.
Podemos implementar varias interfaces en la misma clase.

Vimos que las clases abstractas y las interfaces son similares en el sentido de que
proporcionar métodos abstractos que solo se pueden implementar en las clases secundarias. Sin embargo, todavía tienen las siguientes diferencias:

- Las interfaces pueden incluir métodos abstractos y constantes, pero no pueden contener métodos y variables concretas.
- Todos los métodos en la interfaz deben estar dentro del alcance de la visibilidad pública.
- Una clase puede implementar más de una interfaz, mientras que puede heredar de una sola clase abstracta.

### Cupling

Hay bastantes maneras en que podemos reducir la cantidad de acoplamiento dentro de nuestra base de código, pero cubriremos cuatro soluciones sencillas y básicas.

- tener menos dependencias
- usar inyección de dependencias
- usar interfaces, no clases concretas
- usar adaptadores

(ver ejemplos)

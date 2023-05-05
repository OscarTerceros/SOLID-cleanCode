import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>CleanCode and SOLID</h1>
  <div class='wraper'>
    <h3>Deuda Técnica</h3>
    <span>La falta de calidad en el código, genera una deuda que repercutirá en costos futuros</spam>
    <h4>Costos económicos</h4>
    <ul>
      <li>Tiempo en realizar matenimiento</li>
      <li>Tiempo en refactorizar código</li>
      <li>Tiempo en comprender código</li>
      <li>Tiempo adicional en la transferencia de código</li>
    </ul>
    
    <h4>Esquema de deuda técnica de Martin Fowler</h4>
    <ul>
      <li>Imprudente -> No hay tiempo, sólo copia y pega</li>
      <li>Prudente -> Tenemos que entregar rápido, ya refactorizaremos</li>
      <li>Inadvertido -> ¿Qué son los patrones de diseño?</li>
      <li>Prudente e Inadvertido -> Ahora sabemos como debíamos haber hecho</li>
    </ul>

    <h4>¿Cómo se paga la deuda técnica?</h4>
    <b>Refactorización</b></br>
    <ul>
      <li>Es simplemente un proceso que tiene por objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.</li>
      <li>Usualmente para que una refactorización fuerte tenga el objetivo esperado, es impresindible contar con <b>pruebas automáticas</b>.</li>
      <li>El no tener pruebas automáticas usualmente lleva al <b>"Si funciona, no lo toques".</b></li>
      <li>La mala calidad en el software siempre la acaba pagando o asumiendo alguine.</li>
      <li>Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando el tiempo a refactorizar o malgastando el tiempo programando sobre un sistema fragil.</li>
    </ul>
    <b>Clean Code</b>
    <ul>
      <li>Código limpio es aquel que se ha escrito con la intención de que otra persona (ó tu mismo en el futuro) lo entienda.</li>
      <li>Nuestro código tiene que ser simple y directo, deberia leerse con la misma facilidad que un texto bien escrito.</li>
      <li>Programar es el arte de decirle a otro humano lo que quieres que la computadora haga.</li>
    </ul>
    <b>Nombres según el tipo de dato</b>
    <ol>
      <li>Arreglos - Arrays</li>
        <ul>
          <li>Se debe pluralizar el nombre</li>
            <code>const fruitNames = ['manzana', 'pera', 'platano'];</code>
        </ul>
      <li>Booleanos - Booleans</li>
        <ul>
          <li>Se debe usar prefijos como: is, can, has</li>
          <li>Se procura que el significado del nombre esté siempre en positivo</li>
            <code>          
              const isOpen = true;</br>
              const canWrite = true;</br>
              const hasFruit = false;</br>
              const isActive = true;</br>
              const hasValues = false;</br>
              const isEmpty = true;</br>
            </code>
        </ul>
      <li>Números - Numbers</li>
        <ul>
          <li>Los nombres desigandos para los números deben ser más declarativos</li>
          <code>
            const maxFruits = 5;</br>
            const minFruits = 1;</br>
            const totalFruits = 3;</br>
            const totalOfCars = 5;</br>
          </code>
        </ul>
      <li>funciones - functions</li>
        <ul>
          <li>Los nombres de las funciones deben representar acciones</li>
          <li>Utilizar el vervo que representa la acción seguido de un sustantivo</li>
          <li>Deben ser descriptivos y concisos</li>
          <code>
            createUser();</br>
            updateUser();</br>
            sendEmail();</br>
            const totalOfCars = 5;</br>
          </code>
        </ul>
      <li>Clases - class</li>
        <ul>
          <li>Los nombres de las clases deben tener nombres formados por un sustantivo o frases de un sustantivo</li>
          <li>Se debe tratar de que no tengan nombres genéricos</li>
          <li>Usar UpperCamelCase</li>
          <li>Preguntas para determinar si es un buen nombre</li>
          <ol>
            <li>¿Qué hace exactamente la clase?</li>
            <li>¿Cómo exactamente esta clase realiza cierta tarea?</li>
            <li>¿Hay algo especifico sobre su ubicación?</li>
          </ol>
          <code>
            class SpecialMonterManager {};</br>
          </code>
        </ul>
    </ol>

    <b>Funciones</b>
    <p>Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica.</p>
    <ul>
      <li>Las funciones deben realizar una unica tarea</li>
      <li>Una función debe tener máximo tres parámetros</li>
      <li>Los parámetros son datos requeridos al momento de realizar la definición de la función</li>
      <li>Los argumentos son datos requeridos que son enviamos al momento de usar la función </li>
      <li></li>
    </ul>
  </div>
`
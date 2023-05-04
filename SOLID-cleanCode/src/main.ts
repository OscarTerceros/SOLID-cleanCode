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
  </div>
`

// Nombres pronunciables y expresivos
const numberOfUnits:number = 53;  //bad const n = 53; 
const tax:number = 0.15;  // const t = 0.15;
const category:string = 'T-shirt';  // const cat = 'T-shirt';
const birthDate: Date = new Date('August 15, 1965 00:00:00'); //const ddmmyyyy = new Date('August 15, 1965 00:00:00');

// Ausencia de información técnica en nombres

// Bad
class abstractUser { };
class userMixin { };
class userImplementation { };
interface userInterface { };

// Best
class user { };
interface user{ };
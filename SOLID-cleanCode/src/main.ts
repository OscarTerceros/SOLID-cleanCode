import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>CleanCode and SOLID</h1>
  <span>Revisar la consola de JavaScript</spam>
  <div class='wraper'>
    <h3>Deuda Técnica</h3>
    <span>La falta de calidad en el código, que genera una deuda que repercutira en costos futuros</spam>
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
  </div>
`

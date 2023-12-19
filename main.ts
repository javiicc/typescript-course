import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [
  new Curso("Practicas", 20, 90, true, 2000),
  new Curso("Ingenieria", 20, 30, true, 2000),
  new Curso("Mates", 60, 90, true, 2000),
  new Curso("Contacilidad", 20, 90, true, 2000),
];

export const ap = new Aprendiz(
  "Juan Pablo",
  "Reyes Gomez",
  "../fire.png",
  30,
  NivelEducativo.POSTGRADO,
  cursos
);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("texto-busqueda")!
);

btnFiltro.onclick = () => {
  let text: string = textoBusqueda.value;
  text = text == null ? "" : text;
  cursosTable.getElementsByTagName("tbody")[0].remove();
  let cursosFiltrados: Curso[] = ap.cursos.filter((c) => c.nombre.match(text));
  mostrarCursosAprendiz(cursosFiltrados);
};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
  let tbodyAprendiz: HTMLElement = document.createElement("tbody");

  tbodyAprendiz.innerHTML = `<tr><td colspan=2 ><img src="./${aprendiz.avatar}" heigth="100" ></td></tr>
  <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
  <tr><td>Nombres:</td><td>${aprendiz.apellidos}</td></tr>
  <tr><td>Nombres:</td><td>${aprendiz.nivelEducativo}</td></tr>
  <tr><td>Nombres:</td><td>${aprendiz.edad}</td></tr>`;
  aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz): void {
  let numeroCertificados: number = aprendiz.darCursosCertificados();
  let trElement: HTMLElement = document.createElement("tr");
  trElement.innerHTML = `<td><b>Cursos certificados</b></td><td>${numeroCertificados}</td>`;
  aprendizTable.appendChild(trElement);
}

function mostrarCursosAprendiz(cursos: Curso[]): void {
  let cursosTbody: HTMLElement = document.createElement("tbody");
  let estado: string[] = cursos.map((c) =>
    c.calificacion > 60 ? "green" : "red"
  );
  let index: number = 0;
  for (let curso of cursos) {
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td>${curso.nombre}</td>
    <td>${curso.horas}</td>
    <td style="color:${estado[index]}">${curso.calificacion}</td>
    <td>${curso.certificado}</td>
    <td>${curso.anio}</td>
    `;
    cursosTbody.appendChild(trElement);
    index++;
  }

  cursosTable.appendChild(cursosTbody);
}

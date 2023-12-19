import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Practicas", 20, 90, true, 2000),
    new Curso("Ingenieria", 20, 30, true, 2000),
    new Curso("Mates", 60, 90, true, 2000),
    new Curso("Contacilidad", 20, 90, true, 2000),
];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gomez", "../fire.png", 30, NivelEducativo.POSTGRADO, cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = (document.getElementById("texto-busqueda"));
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = text == null ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2 ><img src=\"./".concat(aprendiz.avatar, "\" heigth=\"100\" ></td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n  <tr><td>Nombres:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>".concat(numeroCertificados, "</td>");
    aprendizTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    var estado = cursos.map(function (c) {
        return c.calificacion > 60 ? "green" : "red";
    });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n    <td>").concat(curso.horas, "</td>\n    <td style=\"color:").concat(estado[index], "\">").concat(curso.calificacion, "</td>\n    <td>").concat(curso.certificado, "</td>\n    <td>").concat(curso.anio, "</td>\n    ");
        cursosTbody.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(cursosTbody);
}

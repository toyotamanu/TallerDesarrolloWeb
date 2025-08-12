import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
const soloNumeros = /^[0-9]+$/;
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("Ningún archivo seleccionado");

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : "Ningún archivo seleccionado");
  };

  const validateCustom = () => {
    const form = formRef.current;
    // Campos
    const nombre = form.nombre.value.trim();
    const apellidos = form.apellidos.value.trim();
    const telefono = form.telefono.value.trim();
    const email = form.email.value.trim();
    const confirmarEmail = form.confirmarEmail.value.trim();
    const ayuda = form.ayuda.value.trim();
    const asunto = form.asunto.value.trim();
    const mensaje = form.mensaje.value.trim();

    let ok = true;

    // Limpia estados previos
    [...form.elements].forEach((el) => {
      if (el.classList) el.classList.remove("is-invalid", "is-valid");
    });

    // Reglas personalizadas
    const mark = (input, condition) => {
      if (!condition) {
        ok = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.add("is-valid");
      }
    };

    mark(form.nombre, !!nombre && soloLetras.test(nombre));
    mark(form.apellidos, !!apellidos && soloLetras.test(apellidos));
    mark(form.telefono, !!telefono && soloNumeros.test(telefono));
    mark(form.email, !!email && formatoCorreo.test(email));
    mark(form.confirmarEmail, !!confirmarEmail && confirmarEmail === email);
    mark(form.ayuda, !!ayuda);
    mark(form.asunto, !!asunto);
    mark(form.mensaje, !!mensaje);

    return ok;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    // Primero: validación nativa + bootstrap
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Segundo: reglas personalizadas
    if (!validateCustom()) {
      form.classList.add("was-validated");
      return;
    }

    // Confirmación
    const result = await Swal.fire({
      title: "¿Enviar formulario?",
      text: "Revisa los datos antes de enviar.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#003b7a",
    });

    if (!result.isConfirmed) return;

    // Éxito (simulado)
    const nombre = form.nombre.value.trim();
    const asunto = form.asunto.value.trim();
    const ayuda = form.ayuda.value.trim();

    Swal.fire({
      icon: "success",
      title: "¡Enviado!",
      text: `Gracias, ${nombre}. Recibimos tu solicitud: "${asunto}". Ayuda: ${ayuda}.`,
      timer: 4000,
    });

    // Reset
    form.reset();
    form.classList.remove("was-validated");
    setFileName("Ningún archivo seleccionado");
    [...form.elements].forEach((el) => el.classList?.remove("is-valid", "is-invalid"));
  };

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} id="formularioContacto">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" className="form-control" required />
          <div className="invalid-feedback">Por favor ingresa tu nombre solo con letras.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="apellidos">Apellidos</label>
          <input id="apellidos" name="apellidos" className="form-control" required />
          <div className="invalid-feedback">Por favor ingresa tus apellidos solo con letras.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" className="form-control" required inputMode="numeric" />
          <div className="invalid-feedback">Por favor ingresa un teléfono válido.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" className="form-control" required />
          <div className="invalid-feedback">Por favor ingresa un correo válido.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="confirmarEmail">Confirmar correo</label>
          <input id="confirmarEmail" name="confirmarEmail" type="email" className="form-control" required />
          <div className="invalid-feedback">Los correos deben coincidir.</div>
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="ayuda">Ayuda</label>
          <select id="ayuda" name="ayuda" className="form-select" required>
            <option value="">Seleccione una opción</option>
            <option value="instalacion">Instalación de equipamiento técnico</option>
            <option value="soporte">Soporte técnico o mantenimiento</option>
            <option value="electricidad">Problema eléctrico</option>
            <option value="gas">Red de gas o fugas</option>
            <option value="extraccion">Extracción de vapores</option>
            <option value="fugas">Filtraciones o cañerías</option>
            <option value="remodelaciones">Remodelación u obra civil</option>
            <option value="asesoria">Asesoría o visita técnica</option>
            <option value="otros">Otros</option>
          </select>
          <div className="invalid-feedback">Por favor selecciona una opción.</div>
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="asunto">Asunto</label>
          <input id="asunto" name="asunto" className="form-control" required />
          <div className="invalid-feedback">Por favor escribe el asunto.</div>
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="4" className="form-control" required />
          <div className="invalid-feedback">Por favor escribe tu mensaje.</div>
        </div>

        {/* Archivo */}
        <div className="col-12">
          <label className="form-label form-label-file" htmlFor="archivo">Adjuntar archivo (opcional)</label>
          <input id="archivo" name="archivo" type="file" className="form-control" accept=".png,.jpg,.pdf" onChange={handleFile} />
          <div id="archivoNombre" className={`form-text ${fileName === 'Ningún archivo seleccionado' ? 'empty' : ''}`}>{fileName}</div>
        </div>

        <div className="col-12 d-flex justify-content-center gap-4">
          <button type="reset" className="btn btn-secondary"
            onClick={() => {
              formRef.current?.classList.remove("was-validated");
              setFileName("Ningún archivo seleccionado");
              [...formRef.current.elements].forEach((el) => el.classList?.remove("is-valid", "is-invalid"));
            }}>
            Limpiar
          </button>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </div>
    </form>
  );
}

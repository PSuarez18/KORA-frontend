import type { PostsCopy } from '@/features/blog';

/** Artículos del blog en español. Copy tomado del diseño "Blog kora." */
export const esPosts: PostsCopy = {
  'radar-ia-edicion-14': {
    template: 'radar',
    kicker: 'Radar IA · Edición 14',
    title: 'Cuatro novedades y cuáles importan para tu operación',
    excerpt: 'Lo que salió este mes, filtrado por impacto real en una PyME.',
    lead: 'Leímos lo que salió este mes y lo filtramos con una sola pregunta: ¿le cambia algo a una PyME de 10 a 80 personas?',
    summary:
      'Una novedad para probar ya, una para seguir de cerca y dos que por ahora podés ignorar.',
    items: [
      {
        area: 'Herramientas de oficina',
        category: 'digitalizacion',
        title: 'Las planillas ya leen facturas en PDF',
        description:
          'Los asistentes integrados en las hojas de cálculo más usadas pueden extraer proveedor, fecha e importe de un lote de facturas y volcarlos en columnas. Sin integraciones ni código.',
        relevance: 'now',
        advice: 'Si cargás facturas a mano, probalo esta semana.',
      },
      {
        area: 'Atención al cliente',
        category: 'automatizacion',
        title: 'Respuestas automáticas en WhatsApp con tu propia base',
        description:
          'Varias plataformas de mensajería para empresas permiten conectar un documento de preguntas frecuentes y responder consultas simples fuera de horario.',
        relevance: 'watch',
        advice: 'Sirve solo si tus preguntas frecuentes ya están escritas.',
      },
      {
        area: 'Agentes',
        category: 'radar-ia',
        title: 'Agentes que operan el navegador por vos',
        description:
          'Los nuevos agentes completan formularios y navegan sistemas web de punta a punta. Impresionan en demos, pero todavía fallan en tareas largas con excepciones.',
        relevance: 'later',
        advice: 'Volvé a mirarlo en seis meses.',
      },
      {
        area: 'Conocimiento interno',
        category: 'gestion-del-conocimiento',
        title: 'Buscadores que responden sobre tus documentos',
        description:
          'Conectar la carpeta compartida a un asistente para "preguntarle" a los manuales ya es sencillo. El límite no es la herramienta: es que los documentos existan y estén al día.',
        relevance: 'later',
        advice: 'Primero ordená qué documentación tenés.',
      },
    ],
    steps: [
      {
        title: 'Probá la lectura de facturas con 20 PDFs',
        description: 'Compará el resultado con tu carga manual del mes pasado.',
      },
      {
        title: 'Escribí tus 15 preguntas frecuentes',
        description: 'Te sirven hoy para el equipo y mañana para automatizar.',
      },
      {
        title: 'Ignorá los agentes por ahora',
        description: 'Sin procesos escritos, no tienen qué ejecutar.',
      },
    ],
    subscribeTitle: 'El Radar IA llega una vez por mes.',
  },

  'si-depende-de-una-persona': {
    template: 'editorial',
    kicker: 'Serie Estandarización · Parte 2 de 4',
    title: 'Si depende de una persona, no es un proceso',
    excerpt: 'Cómo pasar del "lo sabe una persona" a un paso que cualquiera repite.',
    lead: 'Cómo detectar el conocimiento que vive en la cabeza de alguien y convertirlo en un paso que cualquiera del equipo puede repetir.',
    summary: [
      'Si una tarea se frena cuando alguien se toma vacaciones, es una dependencia, no un proceso.',
      'El primer paso no es un software: es escribir cómo se hace hoy, con errores incluidos.',
      'Un proceso está listo cuando otra persona lo ejecuta sin preguntar.',
    ],
    body: [
      {
        kind: 'paragraph',
        text: 'En casi todas las PyMEs con las que trabajamos hay una persona que "sabe cómo se hace". Sabe qué cliente paga tarde, qué proveedor manda la factura mal y en qué planilla se anota la excepción. Mientras esa persona está, la operación funciona.',
      },
      {
        kind: 'paragraph',
        text: 'El problema aparece el día que no está. O el día que la empresa crece y esa persona ya no alcanza.',
      },
      { kind: 'heading', text: 'Tres señales de que hay conocimiento atrapado' },
      {
        kind: 'paragraph',
        text: 'La primera es la pregunta repetida: si alguien del equipo consulta lo mismo más de dos veces por semana, falta un paso escrito. La segunda es la planilla personal, esa que nadie más abre. La tercera es el cuello de botella con nombre propio.',
      },
      {
        kind: 'quote',
        text: 'Documentar no es burocracia. Es la condición para poder delegar.',
      },
      { kind: 'heading', text: 'Escribir primero, mejorar después' },
      {
        kind: 'paragraph',
        text: 'La tentación es diseñar el proceso ideal. Conviene lo contrario: registrar cómo se hace hoy, paso a paso, con quien lo hace. Recién con eso a la vista se ve qué sobra, qué falta y qué se puede automatizar.',
      },
      {
        kind: 'paragraph',
        text: 'Un buen registro entra en una página: disparador, pasos, responsable, herramienta y qué hacer cuando algo sale distinto.',
      },
      {
        kind: 'quote',
        text: 'Un proceso está listo cuando otra persona lo ejecuta sin preguntar.',
      },
      {
        kind: 'paragraph',
        text: 'Esa es la prueba que usamos. Si falla, el documento vuelve a quien lo escribió con las preguntas que surgieron. Dos o tres vueltas suelen alcanzar.',
      },
    ],
    steps: [
      {
        title: 'Listá las tareas con nombre propio',
        description: 'Anotá las que se frenan si una persona falta una semana.',
      },
      {
        title: 'Elegí una y escribila en una página',
        description: 'Disparador, pasos, responsable, herramienta y excepciones.',
      },
      {
        title: 'Hacé la prueba del reemplazo',
        description: 'Que otra persona la ejecute solo con el documento. Corregí lo que pregunte.',
      },
    ],
    subscribeTitle: 'Recibí la parte 3 cuando salga.',
  },
};

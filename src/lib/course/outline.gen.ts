import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The Spanish that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Die Doppelkonsonante, die ein anderes Wort ist', pronta: true },
      { id: 'b02', titulo: 'Grüßen, bevor Sie etwas brauchen', pronta: true },
      { id: 'b03', titulo: 'Wechseln Sie den Kanal, nicht die Sprache', pronta: true },
      { id: 'b04', titulo: 'Die vier Dinge, die mitfliegen', pronta: true },
      { id: 'b05', titulo: 'Drei Antworten, dann Schluss', pronta: true },
      { id: 'b06', titulo: 'Posso, und dann was immer Sie tun wollen', pronta: true },
      { id: 'b07', titulo: 'Dov\'è — die Frage, die Ihre Füße bewegt', pronta: true },
      { id: 'b08', titulo: 'Stellen Sie die Frage, deren Antwort in den Kopf passt', pronta: true },
      { id: 'b09', titulo: 'Das Ticket, das sich selbst entwertet — und das andere', pronta: true },
      { id: 'b10', titulo: 'Die Schilder, die Sie lesen können, sind die gefährlichen', pronta: true },
      { id: 'b11', titulo: 'Quanto costa — zwei Wörter, solange Fragen noch frei ist', pronta: true },
      { id: 'b12', titulo: 'Senza — abziehen statt erklären', pronta: true },
      { id: 'b13', titulo: 'Der Hammersatz und die Karte, die ihn für Sie sagt', pronta: true },
      { id: 'b14', titulo: 'Mi porta — die Rechnung und die zwei Zeilen, die dazugehören', pronta: true },
      { id: 'b15', titulo: 'Einkaufen: Preis, Größe, anprobieren, umtauschen', pronta: true },
      { id: 'b16', titulo: 'Check-in: um das bitten, was das Zimmer besser macht, solange es noch nichts kostet', pronta: true },
      { id: 'b17', titulo: 'Apotheke, Schmerz, Notfall', pronta: true },
      { id: 'b18', titulo: 'Der letzte Tag — auschecken, den Koffer abstellen und den Satz sagen, der Sie willkommen macht', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Ihre Uhr, und warum früh essen den guten Tisch kostet', pronta: true },
      { id: 'i02', titulo: 'Die Reihenfolge an der Theke', pronta: true },
      { id: 'i03', titulo: 'Das Gericht, das Sie nie bestellt hätten', pronta: true },
      { id: 'i04', titulo: 'Der Abend: aperitivo, die Runde und wie man einen Tisch verlässt', pronta: true },
      { id: 'i05', titulo: 'Die fünf Fragen, die Ihnen alle stellen', pronta: true },
      { id: 'i06', titulo: 'Von gestern erzählen', pronta: true },
      { id: 'i07', titulo: 'Lob, das die Küche erreicht — und der Satz, der das Gericht tauscht', pronta: true },
      { id: 'i08', titulo: 'Wenn Sie zu jemandem nach Hause eingeladen werden', pronta: true },
      { id: 'i09', titulo: 'Den Nachmittag so verbringen, wie man ihn hier verbringt', pronta: true },
      { id: 'i10', titulo: 'Geld hier: die Karte, die man nehmen muss, das Trinkgeld, das niemand erwartet', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Wie sie reden, wenn nicht mit Ihnen', pronta: true },
      { id: 'a02', titulo: 'Worüber sie lachen — und der eine Witz, den Sie machen können', pronta: true },
      { id: 'a03', titulo: 'Wer sie zu sein glauben', pronta: true },
      { id: 'a04', titulo: 'Die alte Debatte', pronta: true },
      { id: 'a05', titulo: 'Die andere Sprache', pronta: true },
      { id: 'a06', titulo: 'Der Kalender vor Ort', pronta: true },
      { id: 'a07', titulo: 'Signale: Willkommen, leichte Gereiztheit und Zeit zu gehen', pronta: true },
      { id: 'a08', titulo: 'Der Abschied, der Sie wieder einlädt', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","c01","c02","c03","e01","e02","e03","e04","e05","e06","e07","e08","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10","italia-b08-directions"]);

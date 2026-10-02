import type { PostsCopy } from '@/features/blog';

/** Blog posts in English. Translated from the Spanish originals. */
export const enPosts: PostsCopy = {
  'radar-ia-edicion-14': {
    template: 'radar',
    kicker: 'AI Radar · Issue 14',
    title: 'Four new releases, and which ones matter for your operation',
    excerpt: "This month's releases, filtered by their real impact on an SME.",
    lead: 'We read what came out this month and filtered it with a single question: does it change anything for an SME of 10 to 80 people?',
    summary: 'One to try now, one to keep an eye on, and two you can ignore for the time being.',
    items: [
      {
        area: 'Office tools',
        category: 'digitalizacion',
        title: 'Spreadsheets can now read PDF invoices',
        description:
          'The assistants built into the most popular spreadsheets can pull supplier, date and amount from a batch of invoices and lay them out in columns. No integrations, no code.',
        relevance: 'now',
        advice: 'If you enter invoices by hand, try it this week.',
      },
      {
        area: 'Customer service',
        category: 'automatizacion',
        title: 'Automatic WhatsApp replies from your own knowledge base',
        description:
          'Several business messaging platforms let you connect an FAQ document and answer simple questions outside business hours.',
        relevance: 'watch',
        advice: 'Only useful if your FAQs are already written down.',
      },
      {
        area: 'Agents',
        category: 'radar-ia',
        title: 'Agents that drive the browser for you',
        description:
          'The new agents fill in forms and navigate web systems end to end. They impress in demos, but still fail on long tasks with exceptions.',
        relevance: 'later',
        advice: 'Take another look in six months.',
      },
      {
        area: 'Internal knowledge',
        category: 'gestion-del-conocimiento',
        title: 'Search tools that answer questions about your documents',
        description:
          'Connecting your shared folder to an assistant so you can "ask" the manuals is already easy. The limit is not the tool: it is whether the documents exist and are up to date.',
        relevance: 'later',
        advice: 'First, sort out what documentation you actually have.',
      },
    ],
    steps: [
      {
        title: 'Test invoice reading with 20 PDFs',
        description: "Compare the result with last month's manual entry.",
      },
      {
        title: 'Write down your 15 most frequent questions',
        description: 'They help your team today and your automations tomorrow.',
      },
      {
        title: 'Ignore agents for now',
        description: 'Without written processes, they have nothing to run.',
      },
    ],
    subscribeTitle: 'The AI Radar arrives once a month.',
  },

  'si-depende-de-una-persona': {
    template: 'editorial',
    kicker: 'Standardisation series · Part 2 of 4',
    title: "If it depends on one person, it isn't a process",
    excerpt: 'How to go from "one person knows" to a step anyone can repeat.',
    lead: "How to spot the knowledge that lives in someone's head and turn it into a step anyone on the team can repeat.",
    summary: [
      "If a task stalls when someone goes on holiday, it's a dependency, not a process.",
      "The first step isn't software: it's writing down how it's done today, mistakes included.",
      'A process is ready when someone else can run it without asking.',
    ],
    body: [
      {
        kind: 'paragraph',
        text: 'In almost every SME we work with, there is one person who "knows how it\'s done". They know which client pays late, which supplier sends the wrong invoice and which spreadsheet the exception goes in. While that person is around, the operation works.',
      },
      {
        kind: 'paragraph',
        text: "The problem shows up the day they're not there. Or the day the company grows and that person is no longer enough.",
      },
      { kind: 'heading', text: 'Three signs that knowledge is trapped' },
      {
        kind: 'paragraph',
        text: 'The first is the repeated question: if someone on the team asks the same thing more than twice a week, a written step is missing. The second is the personal spreadsheet nobody else opens. The third is the bottleneck with a name.',
      },
      {
        kind: 'quote',
        text: "Documenting isn't bureaucracy. It's what makes delegating possible.",
      },
      { kind: 'heading', text: 'Write it down first, improve it later' },
      {
        kind: 'paragraph',
        text: "The temptation is to design the ideal process. It's better to do the opposite: record how it's done today, step by step, with the person who does it. Only with that in view can you see what's surplus, what's missing and what can be automated.",
      },
      {
        kind: 'paragraph',
        text: 'A good record fits on one page: trigger, steps, owner, tool and what to do when something goes differently.',
      },
      {
        kind: 'quote',
        text: 'A process is ready when someone else can run it without asking.',
      },
      {
        kind: 'paragraph',
        text: "That's the test we use. If it fails, the document goes back to whoever wrote it, along with the questions that came up. Two or three rounds are usually enough.",
      },
    ],
    steps: [
      {
        title: 'List the tasks that have a name attached',
        description: 'Note the ones that stall if one person is away for a week.',
      },
      {
        title: 'Pick one and write it on a single page',
        description: 'Trigger, steps, owner, tool and exceptions.',
      },
      {
        title: 'Run the replacement test',
        description:
          'Have someone else run it using only the document. Fix whatever they ask about.',
      },
    ],
    subscribeTitle: 'Get part 3 when it comes out.',
  },
};

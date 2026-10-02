import type { PostsCopy } from '@/features/blog';

/** Artigos do blog em português. Traduzidos dos originais em espanhol. */
export const ptPosts: PostsCopy = {
  'radar-ia-edicion-14': {
    template: 'radar',
    kicker: 'Radar IA · Edição 14',
    title: 'Quatro novidades e quais importam para a sua operação',
    excerpt: 'O que saiu este mês, filtrado pelo impacto real em uma PME.',
    lead: 'Lemos o que saiu este mês e filtramos com uma única pergunta: isso muda alguma coisa para uma PME de 10 a 80 pessoas?',
    summary:
      'Uma novidade para testar já, uma para acompanhar de perto e duas que, por enquanto, você pode ignorar.',
    items: [
      {
        area: 'Ferramentas de escritório',
        category: 'digitalizacion',
        title: 'As planilhas já leem notas fiscais em PDF',
        description:
          'Os assistentes integrados às planilhas mais usadas conseguem extrair fornecedor, data e valor de um lote de notas e organizá-los em colunas. Sem integrações nem código.',
        relevance: 'now',
        advice: 'Se você lança notas à mão, teste nesta semana.',
      },
      {
        area: 'Atendimento ao cliente',
        category: 'automatizacion',
        title: 'Respostas automáticas no WhatsApp com a sua própria base',
        description:
          'Várias plataformas de mensagens para empresas permitem conectar um documento de perguntas frequentes e responder consultas simples fora do horário.',
        relevance: 'watch',
        advice: 'Só serve se as suas perguntas frequentes já estiverem escritas.',
      },
      {
        area: 'Agentes',
        category: 'radar-ia',
        title: 'Agentes que operam o navegador por você',
        description:
          'Os novos agentes preenchem formulários e navegam por sistemas web de ponta a ponta. Impressionam em demos, mas ainda falham em tarefas longas com exceções.',
        relevance: 'later',
        advice: 'Volte a olhar daqui a seis meses.',
      },
      {
        area: 'Conhecimento interno',
        category: 'gestion-del-conocimiento',
        title: 'Buscadores que respondem sobre os seus documentos',
        description:
          'Conectar a pasta compartilhada a um assistente para "perguntar" aos manuais já é simples. O limite não é a ferramenta: é que os documentos existam e estejam atualizados.',
        relevance: 'later',
        advice: 'Primeiro organize a documentação que você tem.',
      },
    ],
    steps: [
      {
        title: 'Teste a leitura de notas com 20 PDFs',
        description: 'Compare o resultado com o seu lançamento manual do mês passado.',
      },
      {
        title: 'Escreva as suas 15 perguntas frequentes',
        description: 'Servem hoje para a equipe e amanhã para automatizar.',
      },
      {
        title: 'Ignore os agentes por enquanto',
        description: 'Sem processos escritos, eles não têm o que executar.',
      },
    ],
    subscribeTitle: 'O Radar IA chega uma vez por mês.',
  },

  'si-depende-de-una-persona': {
    template: 'editorial',
    kicker: 'Série Padronização · Parte 2 de 4',
    title: 'Se depende de uma pessoa, não é um processo',
    excerpt: 'Como passar do "uma pessoa sabe" para um passo que qualquer um repete.',
    lead: 'Como identificar o conhecimento que vive na cabeça de alguém e transformá-lo em um passo que qualquer pessoa da equipe consegue repetir.',
    summary: [
      'Se uma tarefa trava quando alguém sai de férias, é uma dependência, não um processo.',
      'O primeiro passo não é um software: é escrever como se faz hoje, com erros incluídos.',
      'Um processo está pronto quando outra pessoa o executa sem perguntar.',
    ],
    body: [
      {
        kind: 'paragraph',
        text: 'Em quase todas as PMEs com que trabalhamos existe uma pessoa que "sabe como se faz". Sabe qual cliente paga atrasado, qual fornecedor manda a nota errada e em qual planilha se anota a exceção. Enquanto essa pessoa está lá, a operação funciona.',
      },
      {
        kind: 'paragraph',
        text: 'O problema aparece no dia em que ela não está. Ou no dia em que a empresa cresce e essa pessoa já não dá conta.',
      },
      { kind: 'heading', text: 'Três sinais de que há conhecimento preso' },
      {
        kind: 'paragraph',
        text: 'O primeiro é a pergunta repetida: se alguém da equipe consulta a mesma coisa mais de duas vezes por semana, falta um passo escrito. O segundo é a planilha pessoal, aquela que ninguém mais abre. O terceiro é o gargalo com nome e sobrenome.',
      },
      {
        kind: 'quote',
        text: 'Documentar não é burocracia. É a condição para poder delegar.',
      },
      { kind: 'heading', text: 'Escrever primeiro, melhorar depois' },
      {
        kind: 'paragraph',
        text: 'A tentação é desenhar o processo ideal. Convém fazer o contrário: registrar como se faz hoje, passo a passo, com quem faz. Só com isso à vista dá para ver o que sobra, o que falta e o que pode ser automatizado.',
      },
      {
        kind: 'paragraph',
        text: 'Um bom registro cabe em uma página: gatilho, passos, responsável, ferramenta e o que fazer quando algo sai diferente.',
      },
      {
        kind: 'quote',
        text: 'Um processo está pronto quando outra pessoa o executa sem perguntar.',
      },
      {
        kind: 'paragraph',
        text: 'Esse é o teste que usamos. Se falha, o documento volta para quem o escreveu com as perguntas que surgiram. Duas ou três rodadas costumam bastar.',
      },
    ],
    steps: [
      {
        title: 'Liste as tarefas que têm dono',
        description: 'Anote as que travam se uma pessoa faltar uma semana.',
      },
      {
        title: 'Escolha uma e escreva em uma página',
        description: 'Gatilho, passos, responsável, ferramenta e exceções.',
      },
      {
        title: 'Faça o teste da substituição',
        description:
          'Peça para outra pessoa executar só com o documento. Corrija o que ela perguntar.',
      },
    ],
    subscribeTitle: 'Receba a parte 3 quando sair.',
  },
};

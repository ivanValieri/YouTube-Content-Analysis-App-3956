import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGrid, FiCopy, FiEye, FiTrendingUp, FiClock, FiTarget, FiZap, FiX } = FiIcons;

const TemplatesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: FiGrid },
    { id: 'viral', name: 'Viral', icon: FiTrendingUp },
    { id: 'educational', name: 'Educacional', icon: FiTarget },
    { id: 'entertainment', name: 'Entretenimento', icon: FiZap }
  ];

  const templates = [
    {
      id: 1,
      name: 'PAS - Problema, Agitação, Solução',
      category: 'viral',
      description: 'Fórmula clássica para vídeos de vendas e conversão',
      duration: '8-12 min',
      difficulty: 'Intermediário',
      structure: [
        {
          step: 'Problema (0:00-2:00)',
          content: 'Identifique um problema específico que seu público enfrenta',
          example: '"Você já se sentiu frustrado tentando crescer no Instagram?"'
        },
        {
          step: 'Agitação (2:00-4:00)',
          content: 'Amplifique a dor e mostre as consequências de não resolver',
          example: '"Enquanto você luta para conseguir 100 seguidores, seus concorrentes já têm milhares..."'
        },
        {
          step: 'Solução (4:00-10:00)',
          content: 'Apresente sua solução de forma clara e convincente',
          example: '"Mas existe uma estratégia simples que pode mudar tudo..."'
        },
        {
          step: 'Prova Social (10:00-11:00)',
          content: 'Mostre resultados e depoimentos',
          example: '"Veja como João conseguiu 10k seguidores em 30 dias..."'
        },
        {
          step: 'Call to Action (11:00-12:00)',
          content: 'Direcionamento claro para próxima ação',
          example: '"Se você quer o mesmo resultado, deixe um comentário com SIM"'
        }
      ],
      tips: [
        'Use estatísticas no problema para maior impacto',
        'Crie urgência na agitação sem ser alarmista',
        'Apresente a solução de forma simples e acionável'
      ]
    },
    {
      id: 2,
      name: 'AIDA - Atenção, Interesse, Desejo, Ação',
      category: 'viral',
      description: 'Modelo clássico de marketing adaptado para vídeos',
      duration: '6-10 min',
      difficulty: 'Iniciante',
      structure: [
        {
          step: 'Atenção (0:00-1:00)',
          content: 'Hook poderoso para capturar atenção imediata',
          example: '"Em 30 segundos vou te mostrar como dobrar sua renda..."'
        },
        {
          step: 'Interesse (1:00-3:00)',
          content: 'Mantenha o interesse com informações relevantes',
          example: '"Isso funciona porque a maioria das pessoas não sabe que..."'
        },
        {
          step: 'Desejo (3:00-7:00)',
          content: 'Crie desejo mostrando benefícios e transformações',
          example: '"Imagine acordar todos os dias sabendo que seu dinheiro trabalha para você..."'
        },
        {
          step: 'Ação (7:00-10:00)',
          content: 'Guie para ação específica',
          example: '"Para começar hoje mesmo, faça isso..."'
        }
      ],
      tips: [
        'O hook deve ser específico e intrigante',
        'Use storytelling para manter interesse',
        'Conecte benefícios com emoções'
      ]
    },
    {
      id: 3,
      name: 'Tutorial Passo a Passo',
      category: 'educational',
      description: 'Formato didático para ensinar habilidades específicas',
      duration: '10-15 min',
      difficulty: 'Iniciante',
      structure: [
        {
          step: 'Introdução (0:00-1:30)',
          content: 'Apresente o que será ensinado e os resultados esperados',
          example: '"Hoje vou te ensinar a criar um site em 15 minutos..."'
        },
        {
          step: 'Pré-requisitos (1:30-2:30)',
          content: 'Liste o que é necessário antes de começar',
          example: '"Você vai precisar de um computador e acesso à internet..."'
        },
        {
          step: 'Passo 1 (2:30-5:00)',
          content: 'Primeiro passo detalhado com demonstração',
          example: '"Primeiro, vamos acessar o site X e criar uma conta..."'
        },
        {
          step: 'Passos 2-N (5:00-12:00)',
          content: 'Continue com os próximos passos de forma lógica',
          example: '"Agora que temos a conta, vamos escolher um template..."'
        },
        {
          step: 'Conclusão (12:00-15:00)',
          content: 'Recapitule e mostre o resultado final',
          example: '"Pronto! Agora você tem um site profissional funcionando..."'
        }
      ],
      tips: [
        'Mostre na tela tudo que está fazendo',
        'Vá devagar e repita informações importantes',
        'Antecipe possíveis erros e como resolvê-los'
      ]
    },
    {
      id: 4,
      name: 'Storytelling Viral',
      category: 'entertainment',
      description: 'Narrativa envolvente que prende do início ao fim',
      duration: '5-8 min',
      difficulty: 'Avançado',
      structure: [
        {
          step: 'Hook Narrativo (0:00-0:30)',
          content: 'Comece no meio da ação ou com uma revelação',
          example: '"Quando acordei naquele dia, não imaginava que minha vida mudaria para sempre..."'
        },
        {
          step: 'Contexto (0:30-2:00)',
          content: 'Dê o contexto necessário para entender a história',
          example: '"Há 6 meses eu estava desempregado e sem perspectivas..."'
        },
        {
          step: 'Conflito (2:00-4:00)',
          content: 'Apresente o desafio ou problema central',
          example: '"Mas então recebi uma ligação que mudou tudo..."'
        },
        {
          step: 'Resolução (4:00-6:00)',
          content: 'Mostre como o conflito foi resolvido',
          example: '"Decidi apostar tudo naquela oportunidade e..."'
        },
        {
          step: 'Lição/Moral (6:00-8:00)',
          content: 'Extraia o aprendizado para o público',
          example: '"O que aprendi foi que às vezes precisamos arriscar para crescer..."'
        }
      ],
      tips: [
        'Use detalhes sensoriais para criar imersão',
        'Crie tensão e suspense',
        'Conecte a história com a vida do público'
      ]
    },
    {
      id: 5,
      name: 'Listicle Engajador',
      category: 'educational',
      description: 'Lista numerada com alta retenção',
      duration: '8-12 min',
      difficulty: 'Iniciante',
      structure: [
        {
          step: 'Introdução (0:00-1:00)',
          content: 'Apresente a lista e crie expectativa',
          example: '"Essas 7 dicas mudaram completamente minha produtividade..."'
        },
        {
          step: 'Dica 1 (1:00-2:30)',
          content: 'Primeira dica com explicação e exemplo',
          example: '"Dica número 1: Sempre comece o dia com a tarefa mais difícil..."'
        },
        {
          step: 'Dicas 2-6 (2:30-9:00)',
          content: 'Continue com as próximas dicas mantendo o padrão',
          example: '"Dica número 2: Use a técnica Pomodoro para..."'
        },
        {
          step: 'Dica Final (9:00-11:00)',
          content: 'Última dica como bônus especial',
          example: '"E a dica final é a mais poderosa de todas..."'
        },
        {
          step: 'Recapitulação (11:00-12:00)',
          content: 'Resumo rápido de todas as dicas',
          example: '"Recapitulando: 1) Comece com o difícil, 2) Use Pomodoro..."'
        }
      ],
      tips: [
        'Numere claramente cada dica',
        'Varie a duração de cada item',
        'Use transições suaves entre as dicas'
      ]
    },
    {
      id: 6,
      name: 'Reação e Análise',
      category: 'entertainment',
      description: 'Reaja e analise conteúdo de forma envolvente',
      duration: '6-10 min',
      difficulty: 'Intermediário',
      structure: [
        {
          step: 'Introdução (0:00-1:00)',
          content: 'Apresente o que você vai reagir/analisar',
          example: '"Hoje vou reagir ao vídeo mais polêmico da semana..."'
        },
        {
          step: 'Contexto (1:00-2:00)',
          content: 'Dê contexto sobre o conteúdo original',
          example: '"Esse vídeo viralizou porque..."'
        },
        {
          step: 'Reação (2:00-6:00)',
          content: 'Reaja genuinamente pausando para comentar',
          example: '"Nossa, não acredito que ele disse isso..."'
        },
        {
          step: 'Análise (6:00-8:00)',
          content: 'Analise criticamente o conteúdo',
          example: '"O problema com essa abordagem é que..."'
        },
        {
          step: 'Conclusão (8:00-10:00)',
          content: 'Dê sua opinião final e pergunte a do público',
          example: '"Minha opinião é... e você, o que acha?"'
        }
      ],
      tips: [
        'Seja genuíno nas reações',
        'Pause frequentemente para comentar',
        'Respeite direitos autorais'
      ]
    }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const copyTemplate = (template) => {
    const templateText = `${template.name}\n\n${template.description}\n\nDuração: ${template.duration}\nDificuldade: ${template.difficulty}\n\nEstrutura:\n${template.structure.map((step, index) => 
      `${index + 1}. ${step.step}\n${step.content}\nExemplo: ${step.example}\n`
    ).join('\n')}\n\nDicas:\n${template.tips.map(tip => `• ${tip}`).join('\n')}`;
    
    navigator.clipboard.writeText(templateText);
    toast.success('Template copiado!');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Templates de Vídeos Virais
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Estruturas comprovadas de vídeos de alta performance para diferentes tipos de conteúdo
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <SafeIcon icon={category.icon} className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{template.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTemplate(template)}
                    className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    <SafeIcon icon={FiEye} className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => copyTemplate(template)}
                    className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <SafeIcon icon={FiCopy} className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{template.description}</p>

              <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="h-4 w-4" />
                  <span>{template.duration}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  template.difficulty === 'Iniciante' ? 'bg-green-600/20 text-green-300' :
                  template.difficulty === 'Intermediário' ? 'bg-yellow-600/20 text-yellow-300' :
                  'bg-red-600/20 text-red-300'
                }`}>
                  {template.difficulty}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-white font-medium">Estrutura:</h4>
                {template.structure.slice(0, 3).map((step, index) => (
                  <div key={index} className="text-slate-400 text-sm">
                    {index + 1}. {step.step}
                  </div>
                ))}
                {template.structure.length > 3 && (
                  <div className="text-slate-500 text-sm">
                    +{template.structure.length - 3} etapas...
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Template Modal */}
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTemplate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedTemplate.name}</h2>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <SafeIcon icon={FiX} className="h-6 w-6" />
                </button>
              </div>

              <p className="text-slate-300 mb-6">{selectedTemplate.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">Duração:</h3>
                  <p className="text-slate-300">{selectedTemplate.duration}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Dificuldade:</h3>
                  <span className={`px-3 py-1 rounded text-sm ${
                    selectedTemplate.difficulty === 'Iniciante' ? 'bg-green-600/20 text-green-300' :
                    selectedTemplate.difficulty === 'Intermediário' ? 'bg-yellow-600/20 text-yellow-300' :
                    'bg-red-600/20 text-red-300'
                  }`}>
                    {selectedTemplate.difficulty}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Estrutura Detalhada:</h3>
                <div className="space-y-6">
                  {selectedTemplate.structure.map((step, index) => (
                    <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {index + 1}. {step.step}
                      </h4>
                      <p className="text-slate-300 mb-3">{step.content}</p>
                      <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-3">
                        <p className="text-blue-300 text-sm">
                          <strong>Exemplo:</strong> {step.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Dicas Importantes:</h3>
                <div className="space-y-2">
                  {selectedTemplate.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => copyTemplate(selectedTemplate)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiCopy} className="h-5 w-5" />
                  <span>Copiar Template</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;
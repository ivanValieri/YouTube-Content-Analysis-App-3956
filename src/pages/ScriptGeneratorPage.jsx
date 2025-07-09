import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiCopy, FiDownload, FiRefreshCw, FiTarget, FiZap } = FiIcons;

const ScriptGeneratorPage = () => {
  const [selectedNiche, setSelectedNiche] = useState('');
  const [scriptType, setScriptType] = useState('');
  const [generatedScript, setGeneratedScript] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const niches = [
    'Marketing Digital',
    'Fitness e Saúde',
    'Tecnologia',
    'Educação',
    'Lifestyle',
    'Negócios',
    'Culinária',
    'Viagem'
  ];

  const scriptTypes = [
    { id: 'problem-solution', name: 'Problema-Solução', description: 'Identifica um problema e apresenta a solução' },
    { id: 'listicle', name: 'Lista', description: 'Formato de lista numerada (ex: "5 dicas para...")' },
    { id: 'storytelling', name: 'Storytelling', description: 'Narrativa envolvente com começo, meio e fim' },
    { id: 'tutorial', name: 'Tutorial', description: 'Passo a passo didático' },
    { id: 'case-study', name: 'Caso de Estudo', description: 'Análise de caso real com resultados' },
    { id: 'comparison', name: 'Comparação', description: 'Compara diferentes opções ou métodos' }
  ];

  const generateScript = async () => {
    if (!selectedNiche || !scriptType) {
      toast.error('Selecione o nicho e o tipo de roteiro');
      return;
    }

    setIsGenerating(true);

    // Simular geração de roteiro
    setTimeout(() => {
      const scripts = {
        'problem-solution': {
          title: 'Como Resolver [Problema Específico] em 7 Dias',
          steps: [
            {
              step: 'Hook Inicial',
              content: 'Você já se sentiu frustrado com [problema específico]? Você não está sozinho. 90% das pessoas enfrentam esse desafio.',
              duration: '0:00-0:15',
              tips: 'Use uma estatística ou pergunta direta para capturar atenção'
            },
            {
              step: 'Problema Principal',
              content: 'O maior erro que as pessoas cometem é [erro comum]. Isso acontece porque [explicação].',
              duration: '0:15-1:30',
              tips: 'Identifique-se com a dor do público'
            },
            {
              step: 'Solução',
              content: 'Mas existe uma forma simples de resolver isso. Nos próximos minutos, vou te mostrar o método [nome do método].',
              duration: '1:30-2:00',
              tips: 'Crie expectativa para a solução'
            },
            {
              step: 'Exemplo Prático',
              content: 'Deixe-me mostrar como [nome] conseguiu [resultado] usando exatamente essa estratégia.',
              duration: '2:00-5:00',
              tips: 'Use casos reais ou exemplos concretos'
            },
            {
              step: 'Virada Emocional',
              content: 'Imagine como seria sua vida se você nunca mais tivesse que se preocupar com [problema].',
              duration: '5:00-6:00',
              tips: 'Conecte com o resultado emocional desejado'
            },
            {
              step: 'CTA (Call to Action)',
              content: 'Se você quer aprender mais sobre [solução], deixe um comentário com a palavra [palavra-chave].',
              duration: '6:00-7:00',
              tips: 'Seja específico e direto no call to action'
            }
          ]
        },
        'listicle': {
          title: '5 [Estratégias/Dicas] Que Vão Transformar Seu [Área]',
          steps: [
            {
              step: 'Hook Inicial',
              content: 'Essas 5 estratégias mudaram completamente minha forma de [ação]. A número 3 vai te surpreender.',
              duration: '0:00-0:20',
              tips: 'Prometa valor específico e crie curiosidade'
            },
            {
              step: 'Introdução',
              content: 'Depois de [tempo/experiência], descobri que existem apenas 5 coisas que realmente importam.',
              duration: '0:20-1:00',
              tips: 'Estabeleça credibilidade e contexto'
            },
            {
              step: 'Dica 1',
              content: 'Primeira estratégia: [nome da estratégia]. Isso funciona porque [explicação].',
              duration: '1:00-2:30',
              tips: 'Explique o porquê, não apenas o que fazer'
            },
            {
              step: 'Dica 2-4',
              content: 'Continue com o mesmo padrão para as próximas dicas, mantendo o ritmo.',
              duration: '2:30-7:00',
              tips: 'Mantenha consistência no formato'
            },
            {
              step: 'Dica 5 (Bônus)',
              content: 'E a última dica é a mais poderosa: [estratégia especial]. Poucos conhecem isso.',
              duration: '7:00-8:00',
              tips: 'Termine com algo exclusivo ou avançado'
            },
            {
              step: 'Conclusão + CTA',
              content: 'Qual dessas estratégias você vai implementar primeiro? Conta aqui nos comentários!',
              duration: '8:00-8:30',
              tips: 'Incentive engajamento e participação'
            }
          ]
        }
      };

      setGeneratedScript(scripts[scriptType] || scripts['problem-solution']);
      setIsGenerating(false);
      toast.success('Roteiro gerado com sucesso!');
    }, 2000);
  };

  const copyScript = () => {
    if (!generatedScript) return;
    
    const scriptText = `${generatedScript.title}\n\n${generatedScript.steps.map(step => 
      `${step.step} (${step.duration})\n${step.content}\n💡 Dica: ${step.tips}\n`
    ).join('\n')}`;
    
    navigator.clipboard.writeText(scriptText);
    toast.success('Roteiro copiado!');
  };

  const exportScript = () => {
    if (!generatedScript) return;
    
    const scriptText = `${generatedScript.title}\n\n${generatedScript.steps.map(step => 
      `${step.step} (${step.duration})\n${step.content}\n💡 Dica: ${step.tips}\n`
    ).join('\n')}`;
    
    const element = document.createElement('a');
    const file = new Blob([scriptText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'roteiro.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Roteiro exportado!');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gerador de Roteiro
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Crie roteiros otimizados baseados em padrões virais comprovados
          </p>
        </motion.div>

        {/* Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Niche Selection */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <SafeIcon icon={FiTarget} className="h-5 w-5 text-purple-400" />
                <span>Selecione o Nicho</span>
              </h3>
              <div className="space-y-2">
                {niches.map((niche) => (
                  <label key={niche} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="niche"
                      value={niche}
                      checked={selectedNiche === niche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 focus:ring-purple-500"
                    />
                    <span className="text-slate-300">{niche}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Script Type Selection */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <SafeIcon icon={FiEdit3} className="h-5 w-5 text-purple-400" />
                <span>Tipo de Roteiro</span>
              </h3>
              <div className="space-y-3">
                {scriptTypes.map((type) => (
                  <label key={type.id} className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                    <input
                      type="radio"
                      name="scriptType"
                      value={type.id}
                      checked={scriptType === type.id}
                      onChange={(e) => setScriptType(e.target.value)}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 focus:ring-purple-500 mt-0.5"
                    />
                    <div>
                      <div className="text-white font-medium">{type.name}</div>
                      <div className="text-slate-400 text-sm">{type.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={generateScript}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 mx-auto"
            >
              {isGenerating ? (
                <>
                  <SafeIcon icon={FiRefreshCw} className="h-5 w-5 animate-spin" />
                  <span>Gerando...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiZap} className="h-5 w-5" />
                  <span>Gerar Roteiro</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Generated Script */}
        {generatedScript && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{generatedScript.title}</h2>
              <div className="flex space-x-2">
                <button
                  onClick={copyScript}
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiCopy} className="h-4 w-4" />
                  <span>Copiar</span>
                </button>
                <button
                  onClick={exportScript}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiDownload} className="h-4 w-4" />
                  <span>Exportar</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {generatedScript.steps.map((step, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {index + 1}. {step.step}
                    </h3>
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-3">{step.content}</p>
                  <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-3">
                    <p className="text-blue-300 text-sm">
                      💡 <strong>Dica:</strong> {step.tips}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScriptGeneratorPage;
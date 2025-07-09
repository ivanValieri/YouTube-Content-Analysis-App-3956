import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiCopy, FiRefreshCw, FiTrendingUp, FiTarget } = FiIcons;

const TitleGeneratorPage = () => {
  const [keywords, setKeywords] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('');
  const [titleStyle, setTitleStyle] = useState('');
  const [generatedTitles, setGeneratedTitles] = useState([]);
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

  const titleStyles = [
    { id: 'curiosity', name: 'Curiosidade', description: 'Desperta curiosidade e mistério' },
    { id: 'urgency', name: 'Urgência', description: 'Cria senso de urgência e FOMO' },
    { id: 'benefit', name: 'Benefício', description: 'Foca nos resultados e benefícios' },
    { id: 'how-to', name: 'Como Fazer', description: 'Tutorial e instruções práticas' },
    { id: 'listicle', name: 'Lista', description: 'Formato de lista numerada' },
    { id: 'question', name: 'Pergunta', description: 'Usa perguntas para engajar' }
  ];

  const generateTitles = async () => {
    if (!keywords.trim()) {
      toast.error('Digite algumas palavras-chave');
      return;
    }

    setIsGenerating(true);

    // Simular geração de títulos
    setTimeout(() => {
      const titleTemplates = {
        curiosity: [
          `O Segredo de ${keywords} Que Ninguém Te Conta`,
          `Por Que ${keywords} Não Funciona Para Você (E Como Resolver)`,
          `A Verdade Sobre ${keywords} Que Mudou Minha Vida`,
          `${keywords}: O Que Os Experts Não Querem Que Você Saiba`,
          `Descobri ${keywords} Por Acaso e Agora Não Consigo Parar`
        ],
        urgency: [
          `PARE Tudo! ${keywords} Está Mudando Agora`,
          `Últimas 24h Para Aprender ${keywords}`,
          `${keywords} Vai Acabar em 2024? A Resposta Te Surpreende`,
          `Você Tem 7 Dias Para Dominar ${keywords}`,
          `URGENTE: ${keywords} Não Será Mais o Mesmo`
        ],
        benefit: [
          `Como ${keywords} Me Fez Ganhar 10x Mais`,
          `${keywords}: De Zero a Resultado em 30 Dias`,
          `Transformei Minha Vida Com ${keywords} (E Você Também Pode)`,
          `${keywords} Mudou Minha Vida em 6 Meses`,
          `Como ${keywords} Pode Te Dar Liberdade Total`
        ],
        'how-to': [
          `Como Dominar ${keywords} em 7 Dias (Passo a Passo)`,
          `${keywords} Para Iniciantes: Guia Completo 2024`,
          `Como Usar ${keywords} Para Transformar Sua Vida`,
          `${keywords}: Tutorial Completo do Zero ao Avançado`,
          `Aprenda ${keywords} Sem Sair de Casa`
        ],
        listicle: [
          `5 Segredos de ${keywords} Que Funcionam`,
          `7 Erros Fatais em ${keywords} (Evite o #3)`,
          `10 Dicas de ${keywords} Que Mudaram Minha Vida`,
          `3 Estratégias de ${keywords} Que Ninguém Te Ensina`,
          `5 Sinais de Que Você Precisa Aprender ${keywords}`
        ],
        question: [
          `${keywords} Realmente Funciona? Minha Experiência`,
          `Por Que ${keywords} Não Funciona Para Você?`,
          `${keywords} ou Não ${keywords}? Qual Escolher?`,
          `Você Está Fazendo ${keywords} Errado?`,
          `${keywords} Vale a Pena em 2024?`
        ]
      };

      const style = titleStyle || 'curiosity';
      setGeneratedTitles(titleTemplates[style] || titleTemplates.curiosity);
      setIsGenerating(false);
      toast.success('Títulos gerados com sucesso!');
    }, 1500);
  };

  const copyTitle = (title) => {
    navigator.clipboard.writeText(title);
    toast.success('Título copiado!');
  };

  const copyAllTitles = () => {
    const allTitles = generatedTitles.join('\n');
    navigator.clipboard.writeText(allTitles);
    toast.success('Todos os títulos copiados!');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Gerador de Títulos Virais
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Crie títulos irresistíveis usando fórmulas comprovadas que geram milhões de views
          </p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8"
        >
          <div className="space-y-6">
            {/* Keywords Input */}
            <div>
              <label className="block text-white font-medium mb-3">
                Palavras-chave (separadas por vírgula)
              </label>
              <input
                type="text"
                placeholder="marketing digital, vendas online, empreendedorismo"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none"
              />
            </div>

            {/* Niche Selection */}
            <div>
              <label className="block text-white font-medium mb-3">
                Nicho (opcional)
              </label>
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none"
              >
                <option value="">Selecione um nicho</option>
                {niches.map((niche) => (
                  <option key={niche} value={niche}>{niche}</option>
                ))}
              </select>
            </div>

            {/* Title Style */}
            <div>
              <label className="block text-white font-medium mb-3">
                Estilo do Título
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {titleStyles.map((style) => (
                  <label key={style.id} className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                    <input
                      type="radio"
                      name="titleStyle"
                      value={style.id}
                      checked={titleStyle === style.id}
                      onChange={(e) => setTitleStyle(e.target.value)}
                      className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 focus:ring-purple-500 mt-0.5"
                    />
                    <div>
                      <div className="text-white font-medium">{style.name}</div>
                      <div className="text-slate-400 text-sm">{style.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={generateTitles}
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
                    <span>Gerar Títulos</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Generated Titles */}
        {generatedTitles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="h-6 w-6 text-purple-400" />
                <span>Títulos Gerados</span>
              </h2>
              <button
                onClick={copyAllTitles}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiCopy} className="h-4 w-4" />
                <span>Copiar Todos</span>
              </button>
            </div>

            <div className="space-y-4">
              {generatedTitles.map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-lg p-4 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-medium">
                        #{index + 1}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {title.length} caracteres
                      </span>
                    </div>
                    <p className="text-white text-lg">{title}</p>
                  </div>
                  <button
                    onClick={() => copyTitle(title)}
                    className="ml-4 bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-500 transition-colors"
                  >
                    <SafeIcon icon={FiCopy} className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Title Tips */}
            <div className="mt-8 bg-blue-600/10 border border-blue-600/20 rounded-lg p-6">
              <h3 className="text-blue-300 font-semibold mb-3">💡 Dicas para Títulos Virais:</h3>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li>• Mantenha entre 50-60 caracteres para melhor visualização</li>
                <li>• Use números quando possível (ex: "5 dicas", "7 erros")</li>
                <li>• Inclua palavras emocionais (segredo, urgente, incrível)</li>
                <li>• Teste diferentes variações para ver qual performa melhor</li>
                <li>• Certifique-se de que o título reflete o conteúdo real do vídeo</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TitleGeneratorPage;
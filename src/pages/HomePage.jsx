import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiFileText, FiEdit3, FiZap, FiGrid, FiArrowRight, FiCheck } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiFileText,
      title: 'Análise Completa',
      description: 'Extrai e analisa o conteúdo do vídeo identificando tópicos, tom e estrutura narrativa.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiEdit3,
      title: 'Gerador de Roteiro',
      description: 'Cria templates otimizados baseados em padrões virais do vídeo analisado.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiZap,
      title: 'Títulos Virais',
      description: 'Gera variações de títulos usando fórmulas comprovadas e palavras-chave extraídas.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiGrid,
      title: 'Templates Prontos',
      description: 'Biblioteca com estruturas de vídeos de alta performance para diferentes nichos.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    'Análise sem dependência de APIs oficiais',
    'Foco em padrões narrativos do conteúdo',
    'Adaptável a qualquer nicho',
    'Transcrição editável e exportável',
    'Sugestões de engajamento natural',
    'IA open-source para análise avançada'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Analise <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Conteúdo
              </span> de Vídeos
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transforme qualquer vídeo do YouTube em insights acionáveis. 
              Extraia padrões virais, gere roteiros otimizados e crie títulos que convertem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/analysis"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPlay} className="h-5 w-5" />
                <span>Começar Análise</span>
              </Link>
              <Link
                to="/templates"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiGrid} className="h-5 w-5" />
                <span>Ver Templates</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ferramentas poderosas para análise e otimização de conteúdo de vídeo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Por que escolher nossa ferramenta?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Diferente das ferramentas tradicionais, focamos no conteúdo real do vídeo, 
                não apenas em métricas superficiais.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <SafeIcon icon={FiCheck} className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Exemplo de Análise
              </h3>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">✅ Análise Concluída!</h4>
                  <p className="text-slate-300 text-sm">
                    📌 <strong>Tópicos Principais:</strong> Marketing Digital, Fórmulas de Copywriting, Casos Reais
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-slate-300 text-sm">
                    🎭 <strong>Tom Detectado:</strong> Motivacional + Didático
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <p className="text-slate-300 text-sm">
                    🔥 <strong>Melhor Hook:</strong> "Você sabia que 90% dos vídeos falham nos primeiros 3 segundos?"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Cole o link de um vídeo do YouTube e descubra os segredos por trás do conteúdo viral.
            </p>
            <Link
              to="/analysis"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Analisar Vídeo Agora</span>
              <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiLoader, FiCopy, FiDownload, FiEye, FiClock, FiUser, FiTag } = FiIcons;

const AnalysisPage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    if (!videoUrl) {
      toast.error('Por favor, insira um link do YouTube');
      return;
    }

    if (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
      toast.error('Por favor, insira um link válido do YouTube');
      return;
    }

    setIsAnalyzing(true);
    
    // Simular análise (em produção, aqui seria a chamada para a API)
    setTimeout(() => {
      setAnalysisResult({
        title: 'Como Ganhar 10K por Mês com Marketing Digital em 2024',
        duration: '12:34',
        views: '1.2M',
        topics: ['Marketing Digital', 'Fórmulas de Copywriting', 'Casos Reais', 'Estratégias de Vendas'],
        tone: 'Motivacional + Didático',
        structure: 'Problem-Solution',
        hook: 'Você sabia que 90% dos vídeos falham nos primeiros 3 segundos?',
        turningPoints: [
          { time: '0:15', text: 'Estatística chocante sobre falhas' },
          { time: '2:30', text: 'Revelação do primeiro caso de sucesso' },
          { time: '7:45', text: 'Momento de transformação emocional' },
          { time: '10:20', text: 'Call to action principal' }
        ],
        transcript: `Olá pessoal! Você sabia que 90% dos vídeos falham nos primeiros 3 segundos? 

Isso mesmo, a maioria das pessoas desiste antes mesmo de entender do que se trata o conteúdo. E hoje eu vou te mostrar exatamente como quebrar essa barreira e criar vídeos que prendem a atenção do início ao fim.

Meu nome é João, e nos últimos 5 anos eu ajudei mais de 1000 pessoas a transformarem seus negócios através do marketing digital. E uma das principais dificuldades que eu vejo é justamente essa: como criar conteúdo que realmente engaja.

Então vamos direto ao ponto. Existem 3 fórmulas fundamentais que todo criador de conteúdo precisa dominar...

[Transcrição continua...]`,
        emotions: [
          { type: 'Curiosidade', intensity: 'Alta', time: '0:00-0:30' },
          { type: 'Confiança', intensity: 'Média', time: '0:30-2:00' },
          { type: 'Empolgação', intensity: 'Alta', time: '2:00-4:00' },
          { type: 'Ensino', intensity: 'Alta', time: '4:00-10:00' },
          { type: 'Urgência', intensity: 'Média', time: '10:00-12:34' }
        ]
      });
      setIsAnalyzing(false);
      toast.success('Análise concluída com sucesso!');
    }, 3000);
  };

  const copyTranscript = () => {
    navigator.clipboard.writeText(analysisResult.transcript);
    toast.success('Transcrição copiada!');
  };

  const exportTranscript = () => {
    const element = document.createElement('a');
    const file = new Blob([analysisResult.transcript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'transcricao.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Transcrição exportada!');
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
            Análise de Conteúdo
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cole o link de um vídeo do YouTube e descubra os padrões que fazem o conteúdo viral
          </p>
        </motion.div>

        {/* URL Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="flex-1 bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <SafeIcon icon={FiLoader} className="h-5 w-5 animate-spin" />
                  <span>Analisando...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiPlay} className="h-5 w-5" />
                  <span>Analisar</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Analysis Result */}
        {analysisResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Video Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4">Informações do Vídeo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiClock} className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Duração</p>
                    <p className="text-white font-medium">{analysisResult.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiEye} className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Visualizações</p>
                    <p className="text-white font-medium">{analysisResult.views}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiUser} className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Tom</p>
                    <p className="text-white font-medium">{analysisResult.tone}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-white font-medium mb-2">Título:</h3>
                <p className="text-slate-300">{analysisResult.title}</p>
              </div>
            </div>

            {/* Topics and Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                  <SafeIcon icon={FiTag} className="h-5 w-5 text-purple-400" />
                  <span>Tópicos Principais</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResult.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Estrutura Narrativa</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-400 text-sm">Tipo:</p>
                    <p className="text-white font-medium">{analysisResult.structure}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Melhor Hook:</p>
                    <p className="text-purple-300 italic">"{analysisResult.hook}"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Turning Points */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Pontos de Virada</h3>
              <div className="space-y-3">
                {analysisResult.turningPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-medium">
                      {point.time}
                    </div>
                    <p className="text-slate-300 flex-1">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Análise Emocional</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {analysisResult.emotions.map((emotion, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{emotion.type}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        emotion.intensity === 'Alta' ? 'bg-red-600/20 text-red-300' :
                        emotion.intensity === 'Média' ? 'bg-yellow-600/20 text-yellow-300' :
                        'bg-green-600/20 text-green-300'
                      }`}>
                        {emotion.intensity}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{emotion.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transcript */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Transcrição</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={copyTranscript}
                    className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiCopy} className="h-4 w-4" />
                    <span>Copiar</span>
                  </button>
                  <button
                    onClick={exportTranscript}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiDownload} className="h-4 w-4" />
                    <span>Exportar</span>
                  </button>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-slate-300 whitespace-pre-wrap text-sm">
                  {analysisResult.transcript}
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnalysisPage;
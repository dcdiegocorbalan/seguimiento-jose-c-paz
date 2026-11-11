import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  HeartHandshake, 
  BookOpen, 
  TrendingUp, 
  UserCheck, 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Home, 
  Heart, 
  ShieldCheck, 
  LogOut, 
  Lock, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  Edit3, 
  Save, 
  Briefcase, 
  GraduationCap, 
  User, 
  Sparkles, 
  X,
  Menu,
  Activity,
  Award,
  Globe
} from 'lucide-react';

// --- LOGO COMPONENT DE LA CASA DEL ALFARERO ---
function AlfareroLogo({ className = "h-10", variant = "full" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Isotipo: Globo terráqueo con llamas/ríos estilizados en Rojo y Azul */}
      <div className="relative w-10 h-10 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          {/* Globo Azul */}
          <circle cx="45" cy="50" r="38" fill="#3B629B" opacity="0.9" />
          <path d="M 15 50 Q 45 30 75 50 Q 45 70 15 50 Z" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
          <path d="M 45 12 Q 25 50 45 88" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
          <path d="M 45 12 Q 65 50 45 88" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
          
          {/* Llama/Flujo Rojo característico */}
          <path d="M 10 38 C 30 38 45 52 52 75 C 55 60 50 40 38 35 C 55 35 68 45 70 65 C 75 48 65 25 45 18 C 30 25 15 30 10 38 Z" fill="#C8102E" />
          <path d="M 12 48 C 32 48 48 60 55 82 C 58 70 54 52 42 47 C 58 47 70 56 72 74 C 77 60 68 38 50 32 C 36 38 20 42 12 48 Z" fill="#9B0B21" />
        </svg>
      </div>

      {variant === "full" && (
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-[#3B629B] uppercase tracking-wider leading-none">
            La
          </span>
          <span className="text-lg font-black text-[#C8102E] tracking-tight leading-none uppercase">
            Casa del Alfarero
          </span>
          <span className="text-[9px] font-bold text-[#5C78A2] tracking-widest uppercase mt-0.5">
            Iglesia Cristiana Evangélica
          </span>
        </div>
      )}
    </div>
  );
}

// --- DATOS INICIALES BASADOS EN EL DOCUMENTO DEL MINISTERIO ---
const INITIAL_DEGREES = [
  { id: 1, name: 'Grado 1: Evangelizada', desc: 'Escucha el mensaje y no lo rechaza. Contacto directo fuera de la iglesia.' },
  { id: 2, name: 'Grado 2: Contactada', desc: 'Brinda sus datos de contacto.' },
  { id: 3, name: 'Grado 3: Interesada', desc: 'Responde el mensaje de seguimiento y se logra mantener conversación.' },
  { id: 4, name: 'Grado 4: Dispuesta', desc: 'Quiere ir a la iglesia pero por alguna causa no puede (tiempo, trabajo, dudas).' },
  { id: 5, name: 'Grado 5: Invitada / Visitante', desc: 'Logra llegar a la iglesia. Conoce el compañerismo.' },
  { id: 6, name: 'Grado 6: Congregante', desc: 'Decide congregarse. Requiere acompañamiento activo en adaptación y pruebas.' },
  { id: 7, name: 'Grado 7: Miembro', desc: 'Logra congregarse durante 6 meses con determinación. Pasa a evaluación pastoral.' },
  { id: 8, name: 'Grado 8: Servidor', desc: 'Aspiración final. Se suma activamente a pescar almas.' },
];

const CHANNELS = [
  { id: 'Evangelismo', name: 'Evangelismo Directo', desc: 'Volantes o abordaje en la vía pública.' },
  { id: 'Allegado', name: 'Allegado / Familiar', desc: 'Invitación por vínculo familiar o de amistad.' },
  { id: 'Google Maps', name: 'Google Maps', desc: 'Búsqueda por geolocalización en la zona.' },
  { id: 'Traspaso', name: 'Traspaso', desc: 'Mudanza o traslado desde otra congregación.' },
  { id: 'Sin Especificar', name: 'Sin Especificar', desc: 'Origen en definición.' }
];

const INITIAL_PEOPLE = [
  {
    id: '1',
    name: 'Stella',
    degree: 6,
    channel: 'Allegado',
    visits: 1,
    assignedTo: 'Equipo Femenino',
    profile: 'Sensible, estudiosa, busca superarse profesionalmente, muy amable, necesita mucha contención y compañía. Sus luchas más grandes son la depresión, rechazo y soledad. Es humilde, tranquila, pero valora sentirse escuchada. Disfruta de planes tranquilos y charlar sobre las experiencias que tuvo y tienen otros en la fe. Vive sola en un terreno con su madre. Tiene un hijo en otra iglesia y una hija en Luján.',
    healthNotes: 'Problemas de salud: presión alta, diabetes. No presenta un problema de salud grave actualmente.',
    prayers: [
      { id: 'p1', category: 'Salud', request: 'Presión alta y diabetes bajo control constante', status: 'active' },
      { id: 'p2', category: 'Cónyuge', request: 'Respuesta y dirección por su actual pareja', status: 'active' },
      { id: 'p3', category: 'Estudios', request: 'Aprobar materias difíciles de Enfermería (Inglés)', status: 'active' },
      { id: 'p4', category: 'Trabajo', request: 'Consiguió nuevo trabajo, mantener estabilidad laboral', status: 'answered' }
    ],
    contacts: [
      {
        id: 'c1',
        date: '2026-10-11',
        type: 'WhatsApp',
        comment: 'La contacté para saber cómo estaba luego del accidente. Dijo que estaba yendo a la iglesia y orando por mi esposo.',
        pastorComment: 'Excelente acompañamiento. Mantener comunión activa.'
      },
      {
        id: 'c2',
        date: '2026-11-07',
        type: 'WhatsApp',
        comment: 'Stella se siente muy agradecida y acompañada con la iglesia actualmente. Dijo que le damos "mucha esperanza e inspiración" como matrimonio.',
        pastorComment: 'Gloria a Dios. Seguir fortaleciendo ese vínculo de amor.'
      },
      {
        id: 'c3',
        date: '2026-11-10',
        type: 'WhatsApp',
        comment: 'Sobre su materia de inglés, se siente tranquila de que si no aprueba recupera en diciembre y arreglé apoyarla si así pasa. Como Judith dejó de responder, le pregunté por ella y me pidió oración porque identifica que Judith está en el mismo proceso. Agendé visita el martes si no llueve.',
        pastorComment: 'Aprobada la visita. Oración para que Dios las guíe juntas.'
      }
    ]
  },
  {
    id: '2',
    name: 'Judith',
    degree: 5,
    channel: 'Allegado',
    visits: 0,
    assignedTo: 'Equipo Femenino',
    profile: 'Amable, proactiva, atareada. Doble ánimo, indecisa con congregarse. Es amiga cercana y vecina de Stella.',
    healthNotes: 'Problemas de salud: presión alta, diabetes. No presenta problema grave de urgencia.',
    prayers: [
      { id: 'p21', category: 'Salud', request: 'Lucha con la diabetes y establecer hábitos constantes de tratamiento', status: 'active' },
      { id: 'p22', category: 'Espiritual', request: 'Superar el doble ánimo y definir su determinación para congregarse', status: 'active' }
    ],
    contacts: [
      {
        id: 'c21',
        date: '2026-07-22',
        type: 'WhatsApp',
        comment: 'La contacté para invitarla una vez más a la iglesia. Me comentó dolor por extracción de muela. Le dije que oraríamos.',
        pastorComment: ''
      },
      {
        id: 'c22',
        date: '2026-07-28',
        type: 'WhatsApp',
        comment: 'Le dejé mensaje y audio. No respondió.',
        pastorComment: ''
      },
      {
        id: 'c23',
        date: '2026-08-12',
        type: 'WhatsApp',
        comment: 'Invitación mandada, no respondió. No continué insistiendo directamente para enfocarme en Stella para que ella la anime.',
        pastorComment: 'Estrategia sabia. Trabajar la edificación cruzada entre amigas.'
      }
    ]
  },
  {
    id: '3',
    name: 'Aldana',
    degree: 5,
    channel: 'Evangelismo',
    visits: 0,
    assignedTo: 'Jóvenes / Evangelismo',
    profile: 'Sensible, muy creativa, divertida, alegre, emprendedora. Conocedora del evangelio, volvió a congregarse en la iglesia de la que se había apartado luego de llegar al compañerismo. Vive sola en departamento en San Miguel, padres viven en José C. Paz cerca de la iglesia. Lucha con la depresión. Estudia AT, emprende y busca mejor oportunidad laboral. Apasionada por el arte.',
    healthNotes: 'Sin problemas graves de salud física.',
    prayers: [
      { id: 'p31', category: 'Trabajo', request: 'Mejor oportunidad laboral y sustento para su emprendimiento', status: 'active' },
      { id: 'p32', category: 'Salud', request: 'Fortaleza espiritual y emocional contra cuadros depresivos', status: 'active' }
    ],
    contacts: [
      {
        id: 'c31',
        date: '2026-11-10',
        type: 'Llamada',
        comment: 'Consiguió un nuevo trabajo. Conversación alegre para saber cómo le está yendo.',
        pastorComment: 'Dar gracias a Dios por la provisión de trabajo.'
      }
    ]
  },
  {
    id: '4',
    name: 'Yanina',
    degree: 3,
    channel: 'Evangelismo',
    visits: 0,
    assignedTo: 'Evangelismo',
    profile: 'Muy tranquila, apacible, tal vez resignada ante las dificultades, pero muy abierta a escuchar palabras de aliento y esperanza.',
    healthNotes: 'Su hija Justina tiene que operarse la rodilla. Esperan turno para diciembre.',
    prayers: [
      { id: 'p41', category: 'Familia', request: 'Confirmación de turno y operación exitosa de rodilla para su hija Justina', status: 'active' }
    ],
    contacts: []
  },
  {
    id: '5',
    name: 'Paola Ramos',
    degree: 3,
    channel: 'Evangelismo',
    visits: 0,
    assignedTo: 'Evangelismo',
    profile: 'Sincera, directa, extrovertida. Entra fácilmente en confianza. Conocedora del evangelio, está apartada pero siente nostalgia por su pasado juvenil activo en la iglesia. Tal vez decepcionada con personas de la iglesia. Lucha para mantener la economía de su hogar con tres hijos y un marido ausente. Manda de vez en cuando a sus hijos a la escuelita dominical.',
    healthNotes: 'No presenta problema de salud grave.',
    prayers: [
      { id: 'p51', category: 'Familia', request: 'Protección, bendición y salud para sus tres hijos: Skyler, Owen y Aiton', status: 'active' },
      { id: 'p52', category: 'Trabajo', request: 'Sustento económico diario y dirección para su hogar', status: 'active' }
    ],
    contacts: []
  },
  {
    id: '6',
    name: 'Leila',
    degree: 3,
    channel: 'Sin Especificar',
    visits: 0,
    assignedTo: 'Seguimiento General',
    profile: 'Muy amable, madre joven de un niño. Abierta a escuchar con interés y curiosidad. Conoce de Dios pero nunca se congregó, proviene de familia católica.',
    healthNotes: 'No presenta un problema de salud grave.',
    prayers: [
      { id: 'p61', category: 'Adicciones', request: 'Liberación, restauración y salvación para su hermano Joel Almaraz', status: 'active' }
    ],
    contacts: []
  }
];

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem('alfarero_pastoral_people');
    return saved ? JSON.parse(saved) : INITIAL_PEOPLE;
  });

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isNewPersonModalOpen, setIsNewPersonModalOpen] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDegree, setFilterDegree] = useState('ALL');
  const [filterChannel, setFilterChannel] = useState('ALL');
  const [filterPrayerCat, setFilterPrayerCat] = useState('ALL');

  useEffect(() => {
    localStorage.setItem('alfarero_pastoral_people', JSON.stringify(people));
  }, [people]);

  const handleLogin = (role) => {
    setCurrentUser({
      name: role === 'pastor' ? 'Pastor / Ministerio' : 'Hermano Colaborador',
      role: role,
      avatar: role === 'pastor' ? 'P' : 'H'
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleUpdatePerson = (updated) => {
    setPeople(prev => prev.map(p => p.id === updated.id ? updated : p));
    setSelectedPerson(updated);
  };

  const handleAddPerson = (newPerson) => {
    const created = {
      ...newPerson,
      id: Date.now().toString(),
      visits: 0,
      prayers: newPerson.prayers || [],
      contacts: newPerson.contacts || []
    };
    setPeople(prev => [created, ...prev]);
    setIsNewPersonModalOpen(false);
  };

  const handleAddContact = (personId, newContact) => {
    setPeople(prev => prev.map(p => {
      if (p.id === personId) {
        return {
          ...p,
          contacts: [
            {
              id: Date.now().toString(),
              date: newContact.date || new Date().toISOString().split('T')[0],
              type: newContact.type,
              comment: newContact.comment,
              pastorComment: currentUser.role === 'pastor' ? newContact.pastorComment || '' : ''
            },
            ...p.contacts
          ]
        };
      }
      return p;
    }));

    if (selectedPerson && selectedPerson.id === personId) {
      setSelectedPerson(prev => ({
        ...prev,
        contacts: [
          {
            id: Date.now().toString(),
            date: newContact.date || new Date().toISOString().split('T')[0],
            type: newContact.type,
            comment: newContact.comment,
            pastorComment: currentUser.role === 'pastor' ? newContact.pastorComment || '' : ''
          },
          ...prev.contacts
        ]
      }));
    }
  };

  const handleUpdatePastorComment = (personId, contactId, text) => {
    setPeople(prev => prev.map(p => {
      if (p.id === personId) {
        const updatedContacts = p.contacts.map(c => c.id === contactId ? { ...c, pastorComment: text } : c);
        return { ...p, contacts: updatedContacts };
      }
      return p;
    }));

    if (selectedPerson && selectedPerson.id === personId) {
      setSelectedPerson(prev => ({
        ...prev,
        contacts: prev.contacts.map(c => c.id === contactId ? { ...c, pastorComment: text } : c)
      }));
    }
  };

  const handleAddPrayer = (personId, prayerCategory, prayerRequest) => {
    if (!prayerRequest.trim()) return;
    const newP = { id: Date.now().toString(), category: prayerCategory, request: prayerRequest, status: 'active' };
    
    setPeople(prev => prev.map(p => {
      if (p.id === personId) {
        return { ...p, prayers: [...p.prayers, newP] };
      }
      return p;
    }));

    if (selectedPerson && selectedPerson.id === personId) {
      setSelectedPerson(prev => ({ ...prev, prayers: [...prev.prayers, newP] }));
    }
  };

  const handleTogglePrayer = (personId, prayerId) => {
    setPeople(prev => prev.map(p => {
      if (p.id === personId) {
        const updated = p.prayers.map(pr => pr.id === prayerId ? { ...pr, status: pr.status === 'active' ? 'answered' : 'active' } : pr);
        return { ...p, prayers: updated };
      }
      return p;
    }));

    if (selectedPerson && selectedPerson.id === personId) {
      setSelectedPerson(prev => ({
        ...prev,
        prayers: prev.prayers.map(pr => pr.id === prayerId ? { ...pr, status: pr.status === 'active' ? 'answered' : 'active' } : pr)
      }));
    }
  };

  const degreeCounts = useMemo(() => {
    const counts = {};
    for (let i = 1; i <= 8; i++) counts[i] = 0;
    people.forEach(p => {
      if (counts[p.degree] !== undefined) counts[p.degree]++;
    });
    return counts;
  }, [people]);

  const channelCounts = useMemo(() => {
    const counts = {};
    CHANNELS.forEach(c => counts[c.id] = 0);
    people.forEach(p => {
      const ch = p.channel || 'Sin Especificar';
      counts[ch] = (counts[ch] || 0) + 1;
    });
    return counts;
  }, [people]);

  const filteredPeople = useMemo(() => {
    return people.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.profile.toLowerCase().includes(searchTerm.toLowerCase());
      const matchDegree = filterDegree === 'ALL' || p.degree === parseInt(filterDegree);
      const matchChannel = filterChannel === 'ALL' || p.channel === filterChannel;
      return matchSearch && matchDegree && matchChannel;
    });
  }, [people, searchTerm, filterDegree, filterChannel]);

  const allPrayers = useMemo(() => {
    const list = [];
    people.forEach(p => {
      (p.prayers || []).forEach(pr => {
        list.push({
          ...pr,
          personId: p.id,
          personName: p.name,
          personDegree: p.degree
        });
      });
    });
    return list;
  }, [people]);

  const filteredPrayers = useMemo(() => {
    if (filterPrayerCat === 'ALL') return allPrayers;
    return allPrayers.filter(pr => pr.category === filterPrayerCat);
  }, [allPrayers, filterPrayerCat]);

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 flex flex-col font-sans">
      {/* HEADER DE LA IGLESIA */}
      <header className="bg-[#2E4A78] text-white shadow-lg sticky top-0 z-30 border-b-4 border-[#C8102E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* BRANDING OFICIAL */}
            <div className="flex items-center space-x-3 bg-white/10 px-3 py-1.5 rounded-2xl backdrop-blur-sm border border-white/10">
              <AlfareroLogo className="h-10 text-white" variant="full" />
            </div>

            {/* USUARIO Y ROL */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-[#1E3456] px-3.5 py-1.5 rounded-full border border-[#5C78A2]/40 shadow-inner">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  currentUser.role === 'pastor' ? 'bg-[#C8102E] text-white' : 'bg-[#3B629B] text-white'
                }`}>
                  {currentUser.avatar}
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-white">{currentUser.name}</div>
                  <div className="text-[10px] text-[#A2B7D4] font-semibold uppercase tracking-wider flex items-center gap-1">
                    {currentUser.role === 'pastor' ? <ShieldCheck className="w-3 h-3 text-[#C8102E]" /> : <User className="w-3 h-3" />}
                    {currentUser.role === 'pastor' ? 'Pastor / Administrador' : 'Hermano Colaborador'}
                  </div>
                </div>
              </div>

              <button 
                onClick={handleLogout}
                title="Cerrar sesión"
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors flex items-center gap-1 text-xs"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>

          </div>

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="flex space-x-1 sm:space-x-3 border-t border-white/10 pt-1 overflow-x-auto text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 py-2.5 px-4 font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'bg-[#F4F6F9] text-[#2E4A78] shadow-md font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-[#C8102E]" />
              Dashboard / Métricas
            </button>

            <button
              onClick={() => setActiveTab('directory')}
              className={`flex items-center gap-2 py-2.5 px-4 font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'directory'
                  ? 'bg-[#F4F6F9] text-[#2E4A78] shadow-md font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4 text-[#C8102E]" />
              Directorio de Almas ({people.length})
            </button>

            <button
              onClick={() => setActiveTab('intercession')}
              className={`flex items-center gap-2 py-2.5 px-4 font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'intercession'
                  ? 'bg-[#F4F6F9] text-[#2E4A78] shadow-md font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-[#C8102E]" />
              Panel de Intercesión ({allPrayers.filter(p => p.status === 'active').length})
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 py-2.5 px-4 font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                activeTab === 'guide'
                  ? 'bg-[#F4F6F9] text-[#2E4A78] shadow-md font-bold'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#3B629B]" />
              Guía & Criterios
            </button>
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'dashboard' && (
          <DashboardView 
            people={people} 
            degreeCounts={degreeCounts} 
            channelCounts={channelCounts}
            onSelectPerson={(p) => setSelectedPerson(p)}
          />
        )}

        {activeTab === 'directory' && (
          <DirectoryView 
            people={filteredPeople}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterDegree={filterDegree}
            setFilterDegree={setFilterDegree}
            filterChannel={filterChannel}
            setFilterChannel={setFilterChannel}
            onOpenNewModal={() => setIsNewPersonModalOpen(true)}
            onSelectPerson={(p) => setSelectedPerson(p)}
          />
        )}

        {activeTab === 'intercession' && (
          <IntercessionView 
            prayers={filteredPrayers}
            filterCategory={filterPrayerCat}
            setFilterCategory={setFilterPrayerCat}
            onTogglePrayer={handleTogglePrayer}
          />
        )}

        {activeTab === 'guide' && <GuideView />}
      </main>

      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-[#2E4A78]">La Casa del Alfarero • Iglesia Cristiana Evangélica</p>
        <p className="text-[11px] text-slate-400 mt-0.5">Plataforma de Seguimiento Pastoral y Acompañamiento de Almas</p>
      </footer>

      {selectedPerson && (
        <PersonDetailModal 
          person={selectedPerson}
          currentUser={currentUser}
          onClose={() => setSelectedPerson(null)}
          onUpdatePerson={handleUpdatePerson}
          onAddContact={handleAddContact}
          onUpdatePastorComment={handleUpdatePastorComment}
          onAddPrayer={handleAddPrayer}
          onTogglePrayer={handleTogglePrayer}
        />
      )}

      {isNewPersonModalOpen && (
        <NewPersonModal 
          onClose={() => setIsNewPersonModalOpen(false)}
          onAddPerson={handleAddPerson}
        />
      )}
    </div>
  );
}

// ==========================================
// PANTALLA DE LOGIN
// ==========================================
function LoginScreen({ onLogin }) {
  return (
    <div className="min-h-screen bg-[#2E4A78] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Círculos decorativos */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#3B629B]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 relative z-10 border border-slate-100 text-center">
        
        {/* LOGO INSTITUCIONAL */}
        <div className="flex justify-center mb-6">
          <AlfareroLogo className="h-16" variant="full" />
        </div>

        <div className="bg-[#F4F6F9] rounded-2xl p-4 border border-slate-200 mb-6 text-xs text-slate-600 leading-relaxed text-left">
          <p className="font-bold text-[#C8102E] mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Acceso al Plataforma de Seguimiento:
          </p>
          Seleccione el tipo de usuario con el que ingresará para registrar interacciones, pedidos de oración o revisar comentarios pastorales.
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onLogin('colaborador')}
            className="w-full group p-4 bg-slate-50 hover:bg-[#3B629B] border border-slate-200 hover:border-[#3B629B] rounded-2xl transition-all duration-200 text-left flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2.5 bg-[#3B629B]/10 text-[#3B629B] rounded-xl group-hover:bg-white group-hover:text-[#3B629B] transition-colors">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-white">Hermano Colaborador</div>
                <div className="text-xs text-slate-500 group-hover:text-slate-200">Cargar llamadas, visitas y peticiones</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => onLogin('pastor')}
            className="w-full group p-4 bg-slate-50 hover:bg-[#C8102E] border border-slate-200 hover:border-[#C8102E] rounded-2xl transition-all duration-200 text-left flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center space-x-3.5">
              <div className="p-2.5 bg-[#C8102E]/10 text-[#C8102E] rounded-xl group-hover:bg-white group-hover:text-[#C8102E] transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-white flex items-center gap-1.5">
                  Pastor / Administrador
                  <span className="text-[10px] bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-white group-hover:text-[#C8102E] font-bold px-1.5 py-0.5 rounded">Acceso Total</span>
                </div>
                <div className="text-xs text-slate-500 group-hover:text-slate-100">Supervisión, notas pastorales y métricas</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="mt-8 text-center text-[11px] text-slate-400 font-medium">
          "Reunir la información de cada persona para mantener una oración consciente."
        </div>
      </div>
    </div>
  );
}

// ==========================================
// VISTA: DASHBOARD
// ==========================================
function DashboardView({ people, degreeCounts, channelCounts, onSelectPerson }) {
  const scheduledVisits = [
    { personName: 'Stella', action: 'Visita presencial agendada para el martes (si no llueve)', details: 'Acompañar junto a Judith.', priority: 'alta' },
    { personName: 'Judith', action: 'Llamada / Saludo indirecto a través de Stella', details: 'Atravesando proceso similar.', priority: 'media' },
    { personName: 'Aldana', action: 'Seguimiento de su nuevo trabajo', details: 'Preguntar por su nuevo inicio laboral.', priority: 'baja' }
  ];

  return (
    <div className="space-y-6">
      
      {/* BANNER BIENVENIDA */}
      <div className="bg-gradient-to-r from-[#2E4A78] to-[#1E3456] text-white p-6 rounded-3xl shadow-lg border border-[#5C78A2]/30 relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-xs font-bold text-[#A2B7D4] uppercase tracking-wider block mb-1">
            La Casa del Alfarero • Ministerio de Seguimiento
          </span>
          <h2 className="text-2xl font-black tracking-tight mb-1">Resumen General de Almas</h2>
          <p className="text-slate-300 text-xs max-w-2xl leading-relaxed">
            Estado de las almas desde la evangelización hasta su integración como servidores activos en la congregación.
          </p>
        </div>
      </div>

      {/* METRICAS PRINCIPALES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-500 font-bold uppercase">Grado 3: Interesadas</div>
            <div className="text-2xl font-black text-[#2E4A78] mt-0.5">{degreeCounts[3]}</div>
            <div className="text-[10px] text-slate-400">Mantienen diálogo</div>
          </div>
          <div className="p-3 bg-blue-50 text-[#3B629B] rounded-2xl">
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-500 font-bold uppercase">Grado 5: Invitadas</div>
            <div className="text-2xl font-black text-[#2E4A78] mt-0.5">{degreeCounts[5]}</div>
            <div className="text-[10px] text-slate-400">Visitaron el templo</div>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-500 font-bold uppercase">Grado 6: Congregantes</div>
            <div className="text-2xl font-black text-[#2E4A78] mt-0.5">{degreeCounts[6]}</div>
            <div className="text-[10px] text-slate-400">En adaptación continua</div>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
            <Heart className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-500 font-bold uppercase">Total Registradas</div>
            <div className="text-2xl font-black text-[#C8102E] mt-0.5">{people.length}</div>
            <div className="text-[10px] text-slate-400">Fichas activas</div>
          </div>
          <div className="p-3 bg-red-50 text-[#C8102E] rounded-2xl">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* EMBUDO DE GRADOS Y ORIGEN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-[#2E4A78] text-base">Embudo de Seguimiento (Grados 1 al 8)</h3>
              <p className="text-xs text-slate-500">Progreso de adaptación y discipulado en la iglesia</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">
              8 Niveles
            </span>
          </div>

          <div className="space-y-3">
            {INITIAL_DEGREES.map((deg) => {
              const count = degreeCounts[deg.id] || 0;
              const percentage = people.length > 0 ? Math.round((count / people.length) * 100) : 0;
              
              return (
                <div key={deg.id} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-700">{deg.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-[#2E4A78]">{count} persona(s)</span>
                      <span className="text-slate-400 text-[10px]">({percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        deg.id >= 6 ? 'bg-emerald-500' : deg.id >= 4 ? 'bg-[#3B629B]' : 'bg-[#C8102E]'
                      }`}
                      style={{ width: `${Math.max(percentage, count > 0 ? 8 : 0)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CANALES DE ORIGEN */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-[#2E4A78] text-base">Canales de Invitación</h3>
            <p className="text-xs text-slate-500">Origen de los contactos registrados</p>
          </div>

          <div className="space-y-3">
            {CHANNELS.map((ch) => {
              const count = channelCounts[ch.id] || 0;
              return (
                <div key={ch.id} className="p-3.5 bg-[#F4F6F9] rounded-2xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-800">{ch.name}</div>
                    <div className="text-[10px] text-slate-500">{ch.desc}</div>
                  </div>
                  <span className="bg-white border border-slate-200 text-[#2E4A78] font-black text-xs px-2.5 py-1 rounded-xl shadow-xs">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* RECORDATORIOS */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#C8102E]" />
            <h3 className="font-bold text-[#2E4A78] text-base">Próximas Visitas y Llamadas</h3>
          </div>
          <span className="text-xs bg-red-50 text-[#C8102E] font-bold px-3 py-1 rounded-full border border-red-100">
            Seguimiento Activo
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scheduledVisits.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#F4F6F9] rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900 text-sm">{item.personName}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                    item.priority === 'alta' ? 'bg-red-100 text-[#C8102E]' : 'bg-blue-100 text-[#3B629B]'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-700">{item.action}</div>
                <p className="text-[11px] text-slate-500 mt-1">{item.details}</p>
              </div>

              <button
                onClick={() => {
                  const p = people.find(x => x.name.toLowerCase().includes(item.personName.toLowerCase()));
                  if (p) onSelectPerson(p);
                }}
                className="text-xs text-[#3B629B] font-bold hover:text-[#2E4A78] flex items-center gap-1 pt-2 border-t border-slate-200/80"
              >
                Ver Ficha Individual <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ==========================================
// VISTA: DIRECTORIO
// ==========================================
function DirectoryView({ 
  people, 
  searchTerm, 
  setSearchTerm, 
  filterDegree, 
  setFilterDegree, 
  filterChannel, 
  setFilterChannel, 
  onOpenNewModal, 
  onSelectPerson 
}) {
  return (
    <div className="space-y-6">
      
      {/* BARRA DE ACCIONES */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-black text-[#2E4A78]">Directorio de Almas</h2>
            <p className="text-xs text-slate-500">Listado completo de personas en proceso de atención y discipulado</p>
          </div>

          <button
            onClick={onOpenNewModal}
            className="bg-[#C8102E] hover:bg-[#9B0B21] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-2xl shadow-md shadow-red-900/10 flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            NUEVA PERSONA EN SEGUIMIENTO
          </button>
        </div>

        {/* FILTROS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text"
              placeholder="Buscar por nombre o perfil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B629B] bg-[#F4F6F9]"
            />
          </div>

          <div>
            <select
              value={filterDegree}
              onChange={(e) => setFilterDegree(e.target.value)}
              className="w-full py-2 px-3 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B629B] bg-[#F4F6F9] text-slate-700 font-medium"
            >
              <option value="ALL">Todos los Grados (1 al 8)</option>
              {INITIAL_DEGREES.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={filterChannel}
              onChange={(e) => setFilterChannel(e.target.value)}
              className="w-full py-2 px-3 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B629B] bg-[#F4F6F9] text-slate-700 font-medium"
            >
              <option value="ALL">Todos los Canales de Invitación</option>
              {CHANNELS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* TARJETAS */}
      {people.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
          <Users className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="text-slate-600 font-semibold">No se encontraron personas con esos criterios.</p>
          <button 
            onClick={() => { setSearchTerm(''); setFilterDegree('ALL'); setFilterChannel('ALL'); }}
            className="text-xs text-[#3B629B] font-bold underline"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {people.map((person) => (
            <div 
              key={person.id}
              onClick={() => onSelectPerson(person)}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#3B629B] transition-all duration-200 p-5 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#3B629B] transition-colors">
                      {person.name}
                    </h3>
                    <span className="inline-block text-[10px] bg-slate-100 text-slate-600 font-semibold px-2.5 py-0.5 rounded-md border border-slate-200 mt-1">
                      Canal: {person.channel || 'Sin definir'}
                    </span>
                  </div>

                  <span className={`text-[11px] font-black px-3 py-1 rounded-full border ${
                    person.degree >= 6 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                      : person.degree >= 4 
                      ? 'bg-amber-50 text-amber-800 border-amber-200' 
                      : 'bg-red-50 text-[#C8102E] border-red-200'
                  }`}>
                    Grado {person.degree}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {person.profile}
                </p>

                {person.prayers && person.prayers.length > 0 && (
                  <div className="bg-[#F4F6F9] p-3 rounded-2xl border border-slate-200/80 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Motivos de Oración:</span>
                    <div className="space-y-1">
                      {person.prayers.slice(0, 2).map((pr, idx) => (
                        <div key={idx} className="text-slate-700 truncate flex items-center gap-1.5 text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0"></span>
                          <span className="font-bold text-[#2E4A78]">[{pr.category}]</span> {pr.request}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{person.contacts?.length || 0} interacciones</span>
                </div>
                <span className="text-[#3B629B] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Ver Ficha <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

// ==========================================
// MODAL DE FICHA INDIVIDUAL
// ==========================================
function PersonDetailModal({ 
  person, 
  currentUser, 
  onClose, 
  onUpdatePerson, 
  onAddContact, 
  onUpdatePastorComment,
  onAddPrayer,
  onTogglePrayer
}) {
  const [activeSubTab, setActiveSubTab] = useState('profile');
  
  const [newContactType, setNewContactType] = useState('WhatsApp');
  const [newContactComment, setNewContactComment] = useState('');
  const [newContactPastorComment, setNewContactPastorComment] = useState('');
  const [newContactDate, setNewContactDate] = useState(new Date().toISOString().split('T')[0]);

  const [newPrayerCategory, setNewPrayerCategory] = useState('Salud');
  const [newPrayerRequest, setNewPrayerRequest] = useState('');

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfileText, setEditedProfileText] = useState(person.profile);
  const [editedHealthText, setEditedHealthText] = useState(person.healthNotes || '');

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (!newContactComment.trim()) return;
    
    onAddContact(person.id, {
      date: newContactDate,
      type: newContactType,
      comment: newContactComment,
      pastorComment: newContactPastorComment
    });

    setNewContactComment('');
    setNewContactPastorComment('');
  };

  const handleSubmitPrayer = (e) => {
    e.preventDefault();
    if (!newPrayerRequest.trim()) return;
    onAddPrayer(person.id, newPrayerCategory, newPrayerRequest);
    setNewPrayerRequest('');
  };

  const handleSaveProfileEdit = () => {
    onUpdatePerson({
      ...person,
      profile: editedProfileText,
      healthNotes: editedHealthText
    });
    setIsEditingProfile(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2E4A78]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* HEADER MODAL */}
        <div className="bg-[#2E4A78] text-white p-6 flex items-start justify-between shrink-0 border-b-4 border-[#C8102E]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-black">{person.name}</h2>
              <span className="bg-[#C8102E] text-white text-xs font-bold px-3 py-0.5 rounded-full">
                Grado {person.degree}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 flex items-center gap-2">
              <span>Canal de Invitación: <strong className="text-white">{person.channel || 'Sin especificar'}</strong></span>
              <span>•</span>
              <span>Visitas: <strong className="text-white">{person.visits || 0}</strong></span>
            </p>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CAMBIO DE GRADO */}
        <div className="bg-[#F4F6F9] px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs shrink-0">
          <span className="font-bold text-[#2E4A78]">Actualizar Grado de la Persona:</span>
          <select
            value={person.degree}
            onChange={(e) => onUpdatePerson({ ...person, degree: parseInt(e.target.value) })}
            className="bg-white border border-slate-300 font-bold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#3B629B]"
          >
            {INITIAL_DEGREES.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        {/* PESTAÑAS */}
        <div className="flex border-b border-slate-200 bg-white px-6 shrink-0 text-xs sm:text-sm">
          <button
            onClick={() => setActiveSubTab('profile')}
            className={`py-3 px-4 font-bold border-b-2 flex items-center gap-2 ${
              activeSubTab === 'profile' ? 'border-[#C8102E] text-[#C8102E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <User className="w-4 h-4" /> Perfil & Contexto
          </button>

          <button
            onClick={() => setActiveSubTab('prayers')}
            className={`py-3 px-4 font-bold border-b-2 flex items-center gap-2 ${
              activeSubTab === 'prayers' ? 'border-[#C8102E] text-[#C8102E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Heart className="w-4 h-4 text-[#C8102E]" /> Pedidos de Oración ({person.prayers?.length || 0})
          </button>

          <button
            onClick={() => setActiveSubTab('contacts')}
            className={`py-3 px-4 font-bold border-b-2 flex items-center gap-2 ${
              activeSubTab === 'contacts' ? 'border-[#C8102E] text-[#C8102E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="w-4 h-4" /> Bitácora de Contactos ({person.contacts?.length || 0})
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {activeSubTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#2E4A78] text-base">Información y Descripción General</h3>
                {!isEditingProfile ? (
                  <button 
                    onClick={() => setIsEditingProfile(true)}
                    className="text-xs text-[#3B629B] font-bold hover:underline flex items-center gap-1"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Editar Descripción
                  </button>
                ) : (
                  <button 
                    onClick={handleSaveProfileEdit}
                    className="text-xs bg-[#3B629B] text-white px-3 py-1.5 rounded-xl font-bold flex items-center gap-1"
                  >
                    <Save className="w-3.5 h-3.5" /> Guardar
                  </button>
                )}
              </div>

              {!isEditingProfile ? (
                <div className="space-y-4">
                  <div className="bg-[#F4F6F9] p-4 rounded-2xl border border-slate-200 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {person.profile || 'Sin información de perfil registrada.'}
                  </div>

                  <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-sm space-y-1">
                    <span className="font-bold text-amber-900 text-xs uppercase tracking-wider block">Observaciones de Salud:</span>
                    <p className="text-amber-800">{person.healthNotes || 'No presenta complicaciones médicas de gravedad.'}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Perfil y Situación Personal:</label>
                    <textarea 
                      rows={5}
                      value={editedProfileText}
                      onChange={(e) => setEditedProfileText(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Observaciones de Salud:</label>
                    <input 
                      type="text"
                      value={editedHealthText}
                      onChange={(e) => setEditedHealthText(e.target.value)}
                      className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeSubTab === 'prayers' && (
            <div className="space-y-6">
              <form onSubmit={handleSubmitPrayer} className="bg-[#F4F6F9] p-4 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-[#2E4A78] block">Añadir Nuevo Motivo de Oración:</span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={newPrayerCategory}
                    onChange={(e) => setNewPrayerCategory(e.target.value)}
                    className="text-xs border border-slate-300 rounded-xl p-2.5 bg-white font-semibold text-slate-700"
                  >
                    <option value="Salud">Salud</option>
                    <option value="Familia">Familia / Cónyuge</option>
                    <option value="Trabajo">Trabajo / Finanzas</option>
                    <option value="Estudios">Estudios</option>
                    <option value="Adicciones">Adicciones</option>
                    <option value="Espiritual">Espiritual / Adaptación</option>
                  </select>

                  <input 
                    type="text"
                    placeholder="Escriba el motivo de oración..."
                    value={newPrayerRequest}
                    onChange={(e) => setNewPrayerRequest(e.target.value)}
                    className="flex-1 text-xs border border-slate-300 rounded-xl p-2.5 focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
                  />

                  <button 
                    type="submit"
                    className="bg-[#C8102E] hover:bg-[#9B0B21] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Guardar
                  </button>
                </div>
              </form>

              <div className="space-y-2">
                {(!person.prayers || person.prayers.length === 0) ? (
                  <p className="text-xs text-slate-400 text-center py-6">No hay motivos de oración registrados.</p>
                ) : (
                  person.prayers.map((pr) => (
                    <div 
                      key={pr.id}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                        pr.status === 'answered' ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => onTogglePrayer(person.id, pr.id)}
                          className={`p-1 rounded-lg transition-colors ${
                            pr.status === 'answered' ? 'text-emerald-600 bg-emerald-100' : 'text-slate-300 hover:text-emerald-600'
                          }`}
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <div>
                          <div className="text-xs font-bold text-slate-800">
                            <span className="text-[#3B629B] font-bold mr-1 font-mono">[{pr.category}]</span>
                            <span className={pr.status === 'answered' ? 'line-through text-slate-400' : ''}>{pr.request}</span>
                          </div>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        pr.status === 'answered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {pr.status === 'answered' ? 'Respondida' : 'Activa'}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeSubTab === 'contacts' && (
            <div className="space-y-6">
              <form onSubmit={handleSubmitContact} className="bg-[#F4F6F9] p-4 rounded-2xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-[#2E4A78] block">Registrar Nuevo Contacto:</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 font-bold mb-1">Fecha:</label>
                    <input 
                      type="date"
                      value={newContactDate}
                      onChange={(e) => setNewContactDate(e.target.value)}
                      className="w-full text-xs p-2 border border-slate-300 rounded-xl bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 font-bold mb-1">Tipo de Contacto:</label>
                    <select
                      value={newContactType}
                      onChange={(e) => setNewContactType(e.target.value)}
                      className="w-full text-xs p-2 border border-slate-300 rounded-xl bg-white font-medium"
                    >
                      <option value="WhatsApp">Conversación de WhatsApp</option>
                      <option value="Llamada">Llamada Telefónica</option>
                      <option value="Visita">Visita Presencial</option>
                      <option value="Encuentro en Iglesia">Encuentro en la Iglesia</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 font-bold mb-1">Comentarios para el Pastor / Equipo:</label>
                  <textarea 
                    rows={2}
                    placeholder="Detalles de la charla, estado anímico, nuevos temas..."
                    value={newContactComment}
                    onChange={(e) => setNewContactComment(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
                  />
                </div>

                {currentUser.role === 'pastor' && (
                  <div>
                    <label className="block text-[11px] text-[#C8102E] font-bold mb-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Comentario del Pastor (Opcional):
                    </label>
                    <input 
                      type="text"
                      placeholder="Instrucción u observación pastoral..."
                      value={newContactPastorComment}
                      onChange={(e) => setNewContactPastorComment(e.target.value)}
                      className="w-full text-xs p-2.5 border border-red-200 rounded-xl bg-red-50/50 focus:ring-2 focus:ring-[#C8102E] focus:outline-none"
                    />
                  </div>
                )}

                <button 
                  type="submit"
                  className="bg-[#2E4A78] hover:bg-[#1E3456] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors w-full"
                >
                  Guardar Registro de Contacto
                </button>
              </form>

              <div className="space-y-4">
                <h4 className="font-bold text-[#2E4A78] text-xs uppercase tracking-wider">Historial de Interacciones:</h4>

                {(!person.contacts || person.contacts.length === 0) ? (
                  <p className="text-xs text-slate-400 text-center py-6">No hay registros de contacto previos.</p>
                ) : (
                  person.contacts.map((c) => (
                    <div key={c.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-[#3B629B]">{c.type}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500">{c.date}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                        {c.comment}
                      </p>

                      <div className="mt-2 pt-2 border-t border-slate-100">
                        {currentUser.role === 'pastor' ? (
                          <div className="bg-red-50/60 p-2.5 rounded-xl border border-red-100 text-xs space-y-1">
                            <span className="font-bold text-[#C8102E] text-[10px] uppercase flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3" /> Comentario del Pastor (Editable):
                            </span>
                            <input 
                              type="text"
                              value={c.pastorComment || ''}
                              onChange={(e) => onUpdatePastorComment(person.id, c.id, e.target.value)}
                              placeholder="Escriba indicación pastoral aquí..."
                              className="w-full text-xs p-1.5 border border-red-200 rounded-lg bg-white"
                            />
                          </div>
                        ) : (
                          c.pastorComment && (
                            <div className="bg-red-50/80 p-2.5 rounded-xl border border-red-100 text-xs">
                              <span className="font-bold text-[#C8102E] text-[10px] uppercase flex items-center gap-1 mb-0.5">
                                <ShieldCheck className="w-3 h-3" /> Respuesta / Nota Pastoral:
                              </span>
                              <p className="text-slate-800 font-medium italic">{c.pastorComment}</p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

// ==========================================
// MODAL NUEVA PERSONA
// ==========================================
function NewPersonModal({ onClose, onAddPerson }) {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState(3);
  const [channel, setChannel] = useState('Evangelismo');
  const [assignedTo, setAssignedTo] = useState('Equipo General');
  const [profile, setProfile] = useState('');
  const [healthNotes, setHealthNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddPerson({
      name,
      degree: parseInt(degree),
      channel,
      assignedTo,
      profile,
      healthNotes
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2E4A78]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        <div className="bg-[#2E4A78] text-white p-5 flex justify-between items-center border-b-4 border-[#C8102E]">
          <h3 className="font-black text-base flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#C8102E]" />
            Nueva Persona en Seguimiento
          </h3>
          <button onClick={onClose} className="p-1 text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Nombre Completo *</label>
            <input 
              type="text" 
              required
              placeholder="Ej: María González"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Grado Inicial</label>
              <select 
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl bg-white font-semibold"
              >
                {INITIAL_DEGREES.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Canal de Invitación</label>
              <select 
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-xl bg-white"
              >
                {CHANNELS.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Perfil y Contexto Personal</label>
            <textarea 
              rows={3}
              placeholder="Sensibilidad, trabajo, luchas familiares, disponibilidad..."
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Observaciones de Salud</label>
            <input 
              type="text"
              placeholder="Ej: Presión alta, operaciones pendientes..."
              value={healthNotes}
              onChange={(e) => setHealthNotes(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#3B629B] focus:outline-none"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-xl text-slate-600 hover:bg-slate-50 font-bold"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="px-5 py-2 bg-[#C8102E] hover:bg-[#9B0B21] text-white rounded-xl font-bold shadow-md shadow-red-900/10"
            >
              Crear Ficha
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

// ==========================================
// VISTA: PANEL DE INTERCESIÓN
// ==========================================
function IntercessionView({ prayers, filterCategory, setFilterCategory, onTogglePrayer }) {
  const categories = ['ALL', 'Salud', 'Familia', 'Trabajo', 'Estudios', 'Adicciones', 'Espiritual'];

  return (
    <div className="space-y-6">
      
      <div className="bg-gradient-to-r from-[#2E4A78] via-[#1E3456] to-[#C8102E] text-white p-6 rounded-3xl shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-6 h-6 text-red-200" />
          <h2 className="text-xl font-black">Panel Consolidado de Intercesión</h2>
        </div>
        <p className="text-xs text-slate-200 max-w-2xl leading-relaxed">
          Centralización de los motivos de oración de todas las personas en seguimiento para su uso en cultos de oración, reuniones de líderes y ayunos de la congregación.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        <span className="font-bold text-slate-500 shrink-0">Categorías:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
              filterCategory === cat
                ? 'bg-[#C8102E] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'ALL' ? 'Todas las Peticiones' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prayers.length === 0 ? (
          <div className="col-span-2 bg-white p-8 rounded-3xl border border-slate-200 text-center text-slate-500 text-xs font-semibold">
            No hay peticiones cargadas para la categoría seleccionada.
          </div>
        ) : (
          prayers.map((pr) => (
            <div 
              key={pr.id}
              className={`p-4 rounded-3xl border transition-all flex flex-col justify-between space-y-3 ${
                pr.status === 'answered' ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-[#2E4A78] text-sm">{pr.personName}</span>
                  <span className="text-[10px] bg-red-50 text-[#C8102E] border border-red-200 font-black px-2.5 py-0.5 rounded-full">
                    {pr.category}
                  </span>
                </div>

                <p className={`text-xs text-slate-700 leading-relaxed ${pr.status === 'answered' ? 'line-through' : ''}`}>
                  {pr.request}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">Grado {pr.personDegree}</span>

                <button
                  onClick={() => onTogglePrayer(pr.personId, pr.id)}
                  className={`flex items-center gap-1 font-bold text-[11px] px-3 py-1 rounded-xl transition-colors ${
                    pr.status === 'answered'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  {pr.status === 'answered' ? 'Respondida' : 'Marcar Respondida'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

// ==========================================
// VISTA: GUÍA Y CRITERIOS
// ==========================================
function GuideView() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-black text-[#2E4A78] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#C8102E]" />
          Funciones del Ministerio de Seguimiento
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          El presente registro de seguimientos individuales reúne la información de cada persona con la que se mantiene el contacto con tres objetivos estratégicos clave:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <li className="p-4 bg-[#F4F6F9] rounded-2xl border border-slate-200 text-slate-800 font-medium space-y-1">
            <strong className="text-[#2E4A78] font-bold block">1. Oración Consciente:</strong> Recordar necesidades, problemas, metas y condiciones cuando la memoria falle.
          </li>
          <li className="p-4 bg-[#F4F6F9] rounded-2xl border border-slate-200 text-slate-800 font-medium space-y-1">
            <strong className="text-[#2E4A78] font-bold block">2. Análisis de Patrones:</strong> Detectar problemas y encontrar soluciones que edifiquen el ministerio a nivel particular y general.
          </li>
          <li className="p-4 bg-[#F4F6F9] rounded-2xl border border-slate-200 text-slate-800 font-medium space-y-1">
            <strong className="text-[#2E4A78] font-bold block">3. Planificación Estratégica:</strong> Establecer criterios de prioridad para visitas, contactos y ayudas.
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-black text-[#2E4A78] text-base border-b border-slate-100 pb-2">
          Definición Formal de los 8 Grados
        </h3>

        <div className="space-y-3 text-xs">
          {INITIAL_DEGREES.map((deg) => (
            <div key={deg.id} className="p-3.5 bg-[#F4F6F9] rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">{deg.name}</div>
                <div className="text-slate-600">{deg.desc}</div>
              </div>
              <span className="shrink-0 bg-white px-3 py-1 rounded-xl border border-slate-200 text-[#2E4A78] font-black text-[11px] self-start sm:self-center shadow-xs">
                Grado {deg.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-black text-[#2E4A78] text-base border-b border-slate-100 pb-2">
          Canales de Invitación y Origen
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {CHANNELS.map((ch) => (
            <div key={ch.id} className="p-4 bg-[#F4F6F9] rounded-2xl border border-slate-200 space-y-1">
              <div className="font-bold text-[#2E4A78]">{ch.name}</div>
              <p className="text-slate-600">{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
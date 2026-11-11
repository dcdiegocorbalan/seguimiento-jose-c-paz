<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Seguimiento | La Casa del Alfarero</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brandRed: '#C8102E',
                        brandBlue: '#2E4A78',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800 antialiased">
    <div id="root"></div>

    <script type="text/babel">
        function App() {
            const [userRole, setUserRole] = React.useState('colaborador');
            const [activeTab, setActiveTab] = React.useState('dashboard');
            const [selectedPerson, setSelectedPerson] = React.useState(null);
            const [searchTerm, setSearchTerm] = React.useState('');
            const [filterGrado, setFilterGrado] = React.useState('todos');
            const [filterCanal, setFilterCanal] = React.useState('todos');
            const [showAddModal, setShowAddModal] = React.useState(false);
            const [newContactModal, setNewContactModal] = React.useState(false);

            // Estado inicial de las personas basado en el documento institucional
            const [personas, setPersonas] = React.useState(() => {
                const saved = localStorage.getItem('alfarero_personas');
                if (saved) return JSON.parse(saved);
                return [
                    {
                        id: 1,
                        nombre: "Stella",
                        grado: 6,
                        gradoTexto: "Grado 6: Congregante",
                        canal: "Visita",
                        visitas: 1,
                        perfil: "Sensible, estudiosa, busca superarse profesionalmente, muy amable, necesita mucha contención y compañía. Sus luchas más grandes son la depresión, rechazo y soledad. Es humilde, tranquila, pero valora sentirse escuchada. Disfruta de planes tranquilos y charlar sobre las experiencias que tuvo y tienen otros en la fe. Vive sola en un mismo terreno con su madre, cada una con su espacio. Su hermano la ayuda mucho con las reparaciones de la casa. Tiene un hijo que se congrega activamente en otra iglesia y una hija en Luján que aún no se congrega.",
                        pedidosOracion: [
                            { categoria: "Salud", texto: "Presión alta, diabetes." },
                            { categoria: "Cónyuge", texto: "Respuesta por la actual pareja." },
                            { categoria: "Estudios", texto: "Enfermería. Aprobar materias difíciles como inglés." },
                            { categoria: "Trabajo", texto: "Búsqueda laboral." }
                        ],
                        datosConversacion: "Lucha con la soledad. Reprobó inglés. Está yendo a un particular para ir a recuperatorio. Consiguió un nuevo trabajo.",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: [
                            { fecha: "Mediodía del 11/10/26", tipo: "Conversación de WhatsApp", pastor: "La contacté para saber cómo estaba luego de no mantener contacto por el accidente. Ese día me dijo que estaba yendo a la iglesia y orando por mi esposo. Me animó más ella en esa ocasión." },
                            { fecha: "Mañana del 07/11/26", tipo: "Conversación de WhatsApp", pastor: "Stella se siente muy agradecida y acompañada con la iglesia actualmente. Una palabra que llegó a decirme es que le damos “mucha esperanza e inspiración” como matrimonio." },
                            { fecha: "Tarde del 10/11/26", tipo: "Conversación de WhatsApp", pastor: "Con respecto a su materia de inglés, se siente tranquila de que si no aprueba recupera en diciembre y arreglé apoyarla si así pasa. Como Judith dejó de responderme, le pregunté por ella y me pidió que estemos en oración porque identifica que Judith está en el mismo proceso que está ella hace unos meses, textualmente “no encuentra su lugar”. La anime a que siga animándola. También agendé una visita con ella para el martes si no llueve. La idea es que esté Judith." }
                        ]
                    },
                    {
                        id: 2,
                        nombre: "Judith",
                        grado: 5,
                        gradoTexto: "Grado 5: Invitada",
                        canal: "Visita",
                        visitas: 0,
                        perfil: "Amable, proactiva, atareada. Doble ánimo, indecisa con congregarse. Es amiga cercana y vecina de Stella.",
                        pedidosOracion: [
                            { categoria: "Salud", texto: "Presión alta, diabetes." }
                        ],
                        datosConversacion: "Lucha con la diabetes y establecer hábitos de tratamiento.",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: [
                            { fecha: "Tarde del 22/07/26", tipo: "Conversación de WhatsApp", pastor: "La contacté para invitarla una vez más a la iglesia. Me comentó que tenía dolor por una extracción de muela. Le dije que estaríamos orando y agradeció." },
                            { fecha: "Mañana del 28/07/26", tipo: "Conversación de WhatsApp", pastor: "Le dejé un mensaje y un audio. No respondió." },
                            { fecha: "Tarde del 12/08/26", tipo: "Conversación de WhatsApp", pastor: "Le mandé una invitación a la iglesia. No respondió. No continué insistiendo por lo que dijo que no continuemos mandando si no responden mensajes. Me enfoqué en Stella con el pensamiento de que ella anime a Judith ya que son amigas muy cercanas." }
                        ]
                    },
                    {
                        id: 3,
                        nombre: "Aldana",
                        grado: 5,
                        gradoTexto: "Grado 5: Visitante",
                        canal: "Evangelismo",
                        visitas: 0,
                        perfil: "Sensible, muy creativa, divertida, alegre, emprendedora. Es conocedora del evangelio, volvió a congregarse en la iglesia de la que se había apartado luego de llegar al compañerismo. Vive sola en un departamento en San Miguel, sus padres viven en José C. Paz muy cerca de la iglesia. Lucha principalmente con la depresión. Estudia AT, emprende y busca una mejor oportunidad laboral. Le apasiona el arte.",
                        pedidosOracion: [
                            { categoria: "Trabajo", texto: "Mejor oportunidad laboral." }
                        ],
                        datosConversacion: "Consiguió un nuevo trabajo.",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: []
                    },
                    {
                        id: 4,
                        nombre: "Yanina",
                        grado: 3,
                        gradoTexto: "Grado 3: Interesada",
                        canal: "Evangelismo",
                        visitas: 0,
                        perfil: "Muy tranquila, apacible, tal vez resignada ante las dificultades, pero muy abierta a escuchar palabras de aliento y esperanza.",
                        pedidosOracion: [
                            { categoria: "Salud / Hija", texto: "Su hija Justina tiene que operarse la rodilla. Aún esperan confirmación de turno para diciembre." }
                        ],
                        datosConversacion: "",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: []
                    },
                    {
                        id: 5,
                        nombre: "Paola Ramos",
                        grado: 3,
                        gradoTexto: "Grado 3: Interesada",
                        canal: "Evangelismo",
                        visitas: 0,
                        perfil: "Sincera, directa, extrovertida. Entra fácilmente en confianza. Es conocedora del evangelio, está apartada pero siente nostalgia por un pasado juvenil activo en las actividades de la iglesia. Tal vez esté decepcionada con personas de la iglesia. Lucha para mantener la economía de su hogar con tres hijos y un marido ausente.",
                        pedidosOracion: [
                            { categoria: "Hijos", texto: "Sus hijos: Skyler, Owen y Aiton." }
                        ],
                        datosConversacion: "Preguntar por sus hijos y su emprendimiento.",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: []
                    },
                    {
                        id: 6,
                        nombre: "Leila",
                        grado: 3,
                        gradoTexto: "Grado 3: Interesada",
                        canal: "Visita",
                        visitas: 0,
                        perfil: "Muy amable, madre joven de un niño. Abierta a escuchar con interés y curiosidad. Conoce de Dios pero nunca se congregó en una iglesia, es de familia católica.",
                        pedidosOracion: [
                            { categoria: "Adicciones", texto: "Su hermano Joel Almaraz." }
                        ],
                        datosConversacion: "",
                        comentariosPastor: "No presenta un problema de salud grave.",
                        historial: []
                    }
                ];
            });

            React.useEffect(() => {
                localStorage.setItem('alfarero_personas', JSON.stringify(personas));
            }, [personas]);

            // Filtrado de personas
            const filteredPersonas = personas.filter(p => {
                const matchName = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || p.perfil.toLowerCase().includes(searchTerm.toLowerCase());
                const matchGrado = filterGrado === 'todos' || p.grado.toString() === filterGrado;
                const matchCanal = filterCanal === 'todos' || p.canal.toLowerCase() === filterCanal.toLowerCase();
                return matchName && matchGrado && matchCanal;
            });

            const gradosList = [
                { grado: 1, nombre: "Grado 1: Evangelizada" },
                { grado: 2, nombre: "Grado 2: Contactada" },
                { grado: 3, nombre: "Grado 3: Interesada" },
                { grado: 4, nombre: "Grado 4: Dispuesta" },
                { grado: 5, nombre: "Grado 5: Invitada" },
                { grado: 6, nombre: "Grado 6: Congregante" },
                { grado: 7, nombre: "Grado 7: Miembro" },
                { grado: 8, nombre: "Grado 8: Servidor" },
            ];

            return (
                <div className="min-h-screen flex flex-col bg-gray-100">
                    {/* Header */}
                    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
                        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-3">
                                <img src="Logo La Casa del Alfarero.png" alt="La Casa del Alfarero" className="h-12 object-contain" onError={(e)=>{e.target.style.display='none';}} />
                                <div>
                                    <h1 className="text-lg font-bold text-gray-900 leading-tight">La Casa del Alfarero</h1>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Ministerio de Seguimiento</p>
                                </div>
                            </div>

                            {/* Navegación y Rol */}
                            <div className="flex items-center gap-3 flex-wrap justify-center">
                                <nav className="flex bg-gray-100 p-1 rounded-lg text-sm font-medium">
                                    <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-1.5 rounded-md transition ${activeTab === 'dashboard' ? 'bg-brandRed text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Dashboard</button>
                                    <button onClick={() => setActiveTab('personas')} className={`px-3 py-1.5 rounded-md transition ${activeTab === 'personas' ? 'bg-brandRed text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Personas</button>
                                    <button onClick={() => setActiveTab('oracion')} className={`px-3 py-1.5 rounded-md transition ${activeTab === 'oracion' ? 'bg-brandRed text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Intercesión</button>
                                    <button onClick={() => setActiveTab('grados')} className={`px-3 py-1.5 rounded-md transition ${activeTab === 'grados' ? 'bg-brandRed text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Criterios</button>
                                </nav>

                                <div className="flex items-center bg-gray-200 p-1 rounded-lg">
                                    <span className="text-xs font-semibold px-2 text-gray-600">Rol:</span>
                                    <button 
                                        onClick={() => setUserRole(userRole === 'colaborador' ? 'pastor' : 'colaborador')} 
                                        className={`text-xs px-3 py-1 rounded font-bold transition ${userRole === 'pastor' ? 'bg-brandBlue text-white shadow' : 'bg-white text-gray-700'}`}>
                                        {userRole === 'pastor' ? 'Pastor / Admin' : 'Colaborador'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Contenido Principal */}
                    <main className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
                        {activeTab === 'dashboard' && (
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-brandBlue to-blue-900 rounded-2xl p-6 text-white shadow-lg">
                                    <h2 className="text-2xl font-bold mb-2">Panel de Seguimiento Ministerial</h2>
                                    <p className="text-blue-100 text-sm max-w-2xl">
                                        "Recordar todo lo relacionado a las necesidades, problemas, metas y condiciones de las almas para mantener una oración consciente y una conversación activa."
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <p className="text-sm text-gray-500 font-medium">Total en Seguimiento</p>
                                        <p className="text-3xl font-extrabold text-brandRed mt-1">{personas.length}</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <p className="text-sm text-gray-500 font-medium">Grado 3 (Interesadas)</p>
                                        <p className="text-3xl font-extrabold text-brandBlue mt-1">{personas.filter(p => p.grado === 3).length}</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <p className="text-sm text-gray-500 font-medium">Grado 5 y 6 (Invitadas/Congregantes)</p>
                                        <p className="text-3xl font-extrabold text-emerald-600 mt-1">{personas.filter(p => p.grado === 5 || p.grado === 6).length}</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <p className="text-sm text-gray-500 font-medium">Pedidos de Oración Activos</p>
                                        <p className="text-3xl font-extrabold text-amber-600 mt-1">{personas.reduce((acc, p) => acc + p.pedidosOracion.length, 0)}</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Embudo de Seguimiento por Grados</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                        {gradosList.map(g => {
                                            const count = personas.filter(p => p.grado === g.grado).length;
                                            return (
                                                <div key={g.grado} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                                                    <div>
                                                        <span className="text-xs font-bold text-gray-500 uppercase">Grado {g.grado}</span>
                                                        <h4 className="font-semibold text-gray-800 text-sm">{g.nombre.split(': ')[1]}</h4>
                                                    </div>
                                                    <span className="bg-brandRed text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">
                                                        {count}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'personas' && (
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto flex-1">
                                        <input 
                                            type="text" 
                                            placeholder="Buscar por nombre o perfil..." 
                                            value={searchTerm} 
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brandRed w-full sm:w-64"
                                        />
                                        <select 
                                            value={filterGrado} 
                                            onChange={(e) => setFilterGrado(e.target.value)}
                                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                                        >
                                            <option value="todos">Todos los Grados</option>
                                            {gradosList.map(g => (
                                                <option key={g.grado} value={g.grado.toString()}>{g.nombre}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPersonas.map(persona => (
                                        <div key={persona.id} className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between overflow-hidden hover:shadow-md transition">
                                            <div className="p-5 border-b border-gray-100">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900">{persona.nombre}</h3>
                                                    <span className="bg-blue-50 text-brandBlue text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200">
                                                        {persona.gradoTexto}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-3 font-medium">Canal: {persona.canal} {persona.visitas > 0 ? `• Visitas: ${persona.visitas}` : ''}</p>
                                                <p className="text-sm text-gray-600 line-clamp-3">{persona.perfil}</p>
                                            </div>

                                            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                                                <span className="text-xs text-gray-500 font-semibold">{persona.pedidosOracion.length} pedidos de oración</span>
                                                <button 
                                                    onClick={() => setSelectedPerson(persona)}
                                                    className="text-xs bg-brandRed text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-red-700 transition"
                                                >
                                                    Ver Ficha Completa
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'oracion' && (
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">Panel de Intercesión Comunitaria</h2>
                                    <p className="text-gray-600 text-sm mb-6">Lista centralizada de motivos de oración extraídos de las fichas para mantener una oración consciente.</p>

                                    <div className="space-y-4">
                                        {personas.map(persona => (
                                            persona.pedidosOracion.length > 0 && (
                                                <div key={persona.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h4 className="font-bold text-brandBlue text-base">{persona.nombre}</h4>
                                                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-medium">{persona.gradoTexto}</span>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        {persona.pedidosOracion.map((p, idx) => (
                                                            <li key={idx}><span className="font-semibold">{p.categoria}:</span> {p.texto}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'grados' && (
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Criterios Institucionales de Seguimiento</h2>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 1 (Evangelizada):</strong> La persona escucha el mensaje y no lo rechaza.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 2 (Contactada):</strong> La persona brinda sus datos de contacto.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 3 (Interesada):</strong> Responde el mensaje y se mantiene conversación. Se invita a la iglesia.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 4 (Dispuesta):</strong> Quiere ir a la iglesia pero por causa de fuerza mayor no puede (tiempo, trabajo, dudas).</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 5 (Invitada):</strong> Logra llegar a la iglesia y conocerla.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 6 (Congregante):</strong> Decide congregarse, requiere acompañamiento en su proceso de adaptación.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 7 (Miembro):</strong> Se congrega durante seis meses de forma decidida.</div>
                                    <div className="p-3 bg-gray-50 rounded-lg border"><strong>Grado 8 (Servidor):</strong> Aspiración final, se suma a pescar almas.</div>
                                </div>
                            </div>
                        )}
                    </main>

                    {/* Modal de Ficha Individual */}
                    {selectedPerson && (
                        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
                                <div className="flex justify-between items-start border-b pb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{selectedPerson.nombre}</h2>
                                        <p className="text-sm font-semibold text-brandBlue">{selectedPerson.gradoTexto} • Canal: {selectedPerson.canal}</p>
                                    </div>
                                    <button onClick={() => setSelectedPerson(null)} className="text-gray-400 hover:text-gray-600 font-bold text-xl">✕</button>
                                </div>

                                <div className="space-y-4 text-sm">
                                    <div>
                                        <h4 className="font-bold text-gray-700 mb-1">Perfil de la Persona</h4>
                                        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedPerson.perfil}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-700 mb-1">Pedidos de Oración</h4>
                                        <div className="space-y-1">
                                            {selectedPerson.pedidosOracion.map((p, idx) => (
                                                <div key={idx} className="bg-amber-50 text-amber-900 p-2 rounded border border-amber-200">
                                                    <span className="font-bold">{p.categoria}:</span> {p.texto}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedPerson.historial.length > 0 && (
                                        <div>
                                            <h4 className="font-bold text-gray-700 mb-2">Bitácora de Contactos</h4>
                                            <div className="space-y-2">
                                                {selectedPerson.historial.map((h, idx) => (
                                                    <div key={idx} className="bg-gray-50 p-3 rounded-lg border text-xs space-y-1">
                                                        <div className="flex justify-between font-bold text-gray-700">
                                                            <span>{h.fecha}</span>
                                                            <span className="text-brandRed">{h.tipo}</span>
                                                        </div>
                                                        <p className="text-gray-600">{h.pastor}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {userRole === 'pastor' && (
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                            <h4 className="font-bold text-brandBlue text-xs uppercase mb-1">Comentarios del Pastor</h4>
                                            <p className="text-gray-700">{selectedPerson.comentariosPastor}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-end pt-4 border-t">
                                    <button onClick={() => setSelectedPerson(null)} className="bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition">Cerrar Ficha</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

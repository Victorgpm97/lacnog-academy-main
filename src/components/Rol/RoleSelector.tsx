import { useNavigate } from 'react-router-dom';

export default function RoleSelector() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: string) => {
    localStorage.setItem('userRole', role);

    // Redirige según el rol
    if (role === 'profesor') {
      navigate('/academy/profesor');
    } else if (role === 'estudiante') {
      navigate('/academy/estudiante');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">¡Bienvenido!</h2>
        <p className="mb-6 text-gray-700">Selecciona tu rol</p>
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('profesor')}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            👨‍🏫 Profesor o Instructor 👩‍🏫
          </button>
          <button
            onClick={() => handleRoleSelect('estudiante')}
            className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            🎓 Estudiante
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
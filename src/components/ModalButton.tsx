import { useState } from 'react';
import { X, UserRoundPen, GraduationCap } from 'lucide-react';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<'select' | 'form'>('select');
  const [role, setRole] = useState<'profesor' | 'estudiante' | null>(null);
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setStep('select');
    setRole(null);
    setForm({ nombre: '', email: '', password: '' });
    setError('');
  };

  const handleSelectRole = (selectedRole: 'profesor' | 'estudiante') => {
    localStorage.setItem('userRole', selectedRole);
    setRole(selectedRole);
    window.location.href = `/academy/${selectedRole}`;
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-white border-2 border-[#FEA723] rounded-3xl text-[#FEA723] shadow-md px-4 py-2 flex justify-around items-center hover:bg-[#FEA723] hover:text-white font-medium transition-all duration-300 cursor-pointer"
      >
        Abrir Temas
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <div className="relative z-10 bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'select' && (
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold mb-2">¡Bienvenido!</h2>
                <p className="text-gray-600 mb-6 text-sm">Selecciona tu rol</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleSelectRole('profesor')}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-[#fde0be] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer"
                  >
                    <UserRoundPen className="w-4 h-4" />
                    <span>Profesor o Instructor</span>
                    <UserRoundPen className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleSelectRole('estudiante')}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-[#fdebd3] text-[#323232] rounded-lg hover:bg-[#ffb764] hover:scale-110 transition-transform duration-300 text-sm cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Estudiante o Profesional</span>
                    <GraduationCap className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleClose}
                    className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline cursor-pointer"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
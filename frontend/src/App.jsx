import { useState } from 'react';
import { CheckSquare, Plus, List } from 'lucide-react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [activeView, setActiveView] = useState('form');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTodoAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-indigo-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        <header className="text-center mb-12">
          <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/50 mb-4">
            <CheckSquare className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            Todo List App
          </h1>

          <p className="text-gray-300 text-lg">
            Organize your daily tasks efficiently
          </p>
        </header>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 rounded-xl border border-gray-700 p-1.5">

            <button
              onClick={() => setActiveView('form')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeView === 'form'
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 text-white'
                  : 'text-gray-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Todo
              </span>
            </button>

            <button
              onClick={() => setActiveView('list')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeView === 'list'
                  ? 'bg-linear-to-r from-blue-500 to-indigo-600 text-white'
                  : 'text-gray-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <List className="w-5 h-5" />
                View Todos
              </span>
            </button>

          </div>
        </div>

        <div>
          {activeView === 'form' ? (
            <TodoForm onTodoAdded={handleTodoAdded} />
          ) : (
            <TodoList refreshTrigger={refreshTrigger} />
          )}
        </div>

      </div>
    </div>
  );
};

export default App;
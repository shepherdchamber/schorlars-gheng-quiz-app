import { useState, useEffect } from 'react';
import { collection, getDocs, docs, updateDoc } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Add a second document with a generated ID.

  const addTask = async () => {
    try {
      const ref = await addDoc(collection(db, 'tasks'), {
        text: newTask,
        completed: false,
        id: Date.now(),
      });
      console.log('Task added successfully!');
    } catch (error) {
      console.error('Error adding task:', error);
    }
    const data = await getDocs(collection(db, 'tasks'));

    const actualData = data.docs.map((docs) => ({
      ...docs.data(),
      id: docs.id,
    }));

    setTasks(actualData);
    if (!newTask.trim()) return;
    setTasks([...actualData, { id: Date.now(), text: newTask }]);
    setNewTask('');
    console.log(actualData);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = async (id, text) => {
    await updateDoc();
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editingText } : task
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>To-Do App</h1>
      <div className='flex gap-2 mb-4'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='border p-2 flex-grow'
          placeholder='Enter a task'
        />
        <button
          onClick={addTask}
          className='bg-blue-500 text-white p-2 rounded'
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='flex justify-between items-center border-b py-2'
          >
            {editingId === task.id ? (
              <>
                <input
                  type='text'
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className='border p-1'
                />
                <button
                  onClick={() => saveEdit(task.id)}
                  className='bg-green-500 text-white p-1 ml-2'
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <div>
                  <button
                    onClick={() => startEditing(task.id, task.text)}
                    className='bg-yellow-500 text-white p-1 mx-1'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className='bg-red-500 text-white p-1'
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

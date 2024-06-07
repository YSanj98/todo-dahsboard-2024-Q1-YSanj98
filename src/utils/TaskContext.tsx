import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define the shape of the task data
interface Task {
    id: string;
    todo: string;
    completed: boolean;
    priority: string;
    createdAt: string;
}

// Define the shape of the context data
interface TaskContextType {
  tasks: Task[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

// Create the context with a default value of undefined
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Create a provider component
interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, currentPage, setCurrentPage }}>
      {children}
    </TaskContext.Provider>
  );
};

// Create a custom hook to use the TaskContext
export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

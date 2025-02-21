import { useState } from 'react';
import AddTaskListModal from '../modal/AddTaskListModal';
import TodoListCard from './TodoListCard';

interface TodoListSectionProps {
  tasks: {
    taskList: string;
    taskTodo: number;
    taskCompleted: number;
  }[];
  teamId: string;
}

export default function TodoListSection({
  tasks,
  teamId,
}: TodoListSectionProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const color = [
    'bg-point-purple',
    'bg-point-blue',
    'bg-point-cyan',
    'bg-point-pink',
    'bg-point-rose',
    'bg-point-orange',
    'bg-point-yellow',
  ];

  const getColor = (index: number) => {
    return color[index % color.length];
  };

  const handleAddTodoList = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="w-full">
      <div className="mb-[1.6rem] flex justify-between">
        <div className="text-[1.6rem] text-text-primary">
          할 일 목록
          <span className="text-text-default">({tasks.length}개)</span>
        </div>
        <div>
          <button
            className="text-brand-primary hover:brightness-150"
            onClick={handleAddTodoList}
          >
            + 새로운 목록 추가하기
          </button>
          <AddTaskListModal
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[1.6rem]">
        {tasks.map((tasks, index) => (
          <TodoListCard
            key={index}
            taskList={tasks.taskList}
            taskTodo={tasks.taskTodo}
            taskCompleted={tasks.taskCompleted}
            teamId={teamId}
            color={getColor(index)}
          />
        ))}
      </div>
    </div>
  );
}

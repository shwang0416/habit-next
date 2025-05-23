'use client'

import Container from "@components/Container";
import Profile from "@components/Profile";
import { PlusIcon } from "@heroicons/react/24/solid";
import HabitRow from "@components/HabitRow";
import { Habit } from "@/app/types/habit";
import { useState } from "react";
import Modal from "@components/Modal";
import HabitForm from "@components/HabitForm";
import Button from "./Button";

const dummyHabits: Habit[] = [
  {
    id: 1,
    name: '일기 쓰기 ✍️',
    description: '일기를 쓰는 습관을 들이자',
    startDate: '2021-01-01',
    endDate: '2021-01-01',
    stamps: []
  },
  {
    id: 2,
    name: '운동 💪',
    description: '러닝 또는 요가를 간다',
    startDate: '2021-01-01',
    endDate: '2021-01-01',
    stamps: []
  },
  {
    id: 3,
    name: '영어 공부 📚',
    description: '영어 공부를 하는 습관을 들이자',
    startDate: '2021-01-01',
    endDate: '2021-01-01',
    stamps: []
  }
]


const UserContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Container styles="flex flex-col p-4 gap-4 bg-stone-100 border-1 border-green-700 shadow-xl shadow-green-800/50 min-w-[360px] w-[360px] max-h-[500px]">
        <div className="flex justify-between items-start">
          <Profile styles="flex flex-col gap-2 w-20"/>
          <Button
            type="primary"
            onClick={() => setIsModalOpen(true)}
            styles="flex gap-1 items-center text-sm px-4 py-2 shadow-lg shadow-lime-300/50 hover:shadow-lime-300/70">
            <PlusIcon className="w-3 h-3"/>
            Create New Habit
          </Button>
        </div>
        <div className="">
        {
          dummyHabits.map((habit) => (
            <HabitRow key={habit.id} habit={habit} />
          ))
        }
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={() => {
            console.log("submit")
            setIsModalOpen(false)
        }}>
          <HabitForm />
        </Modal>
      </Container>
    )
}

export default UserContainer;
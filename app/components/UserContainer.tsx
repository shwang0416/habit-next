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
import { User } from "next-auth";
import { Cog6ToothIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import { signOut } from "next-auth/react";

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


const UserContainer = ({user}: {user: User}) => {
    const [isHabitFormOpen, setIsHabitFormOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    const handleProfileClick = () => {
        setIsSettingOpen(true)
    }
    const handleHabitClick = () => {
        setIsHabitFormOpen(true)
    }
    return (
      <>
        <Container styles="relative flex flex-col p-4 gap-4 bg-stone-100 border-1 border-green-700 shadow-xl shadow-green-800/50 min-w-[360px] w-[360px] max-h-[500px]">
        <div className="flex justify-between items-start">
          <Profile styles="flex flex-col gap-2 w-20" user={user} />
            <div className="flex gap-2">
          <Button
            type="primary"
            onClick={handleHabitClick}
            styles="flex gap-1 items-center text-sm px-4 py-2 shadow-lg shadow-lime-300/50 hover:shadow-lime-300/70">
            <PlusIcon className="w-3 h-3"/>
            Create New Habit
          </Button>
          <Button
            type="primary"
            onClick={handleProfileClick}
            styles="flex items-center text-sm p-2 shadow-lg shadow-lime-300/50 hover:shadow-lime-300/70">
              <Cog6ToothIcon className="w-5 h-5"/>
            </Button>
          </div>
        </div>
        <div className="">
        {
          dummyHabits.map((habit) => (
            <HabitRow key={habit.id} habit={habit} />
          ))
        }
        </div>
        <Dropdown isOpen={isSettingOpen} onClose={() => {
          console.log('close')
          setIsSettingOpen(false)
        }}>
          <Button type="secondary"
          styles="flex gap-1 items-center text-sm px-4 py-2 shadow-lg shadow-lime-300/50 hover:shadow-lime-300/70"
          onClick={() => {signOut()}}>
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5"/>
            Sign Out
          </Button>
        </Dropdown>
      </Container>
        <Modal isOpen={isHabitFormOpen} onClose={() => setIsHabitFormOpen(false)}
        footer={<Button type="primary" styles="px-4 py-2 cursor-pointer w-full" onClick={() => {
            console.log("submit")
            setIsHabitFormOpen(false)
        }}>Add Habit</Button>}>
          <HabitForm />
        </Modal>
        </>
    )
}

export default UserContainer;
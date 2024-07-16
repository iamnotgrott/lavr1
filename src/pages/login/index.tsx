import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';

import { Card } from "antd";

import type { ReactElement } from "react";

import { MainLayout } from "@/shared/layout/MainLayout";

import { Button } from '@/shared/components';

let renderCount = 0;

type FormValues = {
  username: string,
  password: string
}

const LoginPage = () => {
  const Form = useForm<FormValues>();
  const { register, control, handleSubmit } = Form;

  const onSubmit = (data:FormValues) => {
    console.log('Form submitted', data);
  }

  renderCount++
  return (
    <div className="flex p-3,5">
      <Card className="w-full h-full">
        <div className="flex">
          <Card title="Авторизация" className="flex-initial w-[35rem]">
            <form className="p-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <p>{ renderCount/2 }</p>
                <label className="block text-sm mb-4" htmlFor="username">
                  Логин
                </label>
                <input
                  className="appearance-none border w-full py-2 px-3"
                  id="username"
                  type="text"
                  placeholder="Введите логин"
                  {...register("username")}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-sm mb-2"
                  htmlFor="password"
                >
                  Пароль
                </label>
                <input
                  className="appearance-none border w-full py-2 px-3 leading-tight"
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  {...register("password")}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="h-40 flex items-center justify-center">
                  <Button variant="secondary">Войти</Button>
                </div>
                <p>Забыли пароль?</p>
              </div>
            </form>
          </Card>
          <Card className='flex-auto'>
            <p>Image</p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default LoginPage;

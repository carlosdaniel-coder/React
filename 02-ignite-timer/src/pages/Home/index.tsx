import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StatarCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Home() {
  //  interface NewCycleFormDate {
  //    task: string
  //    minutesAmount: number
  //  }

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'Informe um valor maior que 5')
      .max(60, 'informe um valor menor que 60'),
  })

  type NewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>

  const { register, handleSubmit, watch } = useForm<NewCycleFormDate>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isTaskDisabled = !task

  function dadosSubmimit(data: NewCycleFormDate) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(dadosSubmimit)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê uma nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Limão"></option>
            <option value="banana"></option>
          </datalist>

          <label htmlFor="duration">Durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            id="duration"
            min={5}
            max={60}
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StatarCountdownButton disabled={isTaskDisabled} type="submit">
          <Play />
          Começar
        </StatarCountdownButton>
      </form>
    </HomeContainer>
  )
}

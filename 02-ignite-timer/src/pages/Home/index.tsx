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

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê uma nome para o seu projeto"
            list="task-suggestions"
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

        <StatarCountdownButton disabled type="submit">
          <Play />
          Começar
        </StatarCountdownButton>
      </form>
    </HomeContainer>
  )
}

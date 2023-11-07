import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        placeholder="Dê uma nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
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
        min={1}
        max={60}
        step={5}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignIn() {
  return (
    <>
      <Helmet title="login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Aconpanhe suas vendas pelo painel de controle!
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" />
            </div>

            <Button className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { data: '10/12', revenu: 1200 },
  { data: '11/12', revenu: 800 },
  { data: '12/12', revenu: 900 },
  { data: '13/12', revenu: 500 },
  { data: '14/12', revenu: 200 },
  { data: '15/12', revenu: 2000 },
  { data: '16/12', revenu: 900 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer className="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="data" tickLine={false} axisLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenu"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

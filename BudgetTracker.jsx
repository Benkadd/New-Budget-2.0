import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function BudgetTracker() {
  const mainIncome = 13000000
  const uberIncome = 2720000
  const [expenses, setExpenses] = useState([])
  const [uberMaintenance, setUberMaintenance] = useState(0)
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState('')

  const addExpense = () => {
    if (!item || !amount) return
    const newExpense = { item, amount: parseInt(amount) }
    setExpenses([...expenses, newExpense])
    setItem('')
    setAmount('')
  }

  const totalPersonalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0)
  const totalExpenses = totalPersonalExpenses + uberMaintenance
  const totalIncome = mainIncome + uberIncome
  const balance = totalIncome - totalExpenses

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Monthly Budget Tracker</h1>

      <Card className="mb-4">
        <CardContent className="space-y-2">
          <p><strong>Main Salary:</strong> UGX {mainIncome.toLocaleString()}</p>
          <p><strong>Uber Income:</strong> UGX {uberIncome.toLocaleString()}</p>
          <p><strong>Total Income:</strong> UGX {totalIncome.toLocaleString()}</p>
          <p><strong>Total Expenses:</strong> UGX {totalExpenses.toLocaleString()}</p>
          <p><strong>Remaining Balance:</strong> UGX {balance.toLocaleString()}</p>
        </CardContent>
      </Card>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Expense item (e.g. Rent)"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount (UGX)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <Button onClick={addExpense}>Add</Button>
      </div>

      <Card className="mb-4">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Personal Expenses</h2>
          <ul className="space-y-1">
            {expenses.map((exp, index) => (
              <li key={index} className="flex justify-between">
                <span>{exp.item}</span>
                <span>UGX {exp.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-xl font-semibold mb-2">Uber Maintenance</h2>
          <Input
            type="number"
            placeholder="Total Monthly Uber Maintenance (UGX)"
            value={uberMaintenance}
            onChange={e => setUberMaintenance(parseInt(e.target.value) || 0)}
          />
        </CardContent>
      </Card>
    </div>
) 
}

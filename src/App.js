import React from 'react'
import Form from './Components/Form.js'
import Table from './Components/Table.js'

function App() {

  const [receipt, setReceipt] = React.useState({
    date: "",
    amount: "",
    paymentMode: "cash",
    remark: ""
  })

  const [showReceipt, setShowReceipt] = React.useState(false)
  const [tableVaules, setTableValues] = React.useState()

  function handleDateChange(e) {
    setReceipt({ ...receipt, date: e.currentTarget.value })
  }

  function handleaAmountChange(e) {
    setReceipt({ ...receipt, amount: e.currentTarget.value })
  }

  function handlePaymentModeChange(e) {
    setReceipt({ ...receipt, paymentMode: e.currentTarget.value })
  }

  function handleRemarkChange(e) {
    setReceipt({ ...receipt, remark: e.currentTarget.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { date, amount, paymentMode, remark } = receipt
    if (date && amount && paymentMode && remark) {
      setShowReceipt(true)
      setTableValues(receipt)
      setReceipt({
        date: "",
        amount: "",
        paymentMode: "cash",
        remark: ""
      })
    }
  }

  function handleCancelBtn() {

  }
  // console.log(receipt)

  console.log(tableVaules)
  return (
    <>
      <Form
        date={receipt.date}
        amount={receipt.amount}
        paymentMode={receipt.paymentMode}
        remark={receipt.remark}
        dateChange={handleDateChange}
        amountChange={handleaAmountChange}
        paymentModeChange={handlePaymentModeChange}
        remarkChange={handleRemarkChange}
        handleSubmit={handleSubmit}
      />

      {showReceipt && <Table date={tableVaules.date} amount={tableVaules.amount} paymentMode={tableVaules.paymentMode} remark={tableVaules.remark} />}
    </>
  );
}

export default App;

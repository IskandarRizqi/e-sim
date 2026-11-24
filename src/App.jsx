import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CustomerPage from "./pages/CustomerPage";
import PaymentPage from "./pages/PaymentPage";
import InvoicePage from "./pages/InvoicePage";

export default function App() {
  const [page, setPage] = useState("dashboard"); // <-- awalnya dashboard, bukan home
  const [selected, setSelected] = useState(null);
  const [dataSize, setDataSize] = useState("3GB");
  const [days, setDays] = useState("07");
  const [customer, setCustomer] = useState({ nama: "", email: "", wa: "" });
  const [payment, setPayment] = useState("Saldo");

  const price = selected ? selected.price : 0;
  const fee = 2500;
  const total = price + fee;

  return (
    <div className="min-h-screen bg-[#E8ECFF] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-xl">
        {page === "dashboard" && (
          <DashboardPage onOpenEsim={() => setPage("home")} />
        )}
        {page === "home" && (
          <HomePage
            onSelect={(p) => { setSelected(p); setPage("detail"); }}
            onBack={() => setPage("dashboard")}
          />
        )}
        {page === "detail" && (
          <DetailPage
            product={selected}
            dataSize={dataSize} setDataSize={setDataSize}
            days={days} setDays={setDays}
            onBack={() => setPage("home")}
            onOrder={() => setPage("customer")}
          />
        )}
        {page === "customer" && (
          <CustomerPage
            product={selected} dataSize={dataSize} days={days}
            customer={customer} setCustomer={setCustomer}
            onBack={() => setPage("detail")}
            onNext={() => setPage("payment")}
          />
        )}
        {page === "payment" && (
          <PaymentPage
            product={selected} dataSize={dataSize} days={days}
            payment={payment} setPayment={setPayment}
            price={price} fee={fee} total={total}
            onBack={() => setPage("customer")}
            onNext={() => setPage("invoice")}
          />
        )}
        {page === "invoice" && (
          <InvoicePage
            product={selected} dataSize={dataSize} days={days}
            customer={customer} payment={payment}
            price={price} fee={fee} total={total}
            onFinish={() => { setPage("dashboard"); setSelected(null); }}
          />
        )}
      </div>
    </div>
  );
}
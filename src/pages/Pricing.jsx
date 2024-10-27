function Pricing() {
    return (
    <>
      <section className="bg-gradient-to-r from-slate-500 to-slate-800 text-white py-16">
        <h2 className="text-center text-black text-2xl font-bold">Tailored Plans for Your Manufacturing Scale</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="bg-gray-800 p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-4">$39/month</p>
            <ul className="mt-4 space-y-2">
              <li>Production up to 10,000 units</li>
              <li>24/7 Tech Support</li>
              <li>Access to production dashboard</li>
            </ul>
            <button className="bg-blue-600 mt-4 w-full py-2 rounded">Get Started</button>
          </div>
          <div className="bg-gray-800 p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-4">$99/month</p>
            <ul className="mt-4 space-y-2">
              <li>Unlimited production units</li>
              <li>Dedicated account manager</li>
              <li>Full dashboard access</li>
            </ul>
            <button className="bg-blue-600 mt-4 w-full py-2 rounded">Get Started</button>
          </div>
        </div>
      </section>
    </>
    )
}

export default Pricing
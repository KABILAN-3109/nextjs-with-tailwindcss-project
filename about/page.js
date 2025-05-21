export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-center">
        <h2 className="text-blue-600 text-4xl font-bold">facebook</h2>
    <div className="min-h-screen  text-black bg-white mt-4 rounded-2xl">
          <h2 className="text-3xl font-bold">Creat a New Account</h2> 
          <p className="text-gray-500">It's quick and easy.</p>
          <hr className="mb-4" />
      <div className="flex flex-row gap-4 p-4">
        <input
        type="text"
        placeholder="First name"
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
        type="text"
        placeholder="Surname"
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <label className="text-xs text-gray-600 flex items-center gap-1 mx-4 mb-2">
          Date of birth ?</label>
      <div className="flex flex-row gap-2 mx-4">
        <select className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm ">
        <option>9</option></select>
        <select className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm">
        <option>jun</option></select>
        <select className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm">
        <option>1997</option></select>
      </div>
      <label className="text-xs text-gray-600 flex items-center gap-1 mx-4 mb-2 py-2">
        Gender ?</label>
      <div className="flex flex-row gap-2 mx-4">
        <label className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm ">
        <option>9</option></label>
        <select className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm">
        <option>jun</option></select>
        <select className="w-1/3 border border-gray-300 rounded-md px-2 py-2 text-sm">
        <option>1997</option></select>
      </div>
    </div>        
    </main>
  );
}


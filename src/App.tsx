export default function App() {

  // TODO: Gunakan useState untuk menyimpan playerSelection dan botSelection (nilai awal "❓")

  // TODO: Gunakan useCallback untuk fungsi handleBoxButtonClick
  //       - Simpan pilihan pemain ke playerSelection
  //       - Acak pilihan bot dari ["✌️", "✊", "✋"] dan simpan ke botSelection

  // TODO: Gunakan useMemo untuk menghitung hasil permainan (result)
  //       - Belum memilih   → "Pilih Dulu"
  //       - Seri            → "🤝 Imbang!"
  //       - Menang          → "🎉 Kamu Menang!"
  //       - Kalah           → "😔 Kamu Kalah!"

  return (<>

    <div className="max-h-screen h-screen w-full flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center pb-7">
          Batu Kertas Gunting
        </h1>
      </div>

      <div className="flex justify-center gap-7 items-center">

        {/* TODO: Buat komponen Box.tsx dan render di sini untuk player */}
        <div className="flex flex-col items-center">
          <span className="text-4xl pb-1">👤</span>
          <div className="p-7 bg-gray-200 rounded-2xl">
            <span className="text-5xl">❓</span>
          </div>
        </div>

        <div className="font-bold text-2xl">
          VS
        </div>

        {/* TODO: Buat komponen Box.tsx dan render di sini untuk bot */}
        <div className="flex flex-col items-center">
          <span className="text-4xl pb-1">🤖</span>
          <div className="p-7 bg-gray-200 rounded-2xl">
            <span className="text-5xl">❓</span>
          </div>
        </div>

      </div>

      {/* TODO: Tampilkan hasil permainan (result) di sini */}

      <div className="flex justify-center gap-3 items-center pt-12">

        {/* TODO: Buat komponen BoxButton.tsx dan render di sini untuk setiap pilihan */}
        <button className="bg-gray-200 p-5 rounded-2xl hover:bg-gray-300 cursor-pointer" onClick={() => {}}>
          <span className="text-2xl">✌️</span>
        </button>
        <button className="bg-gray-200 p-5 rounded-2xl hover:bg-gray-300 cursor-pointer" onClick={() => {}}>
          <span className="text-2xl">✊</span>
        </button>
        <button className="bg-gray-200 p-5 rounded-2xl hover:bg-gray-300 cursor-pointer" onClick={() => {}}>
          <span className="text-2xl">✋</span>
        </button>

      </div>
    </div>
  
  </>)
}
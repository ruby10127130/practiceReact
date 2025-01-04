import './Home.css'

function Home() {
  return (
    <div className="w-full lg:w-[980px] max-w-full px-4 py-8">
      <h1 className="font-bold mb-8">Pratice list</h1>
      <ul className="list-none">
        <li className="rounded bg-white text-slate-800 p-4">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-xl font-bold mb-2">第一週：簡易產品列表</h2>
            <h3 className="text-md font-bold mb-2">User Story</h3>
            <ul className="list-disc pl-4 mb-4">
              <li className="text-left">使用者可以查看產品列表</li>
              <li>使用者可以點擊單一產品，查看詳細資訊</li></ul>
            <a 
              href="/mainTasks/week_01" 
              className="self-end rounded py-1 px-2 transition-colors ease-linear duration-100 bg-neutral-700 text-white hover-hover:hover:bg-neutral-800">
                查看內容
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Home

export default function Searchbar() {
    return (
        <div className="flex items-center justify-center bg-none">
  <form method="GET">
    <div className="relative text-white focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 mt-4"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="input py-2 text-md text-white mt-4 bg-gray-900 border-b-2 border-gray-400 bg-opacity-5 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder = "Search..." autoComplete="off" />
    </div>
  </form>
</div>

 
        // <form classNameName="">

        //     <div>
        //         <input type="text"
        //             className="input w-full p-2 text-sm border-b-4 border-gray-500 border-r-hidden border-l-hidden border-top-hidden  text-black outline-none opacity-50"
        //             placeholder="Subject" />
        //     </div>

        // </form>



    );
}
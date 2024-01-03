import React from 'react'

function Search() {

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className=" tracking-wide text-black rounded-[12px] w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline bg-white"
            />
        </div>
    )
}

export default Search
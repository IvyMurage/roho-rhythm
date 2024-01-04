import React from 'react'

type HandleType = {
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined

}

function Search({handleChange}:HandleType) {

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                className=" tracking-wide text-black rounded-[12px] w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline bg-white"
            />
        </div>
    )
}

export default Search
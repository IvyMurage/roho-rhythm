import React from 'react'

type HandleType = {
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    searchValue: {
        search: string
    }
}



function Search({ handleChange, searchValue }: HandleType) {

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchValue?.search}
                onChange={handleChange}
                className=" tracking-wide text-black rounded-[12px] w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline bg-white"
            />
        </div>
    )
}

export default Search
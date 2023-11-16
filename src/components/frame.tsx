import React from 'react'

interface Props {
    children: React.ReactNode
}

const Frame: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className='container font-roboto w-[100%]  m-auto  h-[90vh] max-w-[1200px]'>
            {children}
        </div>
    )
}
export default Frame
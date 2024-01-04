import Sidebar from './sidebar'

interface Props {
    children: React.ReactNode
}

const Frame: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className='container w-[100%]  m-auto  h-[95vh] max-w-[1200px]  '>
            <div className='scrollbar-hide sidebar'>
                <Sidebar />
            </div>
            <div className='main scrollbar-hide'>
                {children}
            </div>
        </div>
    )
}
export default Frame
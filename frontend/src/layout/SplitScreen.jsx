

export const MainScreen = ({Left,Right}) => {
  return (
    <div className='flex'>
        <div className='hidden md:block w-0 md:w-[20%]   h-screen bg-blue-700'><Left/></div>
        <div className='bg-white w-[100%] md:w-[80%]  h-screen '><Right/></div>
    </div>
  )
}

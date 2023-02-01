import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export const ChatField = () => {
  return (
    <div className='w-full'>
        <form className='flex bg-gray-700 w-4/5 px-4 rounded-md items-center mx-auto '>
            <input type="text" className='bg-gray-700 flex-grow h-12 outline-none'/>
            <button>
                <ArrowTopRightOnSquareIcon className='h-6 bg-gray-700'/>
            </button>
        </form>
    </div>
  )
}

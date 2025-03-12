import { useState } from 'react';
import './Profile.css'

function Profile() {
    const [Index, setIndex] = useState(0);

    const max = 1; 
    const min = 0;

    const signup = () => {
        setIndex((prevIndex) => Math.max(prevIndex - 1, min))
    };
    const signin = () => {
        setIndex((prevIndex) => Math.min(prevIndex + 1, max))
    };

    return (
      <>
        <section className="mt-[1rem] flex flex-col justify-center items-center ">
            <h1>PROFILE SECTION</h1>
            <div id='btns'  className='relative flex flex-row gap-[5rem]'>
                <div className="z-10 absolute mt-[1rem] left-0 scale-110 w-[9rem] h-[4rem] bg-[var(--light)] opacity-20 rounded-[2rem] transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${Index * 12.7}rem)` }}></div>
                <button className='relative mt-[1rem] hover:scale-110 transition-all text-[2.5rem] cursor-pointer rounded-[2rem] bg-[var(--dbrown)] h-[4rem] w-[9rem] ' onClick={signup} data-status={Index === 0 ? 'active' : 'inactive' }>SIGN UP</button>
                <button className='relative mt-[1rem] hover:scale-110 transition-all text-[2.5rem] cursor-pointer rounded-[2rem] bg-[var(--dbrown)] h-[4rem] w-[9rem] ' onClick={signin} data-status={Index === 1 ? 'active' : 'inactive' }>SIGN IN</button>
            </div>
            <div  className='mt-[13rem] flex flex-row justify-center items-center '>
                <form className={`${Index === 0 ? 'block opacity-100' : 'hidden opacity-0'} absolute mt-[8rem] text-[2rem]`} id='suform'>
                    <label>username</label>
                    <input className="border border-gray-400 p-2" type="text" />
                    <label>email id</label>
                    <input className="border border-gray-400 p-2" type="text" />
                    <label>date of birth</label>
                    <input className="border border-gray-400 p-2" type="date" />
                    <label>password</label>
                    <input className="border border-gray-400 p-2 " type="password" /> <br />
                    <button className=' hover:scale-110 transition-all cursor-pointer rounded-[3rem] bg-[var(--dbrown)] h-[3rem] w-[7rem] ' type="submit">submit</button>
                </form>

                <form className={`${Index === 1 ? 'block opacity-100' : 'hidden opacity-0'} absolute mt-[7rem] text-[2rem]`} id='siform'>
                    <label>email id</label>
                    <input className="border border-gray-400 p-2" type="text" />
                    <label>password</label>
                    <input className="border border-gray-400 p-2" type="password" /> <br />
                    <button className='hover:scale-110 transition-all cursor-pointer rounded-[3rem] bg-[var(--dbrown)] h-[3rem] w-[7rem]' type="submit">submit</button>
                </form>
            </div>
            
        </section>
      </>
    )

}

export default Profile;
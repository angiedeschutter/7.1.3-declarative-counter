import mole from '../embedded/mole.png'


import { useEffect } from 'react'

export default function Mole ({setIsShowing, onMoleClick}){


    useEffect(() => {
        let randomMillis = Math.ceil( Math.random()*5000 + 1000)
        let timer = setTimeout(()=> {
            setIsShowing(false)
        }, randomMillis)

        return () => clearTimeout(timer)
    }, [])

    return <div>
        <img 
        style={{width:'30vw'}}
        src={mole}
        onClick={onMoleClick}     
        />
    </div>
}
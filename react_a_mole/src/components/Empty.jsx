import empty from '../embedded/molehill.png'
import { useEffect } from 'react'

export default function Empty ({setIsShowing}){
    useEffect(() => {
        let randomMillis = Math.ceil( Math.random()*5000 + 1000)
        let timer = setTimeout(()=> {
            setIsShowing(true)
        }, randomMillis)

        return () => clearTimeout(timer)
    }, [])

    return <div>
        <img 
        style={{width:'30vw'}}
        src={empty}
        />
    </div>
}
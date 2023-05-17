import Mole from "./Mole"
import Empty from './Empty'
import { useState } from "react"

export default function MoleContainer({setScore, score}) {
    const [isShowing, setIsShowing]=useState(false)

    const onMoleClick = () =>{
        if (isShowing){
            setIsShowing(false)
            setScore(score+1)
        }
    }
    return <div className ='mole-container'>
        {
            isShowing ? 
            <Mole 
            setIsShowing={setIsShowing} 
            onMoleClick={onMoleClick}
            />
            :
            <Empty setIsShowing={setIsShowing} />
        }
    </div>
}
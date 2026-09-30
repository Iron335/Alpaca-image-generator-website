import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'
const imageLocation ={
  Accessories:{
    earings: "./public/alpaca/accessories/earings.png",
    flower: "./public/alpaca/accessories/flower.png",
    glasses: "./public/alpaca/accessories/glasses.png",
    headphone: "./public/alpaca/accessories/headphone.png"
  }, 
  Backgrounds:{
    blue50: "./public/alpaca/backgrounds/blue50.png",
    blue60: "./public/alpaca/backgrounds/blue60.png",
    blue70: "./public/alpaca/backgrounds/blue70.png",
    darkblue30: "./public/alpaca/backgrounds/darkblue30.png",
    darkblue50: "./public/alpaca/backgrounds/darkblue50.png",
    darkblue70: "./public/alpaca/backgrounds/darkblue70.png",
    green50: "./public/alpaca/backgrounds/green50.png",
    green60: "./public/alpaca/backgrounds/green60.png",
    green70: "./public/alpaca/backgrounds/green70.png",
    grey40: "./public/alpaca/backgrounds/grey40.png",
    grey70: "./public/alpaca/backgrounds/grey70.png",
    grey80: "./public/alpaca/backgrounds/grey80.png",
    red50: "./public/alpaca/backgrounds/red50.png",
    red60: "./public/alpaca/backgrounds/red60.png",
    red70: "./public/alpaca/backgrounds/red70.png",
    yellow50: "./public/alpaca/backgrounds/yellow50.png",
    yellow60: "./public/alpaca/backgrounds/yellow60.png",
    yellow70: "./public/alpaca/backgrounds/yellow70.png",
  },
  Ears:{
    default:"./public/alpaca/ears/default.png",
    tilt_backward:"./public/alpaca/ears/tilt-backward.png",
    tilt_forward:"./public/alpaca/ears/tilt-forward.png",
  },
  Eyes:{
    angry:"./public/alpaca/eyes/angry.png",
    default:"./public/alpaca/eyes/default.png",
    naughty:"./public/alpaca/eyes/naughty.png",
    panda:"./public/alpaca/eyes/panda.png",
    smart:"./public/alpaca/eyes/smart.png",
    star:"./public/alpaca/eyes/star.png",
  },
  Hair:{
    bang:"./public/alpaca/hair/bang.png",
    curls:"./public/alpaca/hair/curls.png",
    default:"./public/alpaca/hair/default.png",
    elegant:"./public/alpaca/hair/elegant.png",
    fancy:"./public/alpaca/hair/fancy.png",
    quiff:"./public/alpaca/hair/quiff.png",
    short:"./public/alpaca/hair/short.png",
  },
  Leg:{
    bubble_tea:"./public/alpaca/leg/bubble-tea.png",
    cookie:"./public/alpaca/leg/cookie.png",
    default:"./public/alpaca/leg/default.png",
    game_console:"./public/alpaca/leg/game-console.png",
    tilt_backward:"./public/alpaca/leg/tilt-backward.png",
    tilt_forward:"./public/alpaca/leg/tilt-forward.png",
  },
  Mouth:{
    astonished:"./public/alpaca/mouth/astonished.png",
    default:"./public/alpaca/mouth/default.png",
    eating:"./public/alpaca/mouth/eating.png",
    laugh:"./public/alpaca/mouth/laugh.png",
    tongue:"./public/alpaca/mouth/tongue.png",
  },
  Neck:{
    bend_backward:"./public/alpaca/neck/bend-backward.png",
    bend_forward:"./public/alpaca/neck/bend-forward.png",
    default:"./public/alpaca/neck/default.png",
    thick:"./public/alpaca/neck/thick.png",
  },
  Nose: {
  default: "./public/alpaca/nose.png",
},
}
function App() {
const [selected, setSelected] = useState('Hair');
const [selectAccessories, setSelectAccessories] = useState('');


const categoryNames = [
  'Backgrounds', 
  'Ears', 
  'Neck', 
  'Nose', 
  'Mouth', 
  'Hair', 
  'Eyes', 
  'Accessories', 
  'Leg',
]

const [choices, setChoices] = useState({
    Backgrounds: 'blue50', 
    Ears: 'default', 
    Neck: 'default', 
    Nose: 'default',
    Mouth: 'default', 
    Hair: 'default', 
    Eyes: 'default',
    Accessories: 'earings', 
    Leg: 'default',
  })


function chooseStyle(name){
  setChoices(prev=>({...prev, [selected]: name}))
}
function randomize(){
  const randomStyles={}
  Object.keys(imageLocation).forEach(category =>{
    const name = Object.keys(imageLocation[category])
    randomStyles[category] = name[Math.floor(Math.random()* name.length)]
  })
  setChoices(randomStyles)
}

return (
 <div className="alpacaContainerPosition">
  <div className='alpacaContainerSize'>

    <div className='alpaca'>
      <div className='alpacaText'>
          <h1>ALPACA GENERATOR</h1>
      </div>
        
      <div className="alpacaImageContainer">
         <div className='alpacaImage'>
            {categoryNames.map(names=>(
              <img
              key={names}
              src={imageLocation[names][choices[names]]}
              />
            ))}
          
          </div>
          <div className='alpacaButtoms'>
              <button onClick={randomize}>Random</button>
              <button>Download</button>
          </div>
      </div>
    </div>

    <div className='a'>
      <div className='accessoriesButtomContainer'>
        <h3>Accessorize the Alpaca</h3>
         <div className='accessoriesButtom'>
          {categoryNames.map(names =>(
            <button key={names} style={{backgroundColor: selected === names ? 'blue': 'white', color: selected === names ? 'white': 'blue', }} onClick={()=> {
              setSelected(names)
            }}>{names}</button>
          ))}
        </div>
      </div>

      <div className='styleButtomContainer'>
        <h3>Styles</h3>
        <div className='styleButtom'>
          {Object.keys(imageLocation[selected]).map(name =>
            <button key={name}  style={{backgroundColor:selectAccessories === name? 'blue': 'white', color: selectAccessories === name ? 'white': 'blue',}}onClick={()=>
              {
                setSelectAccessories(name)
                chooseStyle(name)
              }}>{name}</button>
          )}
        </div>
      </div>
      </div>
    
    </div> 
   </div>

  );
}

export default App

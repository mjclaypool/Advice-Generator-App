import diceIcon from "../images/icon-dice.svg";
import dividerD from "../images/pattern-divider-desktop.svg";
import dividerM from "../images/pattern-divider-mobile.svg";
import './index.css'

function App() {

  return (
    <main className="flex justify-center items-center w-[100vw] h-[100vh] bg-dark-blue">
      <div className="relative flex flex-col items-center text-center w-[540px] h-[330px] mx-4 rounded-2xl bg-dark-grey-blue">
        <h1 className="font-manrope font-bold tracking-[0.2em] text-xs lg:text-sm text-neon-green pt-12">ADVICE #117</h1>
        <p className="font-manrope font-bold lg:leading-9 text-2xl lg:text-[28px] text-light-cyan p-6 lg:pb-10 lg:px-10">"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
        <img src={dividerD} alt="Divider for desktop" className="hidden lg:block" />
        <img src={dividerM} alt="Divider for mobile" className="lg:hidden py-2" />
        <div className="absolute -bottom-8 flex justify-center items-center w-16 h-16 rounded-full bg-neon-green cursor-pointer hover:shadow-[0px_0px_30px_2px] hover:shadow-neon-green">
          <img src={diceIcon} alt="Dice Icon" className="object-contain" />
        </div>
      </div>
    </main>
  )
}

export default App

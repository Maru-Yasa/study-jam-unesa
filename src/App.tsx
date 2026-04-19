import { useCallback, useMemo, useState } from "react";
import Box from "./components/Box"
import BoxButton from "./components/BoxButton"

export default function App() {

  const emojis: string[] = ["✌️", "✊", "✋"];

  const [playerSelection, setPlayerSelection] = useState<string>("❓")
  const [botSelection, setBotSelection] = useState<string>("❓")

  const handleBoxButtonClick = useCallback((emoji: string) => {
    setPlayerSelection(emoji);

    const randomIndex = Math.floor(Math.random() * emojis.length);
    setBotSelection(emojis[randomIndex])
  }, [])

  const result = useMemo(() => {
    if (playerSelection === "❓" || botSelection === "❓") return "Pilih Dulu";
    if (playerSelection === botSelection) return "🤝 Imbang!";

    const wins: Record<string, string> = {
      "✊": "✌️",
      "✌️": "✋",
      "✋": "✊",
    };

    return wins[playerSelection] === botSelection ? "🎉 Kamu Menang!" : "😔 Kamu Kalah!";
  }, [playerSelection, botSelection])
  
  return (<>

    <div className="max-h-screen h-screen w-full flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center pb-7">
         Batu Kertas Gunting
        </h1>
      </div>

      <div className="flex justify-center gap-7 items-center">
        <Box 
          emoji={playerSelection} 
          player="player" 
        />
        <div className="font-bold text-2xl">
          VS
        </div>
        <Box 
          emoji={botSelection} 
          player="bot" 
        />
      </div>

      <div className="text-2xl font-semibold pt-8">
          {result}
        </div>

      <div className="flex justify-center gap-3 items-center pt-12">
        {emojis.map((emoji) => {
          return <BoxButton 
            key={"button-emoji-" + emoji} 
            emoji={emoji} 
            onClick={() => handleBoxButtonClick(emoji)} 
          />
        })}
      </div>
    </div>
  
  </>)
}
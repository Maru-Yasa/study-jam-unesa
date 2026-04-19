export type BoxProps = {
    emoji: string,
    player: "player" | "bot"
}

export default function Box({ emoji, player }: BoxProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl pb-1">{player === "player" ? "👤" : "🤖"}</span>
            <div className="p-7 bg-gray-200 rounded-2xl">
            <span className="text-5xl">
                {emoji}
            </span>
            </div>
        </div>
    )
}
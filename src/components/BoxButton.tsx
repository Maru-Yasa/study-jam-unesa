type BoxButtonProps = {
    emoji: string
    onClick: () => void
}

export default function BoxButton({ emoji, onClick }: BoxButtonProps) {
    return (
        <button onClick={onClick} className="bg-gray-200 p-5 rounded-2xl hover:bg-gray-300 cursor-pointer ">
          <span className="text-2xl">
            {emoji}
          </span>
        </button>
    )
}
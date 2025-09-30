import type { ITweet } from "@/shared/types/tweet.interface"

interface Prop {
    tweet: ITweet
}

export function Tweet({tweet}: Prop) {
    return <div>
        <p>{tweet.text}</p>
        <span>@{tweet.author}</span>
    </div>
}
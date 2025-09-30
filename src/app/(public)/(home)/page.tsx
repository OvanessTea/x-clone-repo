import { TWEETS } from "@/shared/data/tweets.data";
import { Tweet } from "./Tweet";
import type { ITweet } from "@/shared/types/tweet.interface";

export default function Home() {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Home</h1>
        <div className="space-y-6">
          {TWEETS.map((tweet: ITweet) => 
            <Tweet key={`${tweet.author}.${tweet.text}`} tweet={tweet} />
          )}
        </div>
      </div>
  );
}

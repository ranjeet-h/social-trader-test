import { Button } from "@radix-ui/themes"; // import { Button } from "shards-react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main className={`bg-[rgba(0,0,0,0.50)] h-screen relative`}>
      <div className="z-50 absolute right-40 top-16 flex flex-col gap-2 w-[120px]">
        <Button
          style={{
            backgroundColor: "#C1F0DB",
            padding: "0.5rem 2rem",
          }}
        >
          <span className="text-[#069D6E]">X</span>
        </Button>
        <Button
          color="green"
          onClick={() => {
            router.push("/sell");
          }}
        >
          Sell
        </Button>
        <Button
          color="green"
          onClick={() => {
            router.push("/buy");
          }}
        >
          Buy
        </Button>
      </div>
    </main>
  );
}

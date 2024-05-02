import Location from "@/app/components/Location";
import Frequency from "@/app/components/Frequency";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row items-center justify-center gap-8">
        <Location />
        <Frequency />
      </div>
    </main>
  );
}

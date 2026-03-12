import Navbar from "@/components/Navbar";

const PHONES = [
  { id: 1, tiltY: -14, tiltX: 5 },
  { id: 2, tiltY: -6, tiltX: 3 },
  { id: 3, tiltY: 6, tiltX: 3 },
  { id: 4, tiltY: 14, tiltX: 5 },
];

export default function Home() {
  return (
    <div className="dot-bg min-h-screen">
      <Navbar />
    </div>
  );
}

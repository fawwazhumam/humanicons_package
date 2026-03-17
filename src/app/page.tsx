import Collaborator from "@/components/Collaborator";
import CommentsBar from "@/components/CommentsBar";
import FeaturesSection from "@/components/FeaturesSection";
import Heroes from "@/components/Heroes";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import TrustBar from "@/components/Trust-bar";
import ValueProposition from "@/components/ValueProposition";

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
      <Heroes />
      <TrustBar />
      <FeaturesSection />
      <ValueProposition />
      <Collaborator />
      <CommentsBar />
      <Overview />
    </div>
  );
}

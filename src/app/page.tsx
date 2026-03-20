import CallToAction from "@/components/CallToAction";
import Collaborator from "@/components/Collaborator";
import CommentsBar from "@/components/CommentsBar";
import DownloadApp from "@/components/DownloadApp";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Heroes from "@/components/Heroes";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import ProductHighlight from "@/components/ProductHighlight";
import ProjectShowcase from "@/components/ProjectShowcase";
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
      <CallToAction />
      <ProductHighlight />
      <ProjectShowcase />
      <DownloadApp />
      <Footer />
    </div>
  );
}

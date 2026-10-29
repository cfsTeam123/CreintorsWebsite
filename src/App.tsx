/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TranslationSync from "./components/TranslationSync";
import ScrollReveal from "./components/ScrollReveal";
import PageTransition from "./components/PageTransition";
import TailCursor from "./components/TailCursor";
import BackToTopButton from "./components/BackToTopButton";
import BrandIntro from "./components/BrandIntro";

import Landing from "./pages/Landing";
import Creintors from "./pages/Creintors";
import Cautomate from "./pages/Cautomate";
import Crienviro from "./pages/Crienviro";
import Education from "./pages/Education";
import Policies from "./pages/Policies";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import AboutHub from "./pages/AboutHub";
import ExploreHub from "./pages/ExploreHub";
import CiiEngagement from "./pages/CiiEngagement";
import VlfmExperience from "./pages/VlfmExperience";
import History from "./pages/History";
import VisionMission from "./pages/VisionMission";
import Philosophy from "./pages/Philosophy";
import Cmd from "./pages/Cmd";
import Team from "./pages/Team";
import Approach from "./pages/Approach";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";
import CmdConnect from "./pages/CmdConnect";
import KnowledgeSharing from "./pages/KnowledgeSharing";
import CustomerVoice from "./pages/CustomerVoice";
import NotFound from "./pages/NotFound";

export default function App() {
	const location = useLocation();

	return (
		<div
			id="top"
			className="relative min-h-screen">
			<BrandIntro />
			<TailCursor />
			<ScrollToTop />
			<TranslationSync />
			<Navbar />

			<Routes location={location}>
				
					<Route
						path="/"
						element={<Landing />}
					/>
					<Route
						path="/teknosol"
						element={<Creintors />}
					/>
					<Route
						path="/cautomate"
						element={<Cautomate />}
					/>
					<Route
						path="/crienviro"
						element={<Crienviro />}
					/>
					<Route
						path="/education"
						element={<Education />}
					/>
					<Route
						path="/policies"
						element={<Policies />}
					/>
					<Route
						path="/clients"
						element={<Clients />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/about"
						element={<AboutHub />}
					/>
					<Route
						path="/explore"
						element={<ExploreHub />}
					/>
					<Route
						path="/cii-engagement"
						element={<CiiEngagement />}
					/>
					<Route
						path="/vlfm-experience"
						element={<VlfmExperience />}
					/>
					<Route
						path="/about/history"
						element={<History />}
					/>
					<Route
						path="/about/philosophy"
						element={<Philosophy />}
					/>
					<Route
						path="/about/vision-mission"
						element={<VisionMission />}
					/>
					<Route
						path="/about/cmd"
						element={<Cmd />}
					/>
					<Route
						path="/about/team"
						element={<Team />}
					/>
					<Route
						path="/about/approach"
						element={<Approach />}
					/>
					<Route
						path="/about/achievements"
						element={<Achievements />}
					/>
					<Route
						path="/about/certifications"
						element={<Certifications />}
					/>
					<Route
						path="/careers"
						element={<Careers />}
					/>
					<Route
						path="/gallery"
						element={<Gallery />}
					/>
					<Route
						path="/cmd-connect"
						element={<CmdConnect />}
					/>
					<Route
						path="/knowledge-sharing"
						element={<KnowledgeSharing />}
					/>
					<Route
						path="/customer-voice"
						element={<CustomerVoice />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
					
			</Routes>
			<Footer />
			<BackToTopButton />
		</div>
	);
}

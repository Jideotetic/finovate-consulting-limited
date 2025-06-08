import * as motion from "motion/react-client";
import NavBar from "@/components/nav-bar";

export function Header() {
  return (
    <header>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl fixed left-0 right-0 top-0 z-50"
      >
        <NavBar />
      </motion.div>
    </header>
  );
}

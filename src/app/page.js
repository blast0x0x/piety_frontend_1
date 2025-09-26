import HomePage from "@/components/Pages/Homepage";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "topZIndex",
          duration: 2000,
          style: {
            background: "#fff",
            color: "black",
            fontWeight: "Bold",
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <HomePage />
    </div>
  );
}

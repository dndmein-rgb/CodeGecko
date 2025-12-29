"use client";
import { signIn } from "@/lib/auth-client";
import { GitBranch } from "lucide-react";
import { useState } from "react";

const LoginUI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await signIn.social({
        provider: "github",
      });
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white flex overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/*Left Section - Hero Content*/}
      <div className="flex-1 flex flex-col justify-center px-12 py-16 relative z-10">
        <div className="max-w-lg">
          {/*Logo*/}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 text-2xl font-bold mb-12 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" >
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">CodeGecko</span>
            </div>
            {/* Main Content*/}
            <h1 className="text-6xl font-bold mb-6 leading-tight text-balance">
              Cut Code Review Time & Bugs in Half.{" "}
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">Instantly.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              SuperCharge your team to ship faster with the most Advanced AI
              code reviews.
            </p>
          </div>
        </div>
      </div>

      {/*Right Section - Login Form*/}
      <div className="flex-1 flex flex-col justify-center items-center px-12 py-16 relative z-10">
        <div className="w-full max-w-sm">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-400">
              Login using one of the following providers:
            </p>
          </div>
          {/*Github Login Button*/}
          <button
            onClick={handleGithubLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            {isLoading ? "Signing in..." : "Continue with GitHub"}
          </button>
          {/* Footer Links*/}
          <div className="space-y-4 text-center text-sm text-gray-400">
            <div className="">New to CodeGecko?{" "}
              <a href="#" className='text-primary hover:text-blue-400 font-semibold transition-colors'>Sign Up</a>
            </div>
            <div className="">
              <a href="#" className='text-primary hover:text-blue-400 font-semibold transition-colors'>Self Hosted Services</a>
            </div>
          </div>
          {/*Bottom Links*/}
          <div className="mt-12 pt-8 border-t border-gray-700 flex justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Use
            </a>
            <span>and</span>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;

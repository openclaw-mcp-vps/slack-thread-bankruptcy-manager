export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Archive Overwhelming<br />
          <span className="text-[#58a6ff]">Slack Threads</span> Automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          When threads spiral out of control, Slack Thread Bankruptcy Manager steps in — archiving threads that exceed your configured message or participant limits into searchable archive channels, so your team stays focused.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Connect your Slack workspace in minutes. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Auto-Archive", desc: "Threads exceeding your limits are moved to dedicated archive channels automatically." },
            { title: "Configurable Rules", desc: "Set message count and participant thresholds per channel or workspace-wide." },
            { title: "Fully Searchable", desc: "Archived threads remain searchable so nothing is ever truly lost." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Per workspace. Unlimited channels.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Slack OAuth integration",
              "Real-time webhook monitoring",
              "Configurable archive rules",
              "Dedicated archive channels",
              "Thread metrics dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the archiving work?",
              a: "We connect to your Slack workspace via OAuth and listen for thread activity using Slack's Events API. When a thread exceeds your configured limits, we automatically post a summary and move the conversation to a designated archive channel."
            },
            {
              q: "Will archived threads still be searchable?",
              a: "Yes. All archived threads are moved to dedicated archive channels in your Slack workspace, so they remain fully searchable by your team at any time."
            },
            {
              q: "Can I customize the thresholds per channel?",
              a: "Absolutely. You can set different message count and participant limits for each channel, or apply a single rule workspace-wide — whatever fits your team's workflow."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Thread Bankruptcy Manager. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}

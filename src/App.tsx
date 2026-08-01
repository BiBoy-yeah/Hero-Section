import { Button } from './components/ui/button';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 视频背景 */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* 导航栏 */}
        <nav className="relative z-10 flex w-full flex-row items-center justify-between px-6 py-5 md:px-8 md:py-6 max-w-7xl mx-auto">
          <div className="font-display text-3xl tracking-tight text-foreground">
            Velorah<sup className="text-xs">®</sup>
          </div>
          <ul className="hidden items-center gap-8 text-sm md:flex">
            <li className="text-foreground transition-colors hover:text-foreground/80 cursor-default">Home</li>
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">Studio</li>
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">About</li>
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">Journal</li>
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">Reach Us</li>
          </ul>
          <Button
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] focus-visible:ring-0"
            style={{ background: 'rgba(255,255,255,0.01)' }}
          >
            Begin Journey
          </Button>
        </nav>

        {/* 英雄区 */}
        <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center py-20 md:py-28">
          <h1 className="font-display max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl animate-fade-rise">
            Where{' '}
            <em className="not-italic text-muted-foreground">dreams</em>{' '}
            rise{' '}
            <em className="not-italic text-muted-foreground">through the silence.</em>
          </h1>
          <p className="text-muted-foreground mt-8 max-w-2xl text-base leading-relaxed sm:text-lg animate-fade-rise-delay">
            We're designing tools for deep thinkers, bold creators, and quiet
            rebels. Amid the chaos, we build digital spaces for sharp focus and
            inspired work.
          </p>
          <Button
            className="liquid-glass mt-12 rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] focus-visible:ring-0 animate-fade-rise-delay-2"
            style={{ background: 'rgba(255,255,255,0.01)' }}
          >
            Begin Journey
          </Button>
        </section>
      </div>
    </div>
  );
}

export default App;
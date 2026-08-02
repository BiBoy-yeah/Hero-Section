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
      <div className="absolute inset-0 z-0 bg-black/10" /> {/* 透明度10%；数字越小，遮罩越淡 */}

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* 导航栏 */}
        <nav className="relative z-10 flex w-full flex-row items-center justify-between px-6 py-5 md:px-8 md:py-6 max-w-7xl mx-auto">
          <div className="font-display text-3xl tracking-tight text-foreground">
            园艺师<sup className="text-xs"></sup>
          </div>
          <ul className="hidden items-center gap-8 text-sm md:flex">
            <li className="text-foreground transition-colors hover:text-foreground/80 cursor-default">主页</li>
            {/*<li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">Studio</li>*/}
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">关于</li>
            {/*<li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">Journal</li>*/}
            <li className="text-muted-foreground transition-colors hover:text-foreground cursor-default">联系我们</li>
          </ul>
          <Button
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] focus-visible:ring-0"
            style={{ background: 'rgba(255,255,255,0.01)' }}
          >
            Begin Journey
          </Button>
        </nav>

        {/* 英雄区 */}
        {/*<section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center py-20 md:py-28">*/}
        {/*上方代码说明:justify-center（不再强制垂直居中）;py-20 md:py-28（上下对称内边距）*/}
          <section className="relative z-10 flex flex-1 flex-col items-center px-6 text-center pt-20 md:pt-28">
          <h1 className="font-display max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl animate-fade-rise">
            生命{' '}
            <em className="not-italic text-muted-foreground">是</em>{' '}
            <em className="not-italic text-muted-foreground">一万次</em>
            「春和景明」
          </h1>
          <p className="text-muted-foreground mt-8 max-w-3xl text-base leading-relaxed sm:text-lg animate-fade-rise-delay">
            在博尔赫斯的迷宫里，所有时刻一并存在。书卷并非通向未来，而是无限重叠的过去；
            <br /> {/* 强制执行文本换行 */}
            繁花，是字缝里漏出的幻影。我们既是翻阅者，也早已是书中的一行正文。
          </p>
          {/*
          <Button
            className="liquid-glass mt-12 rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] focus-visible:ring-0 animate-fade-rise-delay-2"
            style={{ background: 'rgba(255,255,255,0.01)' }}
          >
            Begin Journey
          </Button>
          */}
        </section>
      </div>
    </div>
  );
}

export default App;

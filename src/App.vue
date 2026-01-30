<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100">
    <header class="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
      <div class="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-emerald-700 uppercase bg-emerald-50 rounded-full">
        AI-Powered Developer
      </div>
      <h1 class="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900">
        3255769520 的协作空间
      </h1>
      <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        专注于 <strong>定义问题</strong> 与 <strong>系统拆解</strong>。我利用 AI 的算力实现代码，用我的逻辑确保交付质量。
      </p>
    </header>

    <main class="max-w-5xl mx-auto px-6 space-y-24 pb-20">
      <section>
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-2">
          <span class="text-emerald-500">01.</span> AI 协作流 (The Workflow)
        </h2>
        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 class="font-bold text-slate-800 mb-3 text-lg">① 需求定义</h3>
            <p class="text-slate-500 leading-relaxed">将模糊创意转化为清晰的技术规格书。例如：将本地搜索拆解为 Lucene 索引引擎、RESTful 接口与 Vue 交互层。</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 class="font-bold text-slate-800 mb-3 text-lg">② 提示词驱动</h3>
            <p class="text-slate-500 leading-relaxed">通过精准的 Prompt 引导 AI 产出高质量模块。拒绝盲目尝试，追求“逻辑闭环”的一步到位。</p>
          </div>
          <div class="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 class="font-bold text-slate-800 mb-3 text-lg">③ 持续迭代</h3>
            <p class="text-slate-500 leading-relaxed">基于运行反馈，驱动 AI 快速定位 Bug 并优化性能。将 SmartSearch 响应从秒级优化至毫秒级。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-2">
          <span class="text-emerald-500">02.</span> 逻辑审计 (The Audit)
        </h2>
        <div class="bg-slate-900 rounded-3xl p-8 md:p-12 text-slate-300 relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row gap-12">
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-white mb-6 italic">SmartSearch 架构演进</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="text-emerald-400 font-bold mb-2">● 纠偏决策</h4>
                  <p class="leading-relaxed">AI 最初建议使用 SQLite。经审计，我判定数据库在处理数万级文件全文检索时 IO 开销过大，果断引导 AI 转向 <strong>Apache Lucene</strong> 引擎。</p>
                </div>
                <div>
                  <h4 class="text-emerald-400 font-bold mb-2">● 工程化审计</h4>
                  <p class="leading-relaxed">要求 AI 补充 Maven 自动化打包逻辑，将 JRE 与程序解耦，实现用户“零环境依赖”运行 .exe。</p>
                </div>
              </div>
            </div>
            <div class="flex-1 border-l border-slate-700 pl-10 hidden md:block font-mono text-sm space-y-2">
              <div class="text-emerald-500">// Audit Log: 2026-01-29</div>
              <div class="text-slate-500">Project: SmartSearch_v1.0</div>
              <div class="text-slate-500">Search_Latency: &lt; 30ms</div>
              <div class="text-slate-500">Build_Status: Success</div>
              <div class="text-slate-500">AI_Efficiency: 85% Improvement</div>
              <div class="mt-8 p-4 bg-slate-800 rounded-lg text-emerald-400 border border-emerald-900/50">
                "Not just coding, but orchestrating logic."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-8 flex items-center gap-2">
          <span class="text-emerald-500">03.</span> Debug 诊疗室
        </h2>
        <div class="grid gap-4">
          <div class="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all">
            <span class="w-fit bg-red-50 text-red-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider">FAIL: GIT 传输限制</span>
            <span class="text-slate-700 font-medium">100MB 文件拦截推送故障</span>
            <p class="text-slate-400 text-sm md:ml-4 flex-1">方案：通过 git reset 配合 .gitignore 实现源码与产物解耦。</p>
            <span class="text-emerald-600 font-mono text-xs font-bold whitespace-nowrap">5min Fixed</span>
          </div>
          <div class="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all">
            <span class="w-fit bg-amber-50 text-amber-600 px-3 py-1 rounded-md text-xs font-bold tracking-wider">WARN: NPM 权限冲突</span>
            <span class="text-slate-700 font-medium">EPERM 操作系统拒绝访问</span>
            <p class="text-slate-400 text-sm md:ml-4 flex-1">方案：重载管理员环境变量，切换 CMD 终端规避 PowerShell 路径映射 Bug。</p>
            <span class="text-emerald-600 font-mono text-xs font-bold whitespace-nowrap">2min Fixed</span>
          </div>
        </div>
      </section>
    </main>

    <footer class="text-center py-12 border-t border-slate-100 text-slate-400 text-sm">
      <p>Powered by AI Collaboration & Vue 3 • 2026</p>
    </footer>
  </div>
</template>
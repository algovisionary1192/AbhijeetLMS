import React, { useState } from 'react';
import { Course, UserObjective, Certification } from '../types';
import {
  User,
  Sparkles,
  ShieldCheck,
  Play,
  CheckCircle2,
  Terminal,
  Clock,
  Layers,
  Award,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Zap,
  ArrowRight,
  Cpu,
  RefreshCw
} from 'lucide-react';

interface DashboardScreenProps {
  courses: Course[];
  objectives: UserObjective[];
  certifications: Certification[];
  onSelectCourse: (course: Course) => void;
  onUpdateObjectiveProgress: (id: string, newProgress: number) => void;
  onOpenGetStarted: () => void;
  onViewCertificate?: (cert: Certification) => void;
  userRole: string;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  courses,
  objectives,
  certifications,
  onSelectCourse,
  onUpdateObjectiveProgress,
  onOpenGetStarted,
  onViewCertificate,
  userRole
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sandbox' | 'credentials' | 'cohorts'>('overview');
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [sandboxCode, setSandboxCode] = useState<string>(
`# Enterprise Multi-Agent Incident Remediation Loop
from langchain_core.agents import AgentExecutor
from telemetry_guard import ASTValidator, SandboxedContainer

# Initialize supervisor graph with fail-safe boundaries
supervisor = AgentSupervisor(
    workers=["telemetry_analyzer", "root_cause_synthesizer", "patch_generator"],
    max_iterations=4,
    token_budget_per_step=1200
)

def run_remediation(alert_payload):
    # Step 1: Ingest structured cloud incident
    trace = supervisor.execute(alert_payload)
    # Step 2: Validate generated Python patch in sandbox
    with SandboxedContainer(timeout_sec=15) as sandbox:
        res = sandbox.run_unit_tests(trace.patch_code)
    return {"status": "RESOLVED", "tests_passed": res.passed}`
  );
  const [sandboxLogs, setSandboxLogs] = useState<string[]>([]);
  const [isExecutingSandbox, setIsExecutingSandbox] = useState(false);

  const handleRunSandbox = () => {
    setIsExecutingSandbox(true);
    setSandboxLogs(['[0.00s] Initializing Firecracker microVM isolated container...', '[0.35s] Loading Python 3.12 runtime and AST security validator...']);

    setTimeout(() => {
      setSandboxLogs((prev) => [
        ...prev,
        '[0.82s] Telemetry worker received mock Kubernetes OOMKill alert',
        '[1.24s] Synthesizer generated patch: Dynamic memory heap re-allocation + pool throttling',
        '[1.76s] Executing sandbox test suite: 6 unit tests passing (0 failures)'
      ]);
    }, 900);

    setTimeout(() => {
      setSandboxLogs((prev) => [
        ...prev,
        '[2.40s] SUCCESS: Incident resolved autonomously in 2.4s. Telemetry span recorded.',
        '[2.41s] Updating objective progress to 90%...'
      ]);
      setIsExecutingSandbox(false);
      onUpdateObjectiveProgress('obj-1', 90);
    }, 2000);
  };

  const copyHashToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  return (
    <div id="full-dashboard-screen" className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-10">
      {/* Top Banner Bento */}
      <div className="bg-white border border-black/5 rounded-[40px] p-8 md:p-10 flex flex-col md:flex-row justify-between md:items-center gap-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E6FF55] rounded-full blur-[100px] opacity-20 pointer-events-none" />

        <div className="flex items-center gap-5 z-10">
          <div className="w-16 h-16 rounded-full bg-black text-[#E6FF55] flex items-center justify-center shadow-sm">
            <User className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
              <h1 className="font-hanken text-2xl md:text-3xl font-black text-[#111827]">
                Abhijeet Kumar
              </h1>
              <span className="bg-black text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3 text-[#E6FF55]" /> {userRole}
              </span>
              <span className="bg-[#E6FF55] text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                ACTIVE COHORT
              </span>
            </div>
            <p className="font-inter text-xs font-semibold text-black/50">
              Executive Track: Operational AI Architecture · Verified Enterprise Enclave
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 z-10">
          <button
            onClick={() => setActiveTab('sandbox')}
            className="px-5 py-3 rounded-full bg-[#F3F4F6] text-black font-geist text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all flex items-center gap-2 border border-black/5 cursor-pointer active:scale-95"
          >
            <Terminal className="w-4 h-4" />
            <span>Launch Code Sandbox</span>
          </button>
          <button
            onClick={onOpenGetStarted}
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-[#E6FF55] hover:text-black font-inter text-xs font-black uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <span>Add Module Cohort</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs Bento Pill */}
      <div className="flex bg-white p-2 rounded-full border border-black/5 shadow-sm overflow-x-auto gap-2 w-fit">
        {[
          { key: 'overview', label: 'Command Overview', icon: Layers },
          { key: 'sandbox', label: 'Interactive Sandbox Runner', icon: Terminal },
          { key: 'credentials', label: 'Cryptographic Credentials', icon: ShieldCheck },
          { key: 'cohorts', label: 'Active Cohort Schedule', icon: Calendar }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-geist text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-black text-white shadow-sm'
                  : 'text-black/60 hover:text-black hover:bg-[#F3F4F6]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-10">
          {/* Objectives Grid Bento */}
          <div className="space-y-5">
            <div className="flex justify-between items-center px-2">
              <h3 className="font-hanken text-2xl font-black text-[#111827]">
                Active Learning Objectives & Milestones
              </h3>
              <span className="font-geist text-xs text-black/50 font-bold">
                {objectives.filter((o) => o.status === 'Completed').length} of {objectives.length} Completed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {objectives.map((obj) => (
                <div
                  key={obj.id}
                  className="bg-white border border-black/5 rounded-[32px] p-7 hover:border-black/20 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="font-hanken text-lg font-black text-[#111827]">
                        {obj.title}
                      </h4>
                      <span
                        className={`font-geist text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                          obj.status === 'Completed'
                            ? 'bg-[#E6FF55] text-black'
                            : 'bg-black text-white'
                        }`}
                      >
                        {obj.status}
                      </span>
                    </div>

                    <p className="font-geist text-xs text-black/50 font-bold mb-4">
                      {obj.courseTitle}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      <div className="flex justify-between text-xs font-geist font-bold">
                        <span className="text-black/60">Verification Mastery</span>
                        <span className="text-black font-black">{obj.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#F3F4F6] rounded-full overflow-hidden p-0.5 border border-black/5">
                        <div
                          className="h-full bg-black rounded-full transition-all duration-500"
                          style={{ width: `${obj.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="font-geist text-xs text-black/40 font-bold">
                      Target: {obj.dueDate}
                    </span>
                    <button
                      onClick={() => onUpdateObjectiveProgress(obj.id, Math.min(100, obj.progress + 15))}
                      className="text-xs font-geist font-black uppercase tracking-wider text-black bg-[#E6FF55] hover:bg-black hover:text-white px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
                    >
                      <span>Advance Progress (+15%)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolled Courses Highlights Bento */}
          <div className="space-y-5">
            <h3 className="font-hanken text-2xl font-black text-[#111827] px-2">
              Enrolled Curriculum Topologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-black/5 rounded-[36px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-black/20 transition-all p-3"
                >
                  <div>
                    <div className="rounded-[28px] overflow-hidden mb-4 relative h-40">
                      <img
                        src={c.imageUrl}
                        alt={c.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-3 left-3 bg-black text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {c.category}
                      </span>
                    </div>

                    <div className="px-3 pb-3">
                      <span className="font-geist text-[10px] text-black/40 font-black uppercase tracking-widest block mb-1">
                        {c.duration}
                      </span>
                      <h4 className="font-hanken text-lg font-black text-[#111827] mb-2 leading-snug">
                        {c.title}
                      </h4>
                      <p className="font-inter text-xs text-black/60 font-medium line-clamp-2">
                        {c.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 pb-2">
                    <button
                      onClick={() => onSelectCourse(c)}
                      className="w-full py-3 bg-[#F3F4F6] hover:bg-black hover:text-white border border-black/5 rounded-full text-xs font-geist font-black uppercase tracking-wider text-black transition-all cursor-pointer"
                    >
                      Open Syllabus & Modules
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Interactive Sandbox */}
      {activeTab === 'sandbox' && (
        <div className="space-y-6">
          <div className="bg-white border border-black/5 rounded-[40px] p-8 md:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
              <div>
                <h3 className="font-hanken text-2xl font-black text-[#111827] mb-1">
                  Isolated Python & Agentic Execution Sandbox
                </h3>
                <p className="font-inter text-xs text-black/60 font-medium">
                  Test multi-agent topologies and AST-level safety guards in an ephemeral cloud container.
                </p>
              </div>

              <button
                id="run-sandbox-live-btn"
                disabled={isExecutingSandbox}
                onClick={handleRunSandbox}
                className="px-6 py-3 rounded-full bg-black text-white hover:bg-[#E6FF55] hover:text-black font-geist text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 disabled:opacity-50 shadow-sm cursor-pointer"
              >
                {isExecutingSandbox ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing in MicroVM...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Execute Workflow Test</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Editor Area */}
            <div className="mb-5 rounded-[28px] overflow-hidden border border-black/10 shadow-sm">
              <div className="bg-[#111827] px-5 py-3 flex items-center justify-between text-xs font-geist text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-white font-mono text-xs font-bold">incident_orchestrator.py</span>
                </div>
                <span className="font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded text-[#E6FF55]">Python 3.12</span>
              </div>
              <textarea
                value={sandboxCode}
                onChange={(e) => setSandboxCode(e.target.value)}
                rows={12}
                className="w-full bg-[#0a0f18] p-5 font-mono text-xs text-[#E6FF55] focus:outline-none leading-relaxed border-none"
              />
            </div>

            {/* Execution Logs */}
            <div className="bg-[#F9FAFB] border border-black/10 rounded-[28px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-geist text-xs text-black/60 uppercase tracking-widest font-black">
                  Container Telemetry & Execution Stream
                </span>
                {sandboxLogs.length > 0 && (
                  <button
                    onClick={() => setSandboxLogs([])}
                    className="font-geist text-xs text-black/40 hover:text-black font-bold uppercase tracking-wider"
                  >
                    Clear Output
                  </button>
                )}
              </div>

              {sandboxLogs.length === 0 ? (
                <p className="font-geist text-xs text-black/40 font-medium italic">
                  Press "Execute Workflow Test" above to compile and run against live sandbox unit tests.
                </p>
              ) : (
                <div className="space-y-1 font-mono text-xs text-black">
                  {sandboxLogs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.includes('SUCCESS')
                          ? 'text-emerald-700 font-bold bg-emerald-100 p-2 rounded-lg'
                          : log.includes('Executing')
                          ? 'text-black font-semibold'
                          : 'text-black/70'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Credentials */}
      {activeTab === 'credentials' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-black/5 rounded-[40px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm hover:border-black/20 transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-[#E6FF55]">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-geist text-[10px] text-black/40 tracking-widest uppercase font-black block">
                          Executive Certificate
                        </span>
                        <h4 className="font-hanken text-xl font-black text-[#111827]">
                          {cert.title}
                        </h4>
                      </div>
                    </div>
                    <span
                      className={`font-geist text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        cert.status === 'Verified'
                          ? 'bg-[#E6FF55] text-black'
                          : 'bg-black/10 text-black/60'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <div className="bg-[#F9FAFB] border border-black/5 rounded-[28px] p-6 space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-geist">
                      <span className="text-black/50 font-bold">Issued To:</span>
                      <span className="text-black font-black">{cert.recipientName}</span>
                    </div>
                    <div className="flex justify-between text-xs font-geist">
                      <span className="text-black/50 font-bold">Credential ID:</span>
                      <span className="text-black font-mono font-bold">{cert.credentialId}</span>
                    </div>
                    <div className="flex justify-between text-xs font-geist">
                      <span className="text-black/50 font-bold">Issue Date:</span>
                      <span className="text-black font-bold">{cert.issueDate}</span>
                    </div>
                    <div className="pt-3 border-t border-black/5">
                      <div className="flex justify-between items-center text-xs font-geist mb-1">
                        <span className="text-black/50 font-bold">Cryptographic Hash:</span>
                        <button
                          onClick={() => copyHashToClipboard(cert.verificationHash)}
                          className="text-black font-black hover:underline flex items-center gap-1"
                        >
                          {copiedHash === cert.verificationHash ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="font-mono text-[11px] text-black truncate bg-white p-3 rounded-xl border border-black/10 font-bold">
                        {cert.verificationHash}
                      </div>
                    </div>
                  </div>

                  {/* Skills Tagged */}
                  <div className="mb-6">
                    <span className="font-geist text-[10px] text-black/40 font-black uppercase tracking-widest block mb-2">
                      Verified Competency Matrix:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s, sidx) => (
                        <span
                          key={sidx}
                          className="bg-[#F3F4F6] text-black text-xs font-bold font-geist px-3 py-1 rounded-full border border-black/5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  <button
                    onClick={() => onViewCertificate ? onViewCertificate(cert) : null}
                    className="flex-1 py-3 bg-black hover:bg-[#E6FF55] hover:text-black text-white rounded-full text-xs font-geist font-black uppercase tracking-wider transition-all text-center cursor-pointer shadow-sm"
                  >
                    View & Print Certificate
                  </button>
                  <button
                    onClick={() => copyHashToClipboard(`https://academy.abhijeet.ai/verify/${cert.credentialId}`)}
                    className="p-3 text-black hover:bg-black hover:text-white border border-black/10 rounded-full transition-all cursor-pointer"
                    title="Copy Public Verification URL"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Cohorts */}
      {activeTab === 'cohorts' && (
        <div className="space-y-6">
          <div className="bg-white border border-black/5 rounded-[40px] p-8 md:p-10 shadow-sm">
            <h3 className="font-hanken text-2xl font-black text-[#111827] mb-6">
              Upcoming Live Architecture Reviews & Office Hours
            </h3>
            <div className="space-y-4">
              {[
                {
                  date: 'September 04, 2026',
                  time: '18:00 UTC',
                  topic: 'Multi-Agent State Machine Live Code Review',
                  host: 'Abhijeet Kumar',
                  status: 'Live Link Available in 6 Days'
                },
                {
                  date: 'September 11, 2026',
                  time: '18:00 UTC',
                  topic: 'Sub-Second Vector Search & Quantization Benchmark',
                  host: 'Abhijeet Kumar',
                  status: 'Confirmed'
                },
                {
                  date: 'September 18, 2026',
                  time: '18:00 UTC',
                  topic: 'Capstone Defense & Architecture Audit Panel',
                  host: 'Executive Advisory Board',
                  status: 'Confirmed'
                }
              ].map((c, cidx) => (
                <div
                  key={cidx}
                  className="bg-[#F9FAFB] border border-black/5 rounded-[28px] p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-black/20 shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-black text-[#E6FF55] flex flex-col items-center justify-center shrink-0 font-geist shadow-sm">
                      <span className="text-[9px] font-black uppercase tracking-wider text-white">SEP</span>
                      <span className="text-lg font-black leading-none text-[#E6FF55]">0{cidx * 7 + 4}</span>
                    </div>
                    <div>
                      <h4 className="font-hanken text-lg font-black text-[#111827]">
                        {c.topic}
                      </h4>
                      <p className="font-inter text-xs text-black/50 font-semibold">
                        Host: {c.host} · {c.time}
                      </p>
                    </div>
                  </div>

                  <span className="font-geist text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full bg-[#E6FF55] text-black border border-black/5 self-start sm:self-center shadow-sm">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

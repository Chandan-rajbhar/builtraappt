import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { toolsList } from '../data/presentationData';
import { 
  ChevronRight, Calendar, Download, Upload, Plus, Search, 
  Filter, FileText, Folder, CheckCircle2, Clock, AlertCircle, 
  Send, Package, Truck, Layers, Settings, Eye, CheckCircle, 
  XCircle, ArrowRight, Lock, Wallet, TrendingUp, Users, 
  Network, Briefcase, Shield, Check, Phone, Mail, Award, AlertTriangle
} from 'lucide-react';

export default function BrowserFrame({ activeToolName, onSelectTool }) {
  const frameRef = useRef(null);
  
  // Track active view per tool: 'live', 'screenshot', or 'orgchart' (for Project Team)
  const [viewModes, setViewModes] = useState({});

  const activeTool = toolsList.find(t => t.name === activeToolName);
  const currentMode = viewModes[activeToolName] || 'live';

  const setModeForCurrent = (mode) => {
    setViewModes(prev => ({ ...prev, [activeToolName]: mode }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bar fill
      gsap.fromTo('.frame-bar-anim',
        { width: '0%' },
        { width: (i, target) => target.getAttribute('data-w') || '100%', duration: 0.8, ease: 'power3.out', delay: 0.05 }
      );

      // Animate cards & rows entrance
      gsap.fromTo('.frame-item-anim',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out', delay: 0.1 }
      );
    }, frameRef);

    return () => ctx.revert();
  }, [activeToolName, currentMode]);

  // Common Header with View Toggle
  const renderHeaderToggle = (liveLabel, screenshotLabel = "Platform Screenshot", extraViews = null) => {
    return (
      <div className="flex items-center justify-between text-xs px-1 pt-1 pb-2 border-b border-[var(--line)]">
        <span className="text-[var(--muted)] font-mono text-[11px] truncate max-w-[200px] sm:max-w-none">
          {currentMode === 'live' ? liveLabel : currentMode === 'orgchart' ? 'Auto-Generated Hierarchy Chart' : 'Authentic Screenshot Captured from Builtraa'}
        </span>
        <div className="flex items-center gap-1 bg-[var(--bg)] p-0.5 rounded-lg border border-[var(--line)] shrink-0">
          <button
            onClick={() => setModeForCurrent('live')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              currentMode === 'live' 
                ? 'bg-[var(--card)] text-[var(--acc)] shadow-xs font-bold' 
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            Live View
          </button>
          {extraViews}
          <button
            onClick={() => setModeForCurrent('screenshot')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all cursor-pointer ${
              currentMode === 'screenshot' 
                ? 'bg-[var(--card)] text-[var(--acc)] shadow-xs font-bold' 
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            Screenshot
          </button>
        </div>
      </div>
    );
  };

  // Common Screenshot Viewer
  const renderScreenshot = (imageSrc, altText) => (
    <div className="rounded-xl overflow-hidden border border-[var(--line)] bg-slate-50 mt-2">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-full h-auto object-cover max-h-[360px]"
      />
    </div>
  );

  return (
    <div ref={frameRef} className="w-full rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-md overflow-hidden text-left">
      
      {/* =========================================================================
          1. DAILY LOG: 13-Module Dashboard
         ========================================================================= */}
      {activeToolName === 'Daily Log' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--acc)] text-xl">📋</span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Daily Logs</h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] font-mono text-[11px] flex items-center gap-1 shadow-2xs">
                <span>📅</span> {activeTool.dailyLogDate}
              </span>
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Logs Overview
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors cursor-pointer">
                + Create Log
              </span>
            </div>
          </div>

          {renderHeaderToggle("Interactive 13-Module Architecture")}

          {currentMode === 'live' ? (
            <div className="max-h-[320px] overflow-y-auto pr-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {activeTool.subSections.map((sec) => (
                <div 
                  key={sec.id}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/50 transition-all flex items-center justify-between group shadow-2xs cursor-pointer hover:bg-[var(--bg)]/50"
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="text-xs font-bold text-[var(--text)] group-hover:text-[var(--acc)] transition-colors">
                      {sec.title}
                    </div>
                    <div className="text-[11px] text-[var(--muted)] leading-tight line-clamp-1">
                      {sec.desc}
                    </div>
                  </div>
                  <span className={`w-6 h-6 rounded-lg ${sec.badgeColor} flex items-center justify-center shrink-0`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/daily-logs-dashboard.jpg", "Daily Logs Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)]">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="font-semibold text-[var(--text)] text-xs">Daily Biometric Attendance</span>
              <span className="font-mono font-bold text-[var(--acc)] text-xs">148 / 150 (98.6%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[var(--line)] overflow-hidden">
              <div className="frame-bar-anim h-full bg-[var(--acc)] rounded-full" data-w="98.6%"></div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. SCHEDULE: WBS 7-Phase Gantt View
         ========================================================================= */}
      {activeToolName === 'Schedule' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[var(--acc)]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Schedule</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                  Manage your project timelines and events.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-[var(--text)] font-semibold text-[11px] shadow-2xs">
                Today
              </span>
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors cursor-pointer">
                Import
              </span>
            </div>
          </div>

          {renderHeaderToggle("WBS 7-Phase Work Breakdown Structure")}

          {currentMode === 'live' ? (
            <div className="max-h-[320px] overflow-y-auto pr-1 space-y-1.5 text-left">
              <div className="grid grid-cols-12 gap-2 pb-2 px-2 border-b border-[var(--line)] text-[11px] font-mono font-bold text-[var(--muted)] uppercase">
                <div className="col-span-6">Task Phase</div>
                <div className="col-span-2 text-center">Start</div>
                <div className="col-span-2 text-center">End</div>
                <div className="col-span-2 text-right">Duration</div>
              </div>

              {activeTool.schedulePhases.map((phase) => (
                <div 
                  key={phase.id}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all space-y-1.5 shadow-2xs"
                >
                  <div className="grid grid-cols-12 gap-2 items-center text-xs">
                    <div className="col-span-6 font-bold text-[var(--text)] truncate flex items-center gap-1.5">
                      <span className="text-[var(--acc)] font-mono text-[10px]">&gt;</span>
                      <span className="truncate">{phase.name}</span>
                    </div>
                    <div className="col-span-2 text-center font-mono text-[11px] text-[var(--muted)]">
                      {phase.start}
                    </div>
                    <div className="col-span-2 text-center font-mono text-[11px] text-[var(--muted)]">
                      {phase.end}
                    </div>
                    <div className="col-span-2 text-right font-mono font-bold text-slate-800 text-xs">
                      {phase.duration}
                    </div>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`frame-bar-anim h-full ${phase.color} rounded-full`}
                      data-w={`${phase.pct}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/schedule-gantt-dashboard.png", "Schedule WBS Gantt Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ef144e]"></span>
              Today Timeline: <strong>Wed, Nov 18th, 2026</strong>
            </span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              +2 Days Ahead of Baseline
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          3. TASKS: Real 5 Tasks Table from Builtraa Screenshot
         ========================================================================= */}
      {activeToolName === 'Tasks' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--acc)] text-lg">☑️</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Tasks</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project tasks.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Add Task
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[var(--acc)] font-bold text-[11px] flex items-center gap-1">
              Total Tasks <span className="bg-[var(--acc)] text-white px-1.5 py-0.2 rounded-full text-[10px]">5</span>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-semibold text-[11px]">
              In Progress <strong className="font-mono">1</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-semibold text-[11px]">
              To Do <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
              Completed <strong className="font-mono">1</strong>
            </span>
          </div>

          {renderHeaderToggle("Interactive Tasks Registry (5 Items)")}

          {currentMode === 'live' ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 p-1.5 bg-[var(--bg)] rounded-lg border border-[var(--line)] text-xs">
                <div className="flex items-center gap-1.5 text-[var(--muted)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--card)] text-[var(--text)] font-semibold shadow-2xs">All Tasks</span>
                  <span className="px-2 py-0.5 text-[11px]">Assigned to Me</span>
                  <span className="hidden sm:inline px-2 py-0.5 text-[11px]">Created by Me</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[var(--muted)] font-mono">
                  <Search className="w-3.5 h-3.5" />
                  <span>Search tasks...</span>
                </div>
              </div>

              <div className="max-h-[250px] overflow-y-auto pr-1 space-y-1.5">
                {activeTool.items.map((t, idx) => (
                  <div 
                    key={idx}
                    className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                  >
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="font-bold text-[var(--text)] truncate flex items-center gap-1.5">
                        <span className="text-[var(--muted)]">☆</span>
                        <span className="truncate">{t.task}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                        <span className="px-1.5 py-0.2 rounded bg-slate-100 font-mono">{t.category}</span>
                        <span>Due: {t.due}</span>
                        <span>Assignee: <strong className="text-slate-700">{t.assignee}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${t.statusColor}`}>
                        {t.status}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.priorityColor}`}>
                        ⚑ {t.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            renderScreenshot("/tasks-dashboard.png", "Tasks Platform Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Field Task Velocity & Completion</span>
            <span className="font-mono font-bold text-[var(--acc)]">80.0% On Track</span>
          </div>
        </div>
      )}

      {/* =========================================================================
          4. DOCUMENTS: 5 Core Discipline Folders & Revision Standards
         ========================================================================= */}
      {activeToolName === 'Documents' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div className="flex items-center gap-2">
              <Folder className="w-5 h-5 text-[var(--acc)]" />
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">All Documents</h3>
                <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                  Scope: This Project • Drawing Sheets & CAD
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--bg)] text-teal-700 font-semibold text-[11px] shadow-2xs">
                Drawings View
              </span>
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--acc)] text-[11px] font-medium shadow-2xs">
                Folder Standards
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + New Folder
              </span>
            </div>
          </div>

          {renderHeaderToggle("Discipline Folder Hierarchy (ISO Standardized)")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[300px] overflow-y-auto pr-1">
              {activeTool.folders.map((f) => (
                <div 
                  key={f.id}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between group shadow-2xs cursor-pointer hover:bg-[var(--bg)]/40"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-amber-500 text-lg">📁</span>
                    <div>
                      <div className="text-xs font-bold text-[var(--text)] group-hover:text-[var(--acc)] transition-colors">
                        {f.name}
                      </div>
                      <div className="text-[10px] font-mono text-[var(--muted)]">
                        Created on: {f.updated}
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--bg)] border border-[var(--line)] text-slate-700">
                    {f.tag}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/documents-dashboard.png", "Documents Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Controlled Drawing Package Status</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Rev 04 IFC (100% Governed)
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          5. RFIS: Requests for Information with KPI Counters
         ========================================================================= */}
      {activeToolName === 'RFIs' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">RFIs</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project's Requests for Information.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export Log
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + New RFI
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[var(--acc)] font-bold text-[11px]">
              Total RFIs <strong className="font-mono">5</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
              Open <strong className="font-mono">1</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-semibold text-[11px]">
              Pending <strong className="font-mono">1</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-[11px]">
              Overdue <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 font-semibold text-[11px]">
              Avg. Age <strong className="font-mono">42 days</strong>
            </span>
          </div>

          {renderHeaderToggle("Interactive RFI Resolution Log")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((rfi, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-[10px]">{rfi.num}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-100 font-mono text-[9px] text-slate-600">{rfi.cat}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {rfi.title}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] flex items-center gap-2">
                      <span>Owner: <strong>{rfi.assigned}</strong></span>
                      <span>Due: {rfi.due}</span>
                      <span className="text-rose-600 font-mono font-bold">({rfi.days}d)</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      rfi.status === 'Open' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      rfi.status === 'Answered' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      rfi.status === 'Pending' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {rfi.status}
                    </span>
                    <span className="p-1 rounded hover:bg-slate-100 text-slate-500 cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/rfis-dashboard.png", "RFIs Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Technical Closure SLA</span>
            <span className="font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              60.0% Closed • 2 Overdue Active
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. SUBMITTALS: 11 Real Packages & Status Cards
         ========================================================================= */}
      {activeToolName === 'Submittals' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Submittals</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project submittals.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export Submittals
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Add Submittal
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            {activeTool.kpis.map((kpi, idx) => (
              <div key={idx} className="p-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-2xs">
                <div className={`text-base sm:text-lg font-heading font-bold ${kpi.color}`}>
                  {kpi.count}
                </div>
                <div className="text-[9px] font-mono text-[var(--muted)] uppercase truncate">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>

          {renderHeaderToggle("Contractor Submittal Registry (11 Items)")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((sub, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {sub.title}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[var(--muted)] font-mono">
                      <span>{sub.rev}</span>
                      <span>•</span>
                      <span>{sub.disc}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${sub.badge}`}>
                    {sub.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/submittals-dashboard.png", "Submittals Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Approval Health</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              5 of 11 Approved (72.7% Review Velocity)
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          7. TRANSMITTALS: Formal Issue Log TR-0001 to TR-0005
         ========================================================================= */}
      {activeToolName === 'Transmittals' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Transmittals</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project transmittals.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Add Transmittal
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[var(--acc)] font-bold text-[11px]">
              Total Transmittals <strong>5</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
              Sent <strong>5</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-[11px]">
              Draft <strong>0</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-[11px]">
              Action Required <strong>0</strong>
            </span>
          </div>

          {renderHeaderToggle("Official Delivery Log (TR-0001 - TR-0005)")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((tr, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-xs">{tr.num}</span>
                      <span className="text-[10px] text-[var(--muted)] font-mono">{tr.date}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {tr.title}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] flex items-center gap-2">
                      <span>To: <strong className="text-slate-700">{tr.to}</strong></span>
                      <span>•</span>
                      <span className="font-mono">{tr.files}</span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${tr.purposeColor}`}>
                    {tr.purpose}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/transmittals-dashboard.png", "Transmittals Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Electronic Proof of Issue</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              100% Verified Delivery (Zero Disputes)
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          8. MATERIAL REQUESTS: Site Requisitions with PM Approval Flow
         ========================================================================= */}
      {activeToolName === 'Material Request' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Material Requests</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track material requests for this project.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + New Request
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-semibold text-[11px]">
              Pending Approval <strong>01</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
              Approved <strong>03</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[11px]">
              Rejected <strong>00</strong>
            </span>
          </div>

          {renderHeaderToggle("Interactive Site Material Requisitions")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((mr, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-[10px]">{mr.code}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-100 font-mono text-[9px] text-slate-600">{mr.cat}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {mr.name}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-700">Qty: {mr.qty}</span>
                      <span>•</span>
                      <span>Req Date: {mr.date}</span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${mr.statusColor}`}>
                    {mr.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/material-requests-dashboard.png", "Material Requests Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Site Requisition Approval Velocity</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              75.0% Approved
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          9. OPERATIONAL ASSETS: Machinery & Plant Equipment Registry
         ========================================================================= */}
      {activeToolName === 'Operational Assets Request' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Operational Assets Request</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Request, track & manage site machinery, tools & equipment.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + New Request
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {activeTool.kpis.map((kpi, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md border border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] text-[10px] font-mono">
                {kpi.label} <strong>{kpi.count}</strong>
              </span>
            ))}
          </div>

          {renderHeaderToggle("Machinery & Asset Requisitions")}

          {currentMode === 'live' ? (
            <div className="py-10 px-4 rounded-xl border border-dashed border-[var(--line)] bg-[var(--bg)] text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[var(--text)]">
                  {activeTool.emptyState.title}
                </h4>
                <p className="text-xs text-[var(--muted)] max-w-sm mx-auto leading-relaxed mt-0.5">
                  {activeTool.emptyState.desc}
                </p>
              </div>
              <button className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs inline-flex items-center gap-1 shadow-xs transition-colors cursor-pointer">
                <Plus className="w-3.5 h-3.5" />
                <span>Create Asset Request</span>
              </button>
            </div>
          ) : (
            renderScreenshot("/operational-assets-dashboard.png", "Operational Assets Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Heavy Plant Fleet Readiness</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              100% Fleet On Standby
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          10. BUDGET & COSTS: Baseline Locked & Division 01-03 WBS
         ========================================================================= */}
      {activeToolName === 'Budget & Costs' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--acc)] text-lg">💰</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Budget</h3>
                <span className="px-2 py-0.5 rounded-md border border-emerald-300 bg-emerald-50 text-emerald-700 text-[10px] font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Budget Locked
                </span>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Track project budgets, cost codes, allocations & change orders.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Create
              </span>
            </div>
          </div>

          {/* Sub-tabs matching screenshot */}
          <div className="flex items-center gap-1.5 text-xs overflow-x-auto pb-1">
            <span className="px-3 py-1 rounded-md bg-[var(--acc)] text-white font-bold text-[11px] shadow-xs">Budget</span>
            <span className="px-2.5 py-1 rounded-md text-[var(--muted)] hover:text-[var(--text)] text-[11px]">Budget Details</span>
            <span className="px-2.5 py-1 rounded-md text-[var(--muted)] hover:text-[var(--text)] text-[11px]">Forecasting</span>
            <span className="px-2.5 py-1 rounded-md text-[var(--muted)] hover:text-[var(--text)] text-[11px]">Snapshots</span>
            <span className="px-2.5 py-1 rounded-md text-[var(--muted)] hover:text-[var(--text)] text-[11px]">Budget Changes</span>
          </div>

          {renderHeaderToggle("Standard Budget Construction Divisions")}

          {currentMode === 'live' ? (
            <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.divisions.map((div, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2.5 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all space-y-1 text-xs shadow-2xs"
                >
                  <div className="flex items-center justify-between font-bold text-[var(--text)]">
                    <span className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.2 rounded bg-rose-50 text-[var(--acc)] font-mono text-[10px]">{div.code}</span>
                      <span>{div.name}</span>
                      <span className="text-[10px] text-[var(--muted)] font-normal">({div.items})</span>
                    </span>
                    <span className="font-mono text-[var(--acc)]">{div.revised}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[var(--line)]/50 text-[10px] font-mono">
                    <div>
                      <span className="text-[var(--muted)] block">Original Budget:</span>
                      <span className="font-semibold text-slate-700">{div.original}</span>
                    </div>
                    <div>
                      <span className="text-[var(--muted)] block">Committed:</span>
                      <span className="font-semibold text-amber-700">{div.committed}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[var(--muted)] block">Direct Costs:</span>
                      <span className="font-semibold text-emerald-700">{div.direct}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/budget-dashboard.jpg", "Budget Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Committed Exposure</span>
            <span className="font-mono font-bold text-[var(--acc)] bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              BHD 332,500.000 (32.2% Committed)
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          11. CONTRACTS: Commercial Packages & Change Orders
         ========================================================================= */}
      {activeToolName === 'Contracts' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Contracts</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project contracts.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Export Excel
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Add Contract
              </span>
            </div>
          </div>

          {/* 4 KPI Cards matching screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            {activeTool.kpis.map((kpi, idx) => (
              <div key={idx} className="p-2 rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-2xs text-left">
                <div className="text-[9px] font-mono text-[var(--muted)] uppercase truncate mb-1">
                  {kpi.label}
                </div>
                <div className="text-xs sm:text-sm font-heading font-bold text-[var(--text)] truncate">
                  {kpi.val}
                </div>
                <div className="text-[9px] text-[var(--muted)]">
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>

          {renderHeaderToggle("Commercial Subcontracts Portfolio (4 Agreements)")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((c, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-[10px]">{c.num}</span>
                      <span className="text-[10px] text-[var(--muted)] font-mono">{c.dates}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {c.title}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] truncate">
                      Subcontractor: <strong className="text-slate-700">{c.party}</strong>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${c.statusColor}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/contracts-dashboard.png", "Contracts Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Commercial Execution Status</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              2 of 4 Approved (BHD 47.5K Change Orders)
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          12. OBSERVATIONS: HSE Safety & QA/QC Site Findings
         ========================================================================= */}
      {activeToolName === 'Observations' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--acc)] text-lg">👁️</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Observations</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track project observations.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="hidden sm:inline-flex px-2.5 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] text-[11px] font-medium shadow-2xs">
                Show Archived
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Create Observation
              </span>
            </div>
          </div>

          {/* KPI Badges */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[var(--acc)] font-bold text-[11px]">
              Total Observations <strong className="font-mono">5</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-[11px]">
              Open <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-semibold text-[11px]">
              In Progress <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 font-semibold text-[11px]">
              Resolved <strong className="font-mono">1</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-500 font-semibold text-[11px]">
              Closed <strong className="font-mono">0</strong>
            </span>
          </div>

          {renderHeaderToggle("Interactive HSE & QA/QC Site Log")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((obs, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-[10px]">{obs.id}</span>
                      <span className="px-1.5 py-0.2 rounded bg-slate-100 font-mono text-[9px] text-slate-600">{obs.cat}</span>
                      <span className={`px-1.5 py-0.2 rounded font-mono text-[9px] font-bold ${obs.priorityColor}`}>⚑ {obs.priority}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {obs.title}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] flex items-center gap-2 truncate">
                      <span>Loc: <strong>{obs.loc}</strong></span>
                      <span>•</span>
                      <span>Owner: {obs.owner}</span>
                      <span>•</span>
                      <span>Target: {obs.target}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${obs.statusColor}`}>
                    {obs.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/observations-dashboard.png", "Observations Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Site Safety & Compliance Rate</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              60.0% Resolved / Under Control
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          13. PUNCH LIST: Snags, Corrective & Handover Defect Closure
         ========================================================================= */}
      {activeToolName === 'Punch List' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--acc)] text-lg">📝</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Punch List</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and track your project punch list items.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Create Item
              </span>
            </div>
          </div>

          {/* KPI Badges matching screenshot */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-[var(--acc)] font-bold text-[11px]">
              Total Punch Items <strong className="font-mono">5</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-[11px]">
              Open <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-semibold text-[11px]">
              In Progress <strong className="font-mono">2</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-500 font-semibold text-[11px]">
              Resolved <strong className="font-mono">0</strong>
            </span>
            <span className="px-2.5 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
              Closed <strong className="font-mono">1</strong>
            </span>
          </div>

          {renderHeaderToggle("Handover Snag Resolution Registry")}

          {currentMode === 'live' ? (
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.items.map((pi, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--acc)] text-[10px]">{pi.id}</span>
                      <span className="px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 font-mono text-[9px]">{pi.work}</span>
                      <span className="text-[10px] font-mono text-slate-500">⚑ {pi.priority}</span>
                    </div>
                    <div className="font-bold text-[var(--text)] truncate text-[11px]">
                      {pi.title}
                    </div>
                    <div className="text-[10px] text-[var(--muted)] flex items-center gap-2 truncate">
                      <span>Loc: {pi.loc}</span>
                      <span>•</span>
                      <span>Assignee: <strong>{pi.assignee}</strong></span>
                      <span>•</span>
                      <span>Target: {pi.target}</span>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${pi.statusColor}`}>
                    {pi.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            renderScreenshot("/punch-list-dashboard.png", "Punch List Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Snag Burn-Down Velocity</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              60.0% Resolved / In Progress
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          14. PROJECT TEAM: Directory List & Org Chart Hierarchy
         ========================================================================= */}
      {activeToolName === 'Project Team' && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--line)]">
            <div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--acc)]" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text)]">Teams</h3>
              </div>
              <p className="text-[11px] text-[var(--muted)] m-0 leading-none">
                Manage and organize your project team members.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3.5 py-1.5 rounded-lg bg-[var(--acc)] hover:bg-[#b01e19] text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer">
                + Add Member
              </span>
            </div>
          </div>

          {/* Triple-Toggle: Directory, Org Chart, and Screenshot */}
          {renderHeaderToggle(
            "Project Team Directory (7 Members)",
            "Platform Screenshot",
            <button
              onClick={() => setModeForCurrent('orgchart')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                currentMode === 'orgchart' 
                  ? 'bg-[var(--card)] text-[var(--acc)] shadow-xs font-bold' 
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              Org Chart
            </button>
          )}

          {currentMode === 'live' && (
            /* Directory List View */
            <div className="space-y-1.5 max-h-[250px] overflow-y-auto pr-1">
              {activeTool.members.map((m, idx) => (
                <div 
                  key={idx}
                  className="frame-item-anim p-2 rounded-xl border border-[var(--line)] bg-[var(--card)] hover:border-[var(--acc)]/40 transition-all flex items-center justify-between gap-2 text-xs shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-[var(--line)] flex items-center justify-center font-heading font-bold text-slate-700 text-xs shrink-0">
                      {m.initials}
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[var(--text)] text-xs">{m.name}</span>
                        <span className="font-mono text-[9px] text-[var(--muted)]">({m.code})</span>
                        <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold border ${m.tierColor}`}>
                          {m.tier}
                        </span>
                      </div>
                      <div className="text-[10px] text-[var(--muted)] truncate">
                        {m.role} • <span className="font-mono">{m.email}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    Active
                  </span>
                </div>
              ))}
            </div>
          )}

          {currentMode === 'orgchart' && (
            /* Org Chart Hierarchy Interactive View */
            <div className="p-3 bg-[var(--bg)] rounded-xl border border-[var(--line)] space-y-2.5 text-center">
              <div className="inline-block p-2 rounded-lg border border-amber-400 bg-amber-50 text-xs">
                <span className="text-[10px] uppercase font-mono block text-amber-800 font-bold">Managing Director</span>
                <strong className="text-slate-900">Alexander Hayes</strong>
                <span className="text-[10px] text-slate-500 block font-mono">EPP-00101</span>
              </div>
              
              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>

              <div className="inline-block p-2 rounded-lg border border-rose-400 bg-rose-50 text-xs">
                <span className="text-[10px] uppercase font-mono block text-rose-800 font-bold">Project Manager</span>
                <strong className="text-slate-900">David Chen</strong>
                <span className="text-[10px] text-slate-500 block font-mono">EPP-00104</span>
              </div>

              <div className="w-0.5 h-3 bg-slate-300 mx-auto"></div>

              <div className="grid grid-cols-3 gap-1 text-[11px]">
                <div className="p-1.5 rounded-lg border border-emerald-400 bg-emerald-50">
                  <span className="text-[9px] uppercase font-mono block text-emerald-800">Project Engineer</span>
                  <strong className="text-slate-800 truncate block text-[10px]">Elena Rostova</strong>
                </div>
                <div className="p-1.5 rounded-lg border border-emerald-400 bg-emerald-50">
                  <span className="text-[9px] uppercase font-mono block text-emerald-800">Safety Officer</span>
                  <strong className="text-slate-800 truncate block text-[10px]">James O'Connor</strong>
                </div>
                <div className="p-1.5 rounded-lg border border-emerald-400 bg-emerald-50">
                  <span className="text-[9px] uppercase font-mono block text-emerald-800">Site Engineer</span>
                  <strong className="text-slate-800 truncate block text-[10px]">Tariq Al-Mansoor</strong>
                </div>
              </div>
            </div>
          )}

          {currentMode === 'screenshot' && (
            renderScreenshot("/team-directory-dashboard.png", "Team Directory Dashboard")
          )}

          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Governance & Hierarchy</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              7 Stakeholders • 100% RBAC Governed
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          15. OVERVIEW / TOOLS SUITE VIEW (For Slide 02)
         ========================================================================= */}
      {(activeToolName === 'Overview' || !activeTool) && (
        <div className="p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--acc)] text-base">🛠️</span>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--text)] m-0 leading-tight">
                  Project Tools Directory
                </h3>
                <p className="text-[11px] font-mono text-[var(--muted)] m-0 leading-none">
                  Single Tools Menu Architecture
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[var(--acc)] font-bold bg-[var(--hl)] px-2.5 py-0.5 rounded-full">
              14 Core Modules
            </span>
          </div>

          {renderHeaderToggle("Interactive 14 Tools Menu", "Authentic Tools Menu Screenshot")}

          {currentMode === 'live' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* MANAGEMENT (9) */}
              <div>
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-[var(--muted)] uppercase mb-2 flex items-center justify-between">
                  <span>MANAGEMENT (9)</span>
                  <span className="text-[10px] text-[var(--acc)]">Site Execution</span>
                </h4>
                <div className="space-y-1">
                  {toolsList.slice(0, 9).map((tool, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectTool && onSelectTool(idx + 2)}
                      className="menu-item group hover:border-[var(--acc)]/50 transition-all flex items-center justify-between"
                    >
                      <span className="truncate">{tool.name}</span>
                      <span className="text-[10px] font-mono text-[var(--muted)] group-hover:text-[var(--acc)] transition-colors">
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FINANCIALS & QUALITY (5) */}
              <div>
                <h4 className="text-[11px] font-mono font-bold tracking-wider text-[var(--muted)] uppercase mb-2 flex items-center justify-between">
                  <span>FINANCIALS & QUALITY (5)</span>
                  <span className="text-[10px] text-emerald-600">Commercial & QA</span>
                </h4>
                <div className="space-y-1">
                  {toolsList.slice(9, 14).map((tool, idx) => (
                    <div
                      key={idx}
                      onClick={() => onSelectTool && onSelectTool(idx + 11)}
                      className="menu-item group hover:border-[var(--acc)]/50 transition-all flex items-center justify-between"
                    >
                      <span className="truncate">{tool.name}</span>
                      <span className="text-[10px] font-mono text-[var(--muted)] group-hover:text-[var(--acc)] transition-colors">
                        →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            renderScreenshot("/tools-menu.png", "Builtraa Tools Menu Screenshot")
          )}

          {/* Telemetry Bar */}
          <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between text-xs">
            <span className="font-semibold text-[var(--text)]">Standardized Platform Workflows</span>
            <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              100% Live Modules Active
            </span>
          </div>
        </div>
      )}

    </div>
  );
}

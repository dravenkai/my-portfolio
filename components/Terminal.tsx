"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { profile, projects, skillGroups } from "@/data/content";

type Line = { kind: "in" | "out"; text: string };

const prompt = "guest@portfolio";

function answer(raw: string) {
  const command = raw.trim().toLowerCase();
  if (!command) return "";
  if (command === "help") {
    return "whoami · about · skills · projects · contact · clear";
  }
  if (command === "whoami") {
    return `${profile.name}\n${profile.alsoKnownAs}\n${profile.role}\n${profile.year}\n${profile.location}`;
  }
  if (command === "about") return profile.summary;
  if (command === "skills") {
    return skillGroups.map((group) => `${group.title}\n  ${group.items.join("  ")}`).join("\n\n");
  }
  if (command === "projects") {
    return projects.map((project) => `${project.title}  —  ${project.context}`).join("\n");
  }
  if (command === "contact") {
    return `${profile.email}\n${profile.phoneDisplay}\n${profile.telegram}\n${profile.github}`;
  }
  if (command === "clear") return "__clear__";
  return `command not found: ${command}\ntype help`;
}

const starters = ["whoami", "projects", "skills", "contact"];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Kaung Myat Thant — junior web developer\ntype help, or tap a command." },
  ]);
  const [value, setValue] = useState("");
  const bottom = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottom.current?.scrollIntoView({ block: "nearest" });
  }, [lines]);

  function run(raw: string) {
    const text = raw.trim();
    if (!text) return;
    const result = answer(text);
    if (result === "__clear__") {
      setLines([]);
      return;
    }
    setLines((current) => [...current, { kind: "in", text }, { kind: "out", text: result }]);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    run(value);
    setValue("");
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6" aria-label="Interactive terminal">
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c0e14] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <p className="ml-2 font-mono text-xs text-muted">portfolio — zsh</p>
        </div>
        <div className="h-64 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-6 sm:h-72 sm:text-sm" onClick={() => input.current?.focus()}>
          {lines.map((line, index) => (
            <p key={`${line.kind}-${index}`} className="whitespace-pre-wrap">
              {line.kind === "in" ? (
                <>
                  <span className="text-mint">{prompt}</span>
                  <span className="text-muted"> $ </span>
                  {line.text}
                </>
              ) : (
                <span className="text-ink/90">{line.text}</span>
              )}
            </p>
          ))}
          <div ref={bottom} />
        </div>
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-2 no-scrollbar">
          {starters.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => run(command)}
              className="shrink-0 rounded-full border border-line px-3 py-2 font-mono text-xs text-mint"
            >
              {command}
            </button>
          ))}
        </div>
        <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/10 px-4 py-3">
          <label htmlFor="terminal-command" className="font-mono text-sm text-mint">
            $
          </label>
          <input
            id="terminal-command"
            ref={input}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            placeholder="type a command"
            className="min-w-0 flex-1 bg-transparent font-mono text-base text-ink outline-none placeholder:text-muted sm:text-sm"
          />
          <button type="submit" className="rounded-full bg-accent px-3 py-2 text-xs font-semibold text-[#1a0c08]">
            Run
          </button>
        </form>
      </div>
    </section>
  );
}

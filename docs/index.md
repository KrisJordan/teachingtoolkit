---
hide:
  - navigation
  - toc
---

<header class="ai-directory-hero">
  <p class="ai-directory-hero__eyebrow">UNC Teaching Toolkit</p>
  <h1>AI Tool Directory</h1>
  <p>Compare teaching-focused AI tools by campus support, activity type, data tier, and model-training protections.</p>
</header>

<div class="ai-directory-sticky-bar" id="ai-directory-sticky-bar">
<div class="ai-directory-controls" id="ai-directory-controls" aria-label="AI tool directory grouping controls">
  <span class="ai-directory-controls__label">Organize By</span>
  <div class="ai-directory-control-set" role="group" aria-label="Organize by">
    <button type="button" class="ai-directory-control is-active" data-ai-directory-mode="support" aria-pressed="true">UNC Support</button>
    <button type="button" class="ai-directory-control" data-ai-directory-mode="activityType" aria-pressed="false">Type of Activity</button>
    <button type="button" class="ai-directory-control" data-ai-directory-mode="privacyTier" aria-pressed="false">UNC Tier / FERPA</button>
    <button type="button" class="ai-directory-control" data-ai-directory-mode="trainingProtection" aria-pressed="false">Training Protection</button>
  </div>
</div>
<nav id="ai-directory-toc-nav" class="ai-directory-toc-nav" aria-label="Jump to section"></nav>
</div>

<div id="ai-tool-directory-app" class="ai-tool-directory" aria-live="polite"></div>

<script id="ai-tool-directory-data" type="application/json">
[
  {
    "tool": "Copilot 365",
    "application": "Chat",
    "summary": "Campus-supported AI chat for drafting, revising, summarizing, and analyzing teaching materials inside UNC's Microsoft environment.",
    "supportGroup": "UNC supported",
    "activityType": "AI chat",
    "privacyTier": "Tier 2 / FERPA",
    "trainingProtection": "Protected",
    "trainingNote": "UNC's Microsoft agreement is documented in this toolkit for Tier 1 and Tier 2 protected workflows.",
    "parentTool": "Copilot 365",
    "displayGroup": "Copilot 365",
    "link": "tools/copilot-365/",
    "sortOrder": 10
  },
  {
    "tool": "Copilot 365",
    "application": "Instructor Tools",
    "summary": "Teaching-specific lesson plan and rubric tools for workflows that may involve protected student records.",
    "supportGroup": "UNC supported",
    "activityType": "Instructor planning",
    "privacyTier": "Tier 2 / FERPA",
    "trainingProtection": "Protected",
    "trainingNote": "Use the UNC Microsoft 365 environment, not personal consumer AI accounts, for protected workflows.",
    "parentTool": "Copilot 365",
    "displayGroup": "Copilot 365",
    "link": "tools/copilot-365/",
    "sortOrder": 20
  },
  {
    "tool": "PromptLab",
    "application": "Chat",
    "summary": "UNC Libraries' multi-model chat space for brainstorming, comparing models, and drafting with low-sensitivity teaching materials.",
    "supportGroup": "UNC supported",
    "activityType": "AI chat",
    "privacyTier": "Tier 1",
    "trainingProtection": "Protected",
    "trainingNote": "PromptLab states that data is not shared with external providers and is not used to train public AI models.",
    "parentTool": "PromptLab",
    "displayGroup": "PromptLab",
    "link": "tools/promptlab/",
    "sortOrder": 30
  },
  {
    "tool": "PromptLab",
    "application": "Agents",
    "summary": "No-code course agents that can use attached course context for study support, FAQs, and structured practice without FERPA data.",
    "supportGroup": "UNC supported",
    "activityType": "Course agents",
    "privacyTier": "Tier 1",
    "trainingProtection": "Protected",
    "trainingNote": "Keep student grades, identifiable student work, and other FERPA records out of PromptLab agents.",
    "parentTool": "PromptLab",
    "displayGroup": "PromptLab",
    "link": "tools/promptlab/",
    "sortOrder": 40
  },
  {
    "tool": "Gradescope",
    "application": "AI-Assisted Grading",
    "summary": "Canvas-integrated grading workflows where AI can suggest answer groups while instructors and TAs make scoring decisions.",
    "supportGroup": "UNC supported",
    "activityType": "Assessment and grading",
    "privacyTier": "Tier 2 / FERPA",
    "trainingProtection": "Unknown",
    "trainingNote": "Gradescope is documented here as FERPA-compliant, but this toolkit does not document model-training terms for answer grouping.",
    "parentTool": "Gradescope",
    "displayGroup": "Gradescope",
    "link": "tools/gradescope/",
    "sortOrder": 50
  },
  {
    "tool": "Zoom",
    "application": "AI Companion",
    "summary": "Meeting summaries, action items, and in-meeting assistance for office hours, TA coordination, and planning conversations.",
    "supportGroup": "UNC supported",
    "activityType": "Meeting support",
    "privacyTier": "Tier 1",
    "trainingProtection": "Unknown",
    "trainingNote": "This toolkit does not yet document UNC-specific AI Companion training terms; avoid sensitive student records unless campus guidance confirms the workflow.",
    "parentTool": "Zoom",
    "displayGroup": "Zoom",
    "link": "https://www.zoom.com/en/products/ai-companion/",
    "sortOrder": 60
  },
  {
    "tool": "Adobe Firefly",
    "application": "Generative Media",
    "summary": "Image and short media generation for slides, handouts, examples, and visual concepts that do not include protected student data.",
    "supportGroup": "UNC supported",
    "activityType": "Visual and media creation",
    "privacyTier": "Tier 1",
    "trainingProtection": "Unknown",
    "trainingNote": "Use for public or low-sensitivity teaching assets; this toolkit does not yet document UNC-specific upload or training terms.",
    "parentTool": "Adobe Firefly",
    "displayGroup": "Adobe Firefly",
    "link": "https://www.adobe.com/products/firefly.html",
    "sortOrder": 70
  },
  {
    "tool": "Canvas",
    "application": "Discussion Summary",
    "summary": "Course discussion summaries inside Canvas that help instructors scan themes and unanswered questions in class conversations.",
    "supportGroup": "UNC supported",
    "activityType": "Canvas course workflow",
    "privacyTier": "Tier 2 / FERPA",
    "trainingProtection": "Unknown",
    "trainingNote": "Canvas is the supported course space, but this toolkit does not yet document model-training terms for Discussion Summary.",
    "parentTool": "Canvas",
    "displayGroup": "Canvas",
    "link": "tools/canvas-tips/",
    "sortOrder": 80
  },
  {
    "tool": "NotebookLM",
    "application": "Source-Grounded Notebooks",
    "summary": "Document-grounded Q&A, study guides, summaries, flashcards, and quizzes using sources you upload.",
    "supportGroup": "Not UNC supported",
    "activityType": "Student study support",
    "privacyTier": "Tier 1",
    "trainingProtection": "Unknown",
    "trainingNote": "NotebookLM states uploaded content is not used for model training unless feedback is provided; do not upload FERPA records.",
    "parentTool": "NotebookLM",
    "displayGroup": "NotebookLM",
    "link": "tools/notebooklm/",
    "sortOrder": 90
  },
  {
    "tool": "MagicSchool.ai",
    "application": "Teaching Generators",
    "summary": "Form-based generators for lesson plans, group work, rubrics, worksheets, quizzes, and other draft teaching materials.",
    "supportGroup": "Not UNC supported",
    "activityType": "Instructor planning",
    "privacyTier": "Tier 1",
    "trainingProtection": "Unknown",
    "trainingNote": "This toolkit does not document UNC approval or training protections for MagicSchool; keep student data out of prompts and uploads.",
    "parentTool": "MagicSchool.ai",
    "displayGroup": "MagicSchool.ai",
    "link": "tools/magic-school/",
    "sortOrder": 100
  },
  {
    "tool": "Claude",
    "application": "General Chat",
    "summary": "A consumer or individually managed AI chat option for public examples, general brainstorming, and non-sensitive drafting.",
    "supportGroup": "Not UNC supported",
    "activityType": "AI chat",
    "privacyTier": "Tier 0",
    "trainingProtection": "Not protected",
    "trainingNote": "Assume consumer chat prompts may be reviewed or used for improvement unless your specific account terms say otherwise.",
    "parentTool": "Claude",
    "displayGroup": "Claude",
    "link": "https://claude.ai/",
    "sortOrder": 110
  },
  {
    "tool": "ChatGPT",
    "application": "General Chat",
    "summary": "A consumer or individually managed AI chat option for public examples, general brainstorming, and non-sensitive drafting.",
    "supportGroup": "Not UNC supported",
    "activityType": "AI chat",
    "privacyTier": "Tier 0",
    "trainingProtection": "Not protected",
    "trainingNote": "Assume consumer chat prompts may be reviewed or used for improvement unless your specific account terms say otherwise.",
    "parentTool": "ChatGPT",
    "displayGroup": "ChatGPT",
    "link": "https://chatgpt.com/",
    "sortOrder": 120
  }
]
</script>

<div class="ai-directory-fallback">

## Default View: UNC Support

### UNC Supported

<div class="tool-comparison-table tool-comparison-table-compact ai-directory-table">
<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Application</th>
      <th>Activity Type</th>
      <th>UNC Tier / FERPA</th>
      <th>Training Protection</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/copilot-365/">Copilot 365</a> <span>2 applications</span></th></tr>
    <tr><td>Copilot 365</td><td class="ai-directory-child-label">Chat</td><td>AI chat</td><td><span class="tier-badge tier-2">2</span> Tier 2 / FERPA</td><td><span class="training-badge training-protected">Protected</span></td><td>Campus-supported AI chat for drafting, revising, summarizing, and analyzing teaching materials inside UNC's Microsoft environment.</td></tr>
    <tr><td>Copilot 365</td><td class="ai-directory-child-label">Instructor Tools</td><td>Instructor planning</td><td><span class="tier-badge tier-2">2</span> Tier 2 / FERPA</td><td><span class="training-badge training-protected">Protected</span></td><td>Teaching-specific lesson plan and rubric tools for workflows that may involve protected student records.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/promptlab/">PromptLab</a> <span>2 applications</span></th></tr>
    <tr><td>PromptLab</td><td class="ai-directory-child-label">Chat</td><td>AI chat</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-protected">Protected</span></td><td>UNC Libraries' multi-model chat space for brainstorming, comparing models, and drafting with low-sensitivity teaching materials.</td></tr>
    <tr><td>PromptLab</td><td class="ai-directory-child-label">Agents</td><td>Course agents</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-protected">Protected</span></td><td>No-code course agents that can use attached course context for study support, FAQs, and structured practice without FERPA data.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/gradescope/">Gradescope</a> <span>1 application</span></th></tr>
    <tr><td>Gradescope</td><td class="ai-directory-child-label">AI-Assisted Grading</td><td>Assessment and grading</td><td><span class="tier-badge tier-2">2</span> Tier 2 / FERPA</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Canvas-integrated grading workflows where AI can suggest answer groups while instructors and TAs make scoring decisions.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="https://www.zoom.com/en/products/ai-companion/">Zoom</a> <span>1 application</span></th></tr>
    <tr><td>Zoom</td><td class="ai-directory-child-label">AI Companion</td><td>Meeting support</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Meeting summaries, action items, and in-meeting assistance for office hours, TA coordination, and planning conversations.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="https://www.adobe.com/products/firefly.html">Adobe Firefly</a> <span>1 application</span></th></tr>
    <tr><td>Adobe Firefly</td><td class="ai-directory-child-label">Generative Media</td><td>Visual and media creation</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Image and short media generation for slides, handouts, examples, and visual concepts that do not include protected student data.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/canvas-tips/">Canvas</a> <span>1 application</span></th></tr>
    <tr><td>Canvas</td><td class="ai-directory-child-label">Discussion Summary</td><td>Canvas course workflow</td><td><span class="tier-badge tier-2">2</span> Tier 2 / FERPA</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Course discussion summaries inside Canvas that help instructors scan themes and unanswered questions in class conversations.</td></tr>
  </tbody>
</table>
</div>

### Not UNC Supported

<div class="tool-comparison-table tool-comparison-table-compact ai-directory-table">
<table>
  <thead>
    <tr>
      <th>Tool</th>
      <th>Application</th>
      <th>Activity Type</th>
      <th>UNC Tier / FERPA</th>
      <th>Training Protection</th>
      <th>Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/notebooklm/">NotebookLM</a> <span>1 application</span></th></tr>
    <tr><td>NotebookLM</td><td class="ai-directory-child-label">Source-Grounded Notebooks</td><td>Student study support</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Document-grounded Q&amp;A, study guides, summaries, flashcards, and quizzes using sources you upload.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup"><a href="tools/magic-school/">MagicSchool.ai</a> <span>1 application</span></th></tr>
    <tr><td>MagicSchool.ai</td><td class="ai-directory-child-label">Teaching Generators</td><td>Instructor planning</td><td><span class="tier-badge tier-1">1</span> Tier 1</td><td><span class="training-badge training-conditional">Unknown</span></td><td>Form-based generators for lesson plans, group work, rubrics, worksheets, quizzes, and other draft teaching materials.</td></tr>
    <tr class="ai-directory-parent-row"><th colspan="6" scope="rowgroup">LLM Chats <span>2 applications</span></th></tr>
    <tr><td>Claude</td><td class="ai-directory-child-label"><a href="https://claude.ai/">General Chat</a></td><td>AI chat</td><td><span class="tier-badge tier-0">0</span> Tier 0</td><td><span class="training-badge training-not-protected">Not protected</span></td><td>A consumer or individually managed AI chat option for public examples, general brainstorming, and non-sensitive drafting.</td></tr>
    <tr><td>ChatGPT</td><td class="ai-directory-child-label"><a href="https://chatgpt.com/">General Chat</a></td><td>AI chat</td><td><span class="tier-badge tier-0">0</span> Tier 0</td><td><span class="training-badge training-not-protected">Not protected</span></td><td>A consumer or individually managed AI chat option for public examples, general brainstorming, and non-sensitive drafting.</td></tr>
  </tbody>
</table>
</div>

</div>

## How to Read the Labels

- **Tier 0:** Public information, such as general academic concepts, public readings, and examples that could be posted on a website.
- **Tier 1:** Internal drafts and low-sensitivity teaching materials, such as lesson plans, rough exam ideas, and brainstorming notes.
- **Tier 2 / FERPA:** Confidential education records, such as identifiable student work, grades, feedback, and roster information connected to performance.
- **Training protection:** Whether this toolkit has a documented reason to believe prompts, uploads, or generated assets are protected from being used to improve future public models. Use **Unknown** when the available guide language is mixed, account-dependent, or not yet documented here.

For more detail, see [Data Protection Basics for Instructors](tools/data-privacy.md).
# PromptLab

| Applications | UNC Supported | Cost | Time to Setup | Shortcut | UNC Data Protection |
|-------|---------------|------|------|---------------|-----------------|
| AI Chat<br>Custom Agents<br>Course Agents<br>File Analysis<br>Multi-model Comparison | Yes | Free | < 1 minute | [promptlab.lib.unc.edu](https://promptlab.lib.unc.edu) | Tier 0 & 1 Only |

PromptLab is UNC's AI chat platform, supported by the [Library AI Studio](https://library.unc.edu/ai/library-ai-studio/). It gives all Carolina instructors and students free access to leading AI models from OpenAI, Anthropic, Google, and Meta in a single interface. Your data is not shared with external providers and is not used to train public AI models.

The standout feature for instructors is the ability to build **custom AI agents** — no coding required — and share them directly with students.

!!! warning "PromptLab is Tier 0 and Tier 1 Only"

    PromptLab is approved for publicly available (Tier 0) and low-sensitivity business information (Tier 1). **Do not enter FERPA-protected student records, grades, or other confidential data.** For tasks involving student grades or FERPA data, use [Copilot 365](copilot-365.md) instead.

## Demonstration Video

For a quick overview of PromptLab and how UNC faculty can use it, this 3-minute demonstration walks you through the platform and shows how to build a simple course agent.

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/PLACEHOLDER" 
    title="PromptLab 3-minute Demo"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## Getting Started

1. Go to [promptlab.lib.unc.edu](https://promptlab.lib.unc.edu)
2. Select **Continue with ONYEN** and sign in
3. Start chatting — the default model is ready to go

The interface has three key areas: the **chat window** in the center, the **model selector** in the top-left corner, and a **right-side panel** where you can adjust model settings, build agents, or manage files.

## Key Features for Instructors

### Chat with Leading AI Models

PromptLab provides access to models from OpenAI (ChatGPT 5 series), Anthropic (Claude), Google (Gemini), Meta (Llama), and Mistral — all in one place. Switch between models with a single click using the model selector in the top-left corner.

This is useful when you want to compare how different AI systems answer the same question. PromptLab supports **multi-model conversations** where two models respond side by side so you can evaluate which gives a better answer for your task.

### Build Custom Agents (No Code Required)

An agent is a custom AI assistant with its own instructions, personality, and optional knowledge base. You configure it through a simple form — no programming needed.

To create an agent:

1. Open the **Agent Builder** in the right-hand panel
2. Give it a name and a description
3. Write instructions telling it how to behave
4. Choose which AI model it should use
5. Optionally attach files (syllabus, rubric, readings) as background knowledge
6. Click **Create**

For example, you could build a "POLI 100 Study Partner" agent that knows your course syllabus, answers questions in the tone you set, and redirects students to campus resources when appropriate.

!!! success "60-second Idea: Build a Course FAQ Agent"

    Tired of answering the same student questions about due dates, grading policies, and office hours? Upload your syllabus as **File Context** in an agent, give it instructions like "Answer student questions about this course based on the attached syllabus. Be helpful and concise. If you don't know the answer, tell the student to email the instructor." Share it with your students and point them to it for quick answers.

### Share Agents with Students

Once you build an agent, you can share it directly with students by their ONYEN:

1. Open the agent in the **Agent Builder**
2. Click the **Share** icon
3. Search for students and assign **Viewer** permission
4. Students will see the agent in their **Agent Marketplace**

Students who have signed in to PromptLab can then use your agent for structured, course-specific AI support that aligns with your teaching goals.

!!! info "Sharing Limitation"

    Agents cannot be shared publicly with "everyone." You must share with specific ONYENs, and those users must have signed in to PromptLab at least once.

### Upload Files for Context

You can upload documents — PDFs, Word files, images — into a conversation or into an agent's knowledge base. PromptLab supports multiple upload modes:

- **File Context**: Text is extracted and added to the agent's instructions as permanent background knowledge.
- **File Search**: Documents are indexed so the agent can search through them and cite relevant passages (Retrieval Augmented Generation).
- **Upload as Text**: Text is extracted and added directly to the current conversation.

This means you can upload a dense academic paper and ask the AI to summarize it, or give an agent your full reading list so students can ask questions grounded in course materials.

### Prompt Library

Save and reuse prompts you find yourself typing repeatedly. Prompts can include **fill-in variables** using double braces (e.g., `{{topic}}`, `{{assignment}}`) so you can create reusable templates. Type `/` in the chat window to pull up your saved prompts instantly.

### Import from ChatGPT

If you have been using ChatGPT and want to move to a UNC-supported platform, PromptLab can import your exported ChatGPT conversation history.

## Ideas for Instructors

### Create a Structured Study Partner

Build an agent loaded with your course readings and lecture notes. Instruct it to quiz students using the Socratic method rather than giving direct answers. Students get on-demand practice with material you control.

### Draft and Compare with Multiple Models

Use multi-model conversations to draft a rubric or lesson plan with two different AI models at once. Compare the outputs side by side and pick the best elements from each.

### Scaffold Peer Review

Create an agent with your assignment rubric as File Context and instructions to walk students through giving peer feedback. Students paste in a classmate's draft and the agent guides them through each rubric criterion with questions rather than judgments.

### Brainstorm Active Learning Activities

Chat with a model about a specific lecture topic and ask it to brainstorm interactive exercises, discussion prompts, or think-pair-share activities. Upload your slide deck for more targeted suggestions.

## PromptLab vs. Other AI Tools

| Feature | PromptLab | [Copilot 365](copilot-365.md) | [MagicSchool](magic-school.md) |
|---------|-----------|-------------|-------------|
| UNC Supported | Yes | Yes | No |
| Cost | Free | Free | Free (limited) |
| Data Protection | Tier 0 & 1 | ==Tier 2 (FERPA)== | No |
| Multiple AI Models | Yes | Microsoft only | One model |
| Custom Agents | Yes | No | No |
| File Upload | Yes | Yes | Yes |
| Form-based Tools | No (chat-based) | Yes (Teach tools) | Yes (50+ generators) |
| Shareable with Students | Yes (agents) | No | No |

**Use PromptLab when** you want direct access to multiple leading AI models, need to build custom agents for your course, or want to share AI tools with students in a UNC-supported environment.

**Use Copilot 365 when** you are working with FERPA-protected student data like grades, or want structured form-based teaching tools like the Lesson Plan Creator and Rubric Creator.

**Use MagicSchool when** you want a quick, form-based workflow for a specific task like generating a rubric or quiz without writing any prompts.

## Cost

PromptLab is free for all UNC affiliates with an ONYEN. It is supported by UNC Libraries and funded by the AI Acceleration Program (AIAP).

## Learn More

- [PromptLab LibGuide](https://guides.lib.unc.edu/promptlab) — Full documentation from UNC Libraries
- [PromptLab Workshop Recording](https://uncch.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f8566c93-bdd8-4339-8a29-b3e00119badf) — Hands-on demonstration
- [Library AI Studio](https://library.unc.edu/ai/library-ai-studio/) — Contact for questions or consultations
- [PromptLab Terms of Service](https://library.unc.edu/documentation/promptlab-terms-conditions/)
- [PromptLab Privacy Information](https://library.unc.edu/documentation/promptlab-privacy-information/)

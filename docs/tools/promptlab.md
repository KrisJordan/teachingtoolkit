# PromptLab

_Last Updated: March 5th, 2026_

| Applications | UNC Supported | Cost | Time to Setup | Shortcut | FERPA Data |
|-------|---------------|------|------|---------------|-----------------|
| AI Chat<br>Agents<br>Multi-model Chat | Yes | Free | < 1 minute | [promptlab.lib.unc.edu](https://promptlab.lib.unc.edu) | [No<br>Tier 1 Only](data-privacy.md){ title="Public and internal draft data only. No student grades or FERPA data." } |

PromptLab is UNC's AI chat platform, supported by the [Library AI Studio](https://library.unc.edu/ai/library-ai-studio/). It gives all Carolina instructors and students free access to leading AI models from OpenAI, Anthropic, Google, and Meta in a single interface. Your data is not shared with external providers and is not used to train public AI models.

The standout feature for instructors is the ability to build **custom AI agents**, no programming required, and share them directly with students. However, this feature does not yet scale to large enrollment courses as students need to be added one-by-one. The staff at LibraryAI Studio are working to improve this.

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

## Key Features for Instructors

### Chat with Leading AI Models

PromptLab provides access to models from OpenAI (ChatGPT 5 series), Anthropic (Claude), Google (Gemini), Meta (Llama), and Mistral all in one place. Switch between models with a single click using the model selector in the top-left corner.

**Why does having multiple models matter for teaching?**

Having access to different AI models, particularly different *sizes* of models, offers excellent, hands-on ways to demonstrate to students how generative AI actually works and where it fails:

- **Illustrating AI Pitfalls:** Smaller models, like ChatGPT nano or Llama 17b, are much more likely to reach the "edges" of their knowledge quickly. Because of this, they are far more prone to "hallucinations" (inventing false information) and demonstrating the risks inherent in generative AI. Many of the pitfalls of relying on AI are best illustrated with these smaller models because their flaws show up much sooner and more obviously than in massive, advanced models.
- **Time vs. Quality Trade-offs:** You can easily demonstrate the trade-off between response time and response quality. Smaller models reply almost instantly but can lack deep reasoning, while larger models take more time to process but offer much higher quality outputs.
- **Comparing Perspectives:** PromptLab supports **multi-model conversations** where two models respond side by side. This lets you and your students compare how different models interpret and answer the exact same prompt, highlighting their different biases and analytical approaches.

### Build Custom Agents (No Code Required)

An agent is a custom AI assistant with its own instructions, persona, and optional knowledge base. You configure it through a simple form.

To create an agent:

1. Open the **Agent Builder** in the right-hand panel
2. Give it a name and a description
3. Write instructions telling it how to behave
4. Choose which AI model it should use
5. Optionally attach files (syllabus, rubric, readings) as background knowledge
6. Click **Create**

For example, you could build a "Study Partner" agent that knows your course syllabus, answers questions in the tone you set, and redirects students to campus resources when appropriate.

!!! success "60-second Idea: Build a Course FAQ Agent"

    Tired of answering the same student questions about grading policies and office hours? Upload your syllabus as **File Context** in an agent, give it instructions like "Answer student questions about this course based on the attached syllabus. Be helpful and concise. If you don't know the answer, tell the student to email a TA or instructor." Share it with your students and point them to it for quick answers.

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

You can upload documents, including PDFs, Word files, and images, into a conversation or into an agent's knowledge base.

!!! warning "PromptLab cannot be used with FERPA protected data"

    **Do not enter FERPA-protected student records, grades, or other confidential data.** For tasks involving student grades or FERPA data, use [Copilot 365](copilot-365.md) instead.PromptLab is approved for [publicly available (Tier 0) and low-sensitivity business information (Tier 1)](data-privacy.md). 

## Ideas for Instructors

### Create a Structured Study Partner

Build an agent loaded with your course readings and lecture notes. Instruct it to quiz students using the Socratic method rather than giving direct answers. Students get on-demand practice with material you control.

### Draft and Compare with Multiple Models

Use multi-model conversations to draft a rubric or lesson plan with two different AI models at once. Compare the outputs side by side and pick the best elements from each.

## PromptLab vs. Other AI Tools

| Feature | PromptLab | [Copilot 365](copilot-365.md) | [MagicSchool](magic-school.md) |
|---------|-----------|-------------|-------------|
| UNC Supported | Yes | Yes | No |
| Cost | Free | Free | Free (limited) |
| FERPA Data | No | ==Yes== | No |
| Multiple AI Models | Yes | Microsoft only | One model |
| Custom Agents | Yes | No | No |
| File Upload | Yes | Yes | Yes |
| Form-based Tools | No (chat-based) | Yes (Teach tools) | Yes (50+ generators) |
| Shareable with Students | Yes (agents) | No | No |

## Cost

PromptLab is free for all UNC affiliates with an ONYEN. It is supported by UNC Libraries and funded by the AI Acceleration Program (AIAP).

## Learn More

- [PromptLab LibGuide](https://guides.lib.unc.edu/promptlab) — Full documentation from UNC Libraries
- [PromptLab Workshop Recording](https://uncch.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f8566c93-bdd8-4339-8a29-b3e00119badf) — Hands-on demonstration
- [Library AI Studio](https://library.unc.edu/ai/library-ai-studio/) — Contact for questions or consultations
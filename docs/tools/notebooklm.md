# NotebookLM (Google)

_Last Updated: April 2026_

| Applications | UNC Supported | Cost, Time to Setup | Shortcut | FERPA Data |
|-------|-------|------|------|-----------------|
| Document Q&A<br>Study Guides<br>Flashcards & Quizzes | No | Free<br>< 5 minutes | [notebooklm.google](https://notebooklm.google/) | [No](data-privacy.md){ title="Do not use for sensitive data or student information." }  |

NotebookLM is Google's AI research tool that answers questions **using the documents you upload**. Unlike a general-purpose chatbot, NotebookLM is "source-grounded." It reads the  files you upload and its responses come from that material with inline citations to your documents you can click to verify.

This matters for instructors because NotebookLM it reduces the likelihood of hallucinations and simplifies verification. Every response is traceable back to a specific passage in a specific document you provided. If the answer is not in your sources, it will tell you.

## Demonstration Video

For a quick overview of NotebookLM and how UNC instructors can use it, this demonstration walks through uploading course materials and asking questions that generate useful teaching artifacts.

<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/zQn5PiRG_ys"
    title="NotebookLM for Instructors Demo"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## Getting Started

1. Go to [notebooklm.google](https://notebooklm.google/)
2. Sign in with your Google account
3. Click **New Notebook**
4. Upload your sources: PDFs, Google Docs, Google Slides, web URLs, YouTube links, Word documents, or audio files
5. Start asking questions in the chat panel

Each notebook supports up to **50 sources**, and each source can be up to **500,000 words** or 200MB. (For reference, the complete series of seven Harry Potter books is about 1,000,000 words.) You can select or deselect individual sources to control which documents the AI draws from for a given question.

!!! success "60-second Idea: Syllabus Quiz Questions"

    Assigning an asynchronous 'Syllabus Quiz' at the start of the semester, via Canvas or Gradescope, is a common practice among instructors to ensure students read and understand of a course's most important policies. Try uploading your syllabus to NotebookLM and prompt: 'Please generate a syllabus quiz suitable for Canvas/Gradescope that covers the most important policies of my course.'

## Why Instructors Find It Useful

### It Shows Its Work

Every response includes **inline citations.** The citations link directly to the quoted passage in your source material. Hover over a citation to see the full quote. Click it to jump to the location in the original document.

This is not a summary pulled from the internet. It is a reference to your material, and you can verify it in seconds.

### It Scopes to Your Documents

NotebookLM does not search the web for additional sources without your asking it to. It  aims to avoid making statements from a general training dataset when answering your questions. If you upload three research papers, it frames its responses to those three papers. This constraint is what makes it more trustworthy for instructional work: the AI avoids introducing outside information or fabricated sources.

## Use Cases for Teaching

### Course Prep and Instructional Design

Upload your syllabus, lecture slides, and assigned readings into a single notebook. Then ask NotebookLM to help you work with that material:

- "Help me brainstorm discussion questions based on the Brooks chapter 2 reading."
- "Draft some open ended questions that explore the key tensions between these two readings."

### Research and Literature Review

If you or your students are working with a collection of research papers, NotebookLM is valuable for synthesis:

- Upload multiple papers and ask "Summarize the methodology used across these studies."
- Ask "Which of these sources provides the strongest evidence for X?"
- Use **Source Discovery** to search the web or Google Drive for additional sources directly within the notebook.
- Use **Deep Research** to have NotebookLM automatically browse hundreds of websites and compile a multi-page report with cited sources.

!!! success "60-second Idea: Practice Information Literacy with Citations"

    Have students upload a set of sources into NotebookLM and ask it a research question. Then ask them to verify each inline citation by clicking through to the original passage. This is a practical exercise in evaluating AI-generated claims — students learn to check whether a citation actually supports the statement it's attached to.

### Student-Facing Study Support

Unfortunately, without an institutional partnership and single sign-on, you cannot easily share a Notebook with students other than adding their personal GMail accounts. This is discouraged.

Students can independently create their own notebooks, though, add course materials, and ask their own questions and get answers grounded in the material you assign. This is especially useful for:

- Exam review: students ask questions about readings and get cited answers
- Concept clarification: students ask for alternative explanations of dense material
- Self-testing: students generate flashcards or quizzes on demand

## Data Privacy

**NotebookLM is not approved for FERPA-protected data.** Do not upload student grades, identifiable student work, or other confidential records. For tasks involving FERPA data, use [Copilot 365](copilot-365.md).

Your sources and chat history are private to you and not visible to other users unless you explicitly share your notebook with them.

NotebookLM does **not** use your uploaded content to train AI models unless you provide thumbs-up or thumbs-down feedback on a response. When feedback is provided, Google may review the content associated with that feedback for product improvement.

## Cost

NotebookLM is free with any Google account. The free tier includes up to 50 sources per notebook with standard generation limits for flashcards, quizzes, and other artifacts. [Paid tiers](https://notebooklm.google/plans) are available, but the free tier is sufficient for most instructional uses.

## Learn More

- [NotebookLM Help Center](https://support.google.com/notebooklm) — Official documentation from Google
- [NotebookLM Home](https://notebooklm.google/) — Product overview and getting started
- [Privacy and Terms of Use](https://support.google.com/notebooklm/answer/17004255) — Data handling policies

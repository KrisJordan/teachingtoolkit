# Data Protection Basics for Instructors

Instructors work with many kinds of information: public readings, unpublished lesson plans, student submissions, grades, advising notes, and more. UNC-Chapel Hill's [Information Classification Standard](https://policies.unc.edu/TDClient/2833/Portal/KB/Article/131244/Information-Classification-Standard) sorts University information into tiers so you can choose tools that match the sensitivity of what you are using.

This page translates those tiers for common teaching work. It is not meant to make every AI task feel risky. The goal is to help you pause at the right moments and use the right campus-supported workflow.

A useful first question is: **Could this prompt, file, or output reveal something private about a specific student or other person?** If yes, use a workflow approved for that kind of information. If you are not sure whether something is Tier 1 or Tier 2, handle it as Tier 2 until you can confirm.

## Tier 0: Public Information

**What it is:** Information that has been approved for public sharing, is already public, or is intended to be published through normal public University or course channels. Tier 0 still needs to be accurate and attributed appropriately, but it does not require confidentiality controls.

**Examples:**

- General academic concepts or public knowledge
- Public readings, open web pages, and published examples
- Public course descriptions or syllabus pages
- Assignment prompts, handouts, or examples you have already shared publicly

**AI use:** Tier 0 material is the safest category for AI tools because it does not include private student, personnel, research, or operational information.

## Tier 1: Business Information

**What it is:** Internal University information used for teaching, planning, or routine operations. The public does not have direct access to it, but it can be shared with UNC colleagues who need it for their work. For instructors, Tier 1 often means course-planning material that does not identify, evaluate, or disclose records about a specific student.

**Examples:**

- Draft lesson plans, lecture notes, rubrics, or assignment prompts
- Rough exam questions or answer keys before release
- Department or course-planning notes
- De-identified or aggregate course observations that cannot reasonably point to a particular student
- Brainstorming notes for a new lecture topic or learning activity

Identifiers such as PIDs or ONYENs may be Tier 1 by themselves under the University standard. In teaching tools, treat them with care: once an identifier is connected to grades, feedback, attendance, submissions, participation, or other student-record context, you are in Tier 2.

**AI use:** Use tools marked for Tier 1 when your material is internal teaching work and does not include student education records. A tool can have training protections and still be limited to Tier 1, so check both labels.

## Tier 2: Confidential Information, Including FERPA Records

**What it is:** Information the University must keep confidential because of law, regulation, contract, or policy. For instructors, the most common Tier 2 category is FERPA-protected education records.

The practical line is this: if the material identifies a student and says something about their coursework, performance, enrollment, class schedule, feedback, participation, or submitted work, treat it as Tier 2 unless campus guidance documents a different treatment.

**Examples:**

- Student grades, scores, rubric ratings, or written feedback
- Identifiable student papers, projects, exams, discussion posts, or peer reviews
- Rosters, PIDs, ONYENs, or other identifiers when connected to course activity or performance
- Class schedules or enrollment information that is not public
- Advising notes, recommendation notes, or other student-specific academic records

**AI use:** Use tools in this toolkit that explicitly support Tier 2 or FERPA workflows. For general-purpose AI chat and drafting, use [Copilot 365](copilot-365.md) in UNC's Microsoft 365 environment. Purpose-built course systems such as Canvas and Gradescope may handle student records in their normal supported workflows; do not copy identifiable student records from those systems into another AI tool unless that tool's guide explicitly supports Tier 2 or FERPA data.

## Tier 3: Restricted Information

**What it is:** Highly restricted information that should be shared only with specific people who need to know it. Tier 3 data often carries additional legal, safety, or notification requirements if it is disclosed improperly. Some FERPA-related records may be Tier 3 rather than Tier 2.

**Examples:**

- Social Security numbers, passports, passwords, or other login credentials
- Student health information, clinical records, or other protected health information
- Financial aid information, credit card numbers, or other regulated financial information
- Disciplinary conduct reports or sexual assault reports
- Export-controlled information or restricted research data

**AI use:** The general teaching AI tools in this directory are not a place for Tier 3 information. If your teaching, clinical, or research work involves Tier 3 data, ask for campus guidance before choosing an AI workflow.

---

## Rule of Thumb for Generative AI

Data tiers and model-training protections answer different questions:

- **Data tier:** What kind of information am I putting into the tool?
- **Training protection:** What does the tool or agreement say about using prompts, uploads, or outputs to improve future models?

You need both answers. A Tier 1 tool with strong training protections is still not automatically appropriate for FERPA records. A campus system that can hold FERPA records may still have AI-specific terms that are worth checking before you use a new feature.

For everyday teaching decisions:

- **Tier 0:** Public information is generally fine for AI tools.
- **Tier 1:** Internal drafts and low-sensitivity teaching materials are fine in tools marked for Tier 1.
- **Tier 2:** Identifiable student education records need tools and workflows that explicitly support FERPA or Tier 2 information.
- **Tier 3:** Restricted information needs specialized guidance before any AI use.

For the official definitions, see the [UNC Information Classification Standard](https://policies.unc.edu/TDClient/2833/Portal/KB/Article/131244/Information-Classification-Standard).

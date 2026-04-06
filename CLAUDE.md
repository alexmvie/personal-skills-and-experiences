# CLAUDE.md – Portfolio Skills & Experiences Update Workflow

## Project Purpose

This workspace maintains Alexander Mastny's professional portfolio and skills documentation across multiple formats:
- **SKILLS_ALEXANDER_MASTNY.md** – Comprehensive, detailed German skills documentation
- **SKILLS_ZUSAMMENFASSUNG.md** – Condensed summary version (German)
- **index.html & index-en.html** – HTML pages with skills content
- **index.md** – Markdown source for index pages

---

## Core Workflow: Adding/Updating Skills

### Pre-Update Checklist

Before making ANY changes to skills content:

```bash
git status
git log --oneline -1
```

**Requirements:**
- Working directory must be clean (no uncommitted changes)
- Must be on `main` branch
- Must be in sync with origin/main

### Update Process

#### Step 1: Review Current State
- Read `SKILLS_ALEXANDER_MASTNY.md` to understand existing structure and detail level
- Identify where new content logically belongs (section, subsection)
- Check `SKILLS_ZUSAMMENFASSUNG.md` for corresponding condensed sections

#### Step 2: Update SKILLS_ALEXANDER_MASTNY.md (Detailed)
- Add comprehensive, detailed information
- Include:
  - **Project examples** with specific tech stacks
  - **Implementation details** and approach
  - **Key learnings** and insights
  - **Specific versions, frameworks, libraries** used
  - **Performance metrics** or outcomes where applicable
- Maintain **consistent formatting** with existing sections
- Use proper Markdown structure (headers, bullet lists, code blocks)
- Keep German language throughout (consistent with file)

#### Step 3: Update SKILLS_ZUSAMMENFASSUNG.md (Condensed)
- Create **concise summary** of the new content
- **Keep essential information** (technologies, key concepts, brief examples)
- **Remove verbose descriptions** and implementation details
- Target: 30-50% of original detailed text length
- Organize under appropriate category sections
- Maintain alphabetical/logical ordering within sections

#### Step 4: Update HTML Pages
- **index.html** (German version) – Add/update skills section with content from ZUSAMMENFASSUNG
- **index-en.html** (English version) – Translate and add equivalent English content
- Keep HTML structure consistent with existing content
- Update any related metadata or summary sections
- Ensure responsive design is maintained
- **Update Footer Date:** Change "Zuletzt aktualisiert" in index.html and "Last updated" in index-en.html to current date (DD.MM.YYYY format)

#### Step 5: Update Version & Documentation

- Update VERSION.md with:
  - New version number (MAJOR.MINOR.PATCH)
  - Today's date as "Last Updated"
  - GitHub Pages deployment status
  - Entry in "Version Log" section with changes, commits, files modified
- Version increment rules:
  - **MAJOR (x.0.0)** – Structural changes, new main sections, major restructuring
  - **MINOR (0.x.0)** – New skills/content added, significant expansions
  - **PATCH (0.0.x)** – Bug fixes, accuracy corrections, refinements

#### Step 6: Update Date Stamps
- Update "Letzte Aktualisierung" field in SKILLS_ALEXANDER_MASTNY.md (at top/bottom as applicable)
- Update footer dates in both HTML files:
  - index.html: "Zuletzt aktualisiert: [TODAY]" (DD.MM.YYYY)
  - index-en.html: "Last updated: [TODAY]" (DD.MM.YYYY)

#### Step 6: Git Commit & Push
```bash
git add SKILLS_ALEXANDER_MASTNY.md SKILLS_ZUSAMMENFASSUNG.md index.html index-en.html
git commit -m "Add/Update skill: [SKILL_NAME]

**Detailed Documentation:** Added to SKILLS_ALEXANDER_MASTNY.md
**Summary:** Added condensed version to SKILLS_ZUSAMMENFASSUNG.md
**HTML Pages:** Updated both index.html and index-en.html

Content includes:
- [KEY_TECHNOLOGIES or FRAMEWORKS]
- [BRIEF_DESCRIPTION_OF_ADDITION]"
git push origin main
```

---

## Content Quality Guidelines

### Detail Level
- **ALEXANDER_MASTNY.md:** Go into depth - assume reader wants to understand the "how" and "why"
- **ZUSAMMENFASSUNG.md:** Focus on the "what" - highlight key technologies and notable achievements
- **HTML Pages:** Balance between detail and readability - assume portfolio visitor, not technical reviewer

### Technology Documentation Style
When documenting a technology, include:
1. **Technology name** and version (if applicable)
2. **Context** – Where/how it was used
3. **What problem did it solve?**
4. **Key features** used (if applicable)
5. **Integration points** with other technologies

### Example: Good Skill Addition
```markdown
### Frontend Frameworks

- **React** (19.x) – Moderne Frontend-Bibliothek für Web
  - Function Components mit Hooks
  - State Management via Zustand
  - Error Boundaries für Fehlerbehandlung
```

### File Structure Conventions
- **ALEXANDER_MASTNY.md:**
  - Main sections: About, Tech Stack, Projects, Bildung, KI-Entwicklung, Arbeitsweise, Kontakt
  - Use `###` headers for subsections
  - Projects should include: Tech stack, description, key implementation details

- **ZUSAMMENFASSUNG.md:**
  - Parallel structure to ALEXANDER_MASTNY but condensed
  - Separate sections for: Übersicht, Programmiersprachen, Frameworks, Technologie-Stack, Development Experience, AI Development
  - Use bullet lists for technologies with brief descriptions

---

## Git Workflow

### Before Actions
```bash
git fetch origin
git status
# MUST show: "On branch main" + "Your branch is up to date with 'origin/main'"
```

### After Actions
```bash
git add [CHANGED_FILES]
git commit -m "[DESCRIPTIVE_MESSAGE]"
git push origin main
```

### Commit Message Format
```
Add/Update skill: [SKILL_NAME]

**Detailed:** [Brief summary of what was added to ALEXANDER_MASTNY]
**Summary:** [Brief summary of ZUSAMMENFASSUNG changes]
**Pages:** Updated index.html and index-en.html

Details:
- [Change 1]
- [Change 2]
```

---

## File Locations & Roles

| File | Purpose | Language | Detail Level | Date Field |
|------|---------|----------|--------------|-------------|
| SKILLS_ALEXANDER_MASTNY.md | Complete skill documentation | DE | Very High | "Letzte Aktualisierung" |
| SKILLS_ZUSAMMENFASSUNG.md | Executive summary | DE | Medium | — |
| index.html | German portfolio page | DE | Medium | Footer: "Zuletzt aktualisiert" |
| index-en.html | English portfolio page | EN | Medium | Footer: "Last updated" |
| index.md | Markdown source | DE | Medium | — |
| VERSION.md | Version history & deployment tracking | EN | Reference | "Last Updated" + Version log |

---

## Important Constraints

1. **German Content:** ALEXANDER_MASTNY.md and ZUSAMMENFASSUNG.md are German-language documents
2. **English Translation:** HTML pages should match German content but in appropriate language
3. **No Duplication:** Each file should own its section - avoid copy-paste between files
4. **Consistency:** Technology names, version numbers, and terminology must be consistent across all files
5. **Date Tracking:** Update "Letzte Aktualisierung" (Last Update) fields when making changes
6. **Git Always:** Never make changes without git tracking - every update must be committed

---

## Quality Control & Accuracy Rules

### CRITICAL: NO HALLUCINATIONS

This is a **professional portfolio**. Every claim, technology name, version number, and detail must be **100% accurate and verifiable**. This is NOT a creative writing exercise.

### Accuracy Standards

**BEFORE making ANY changes:**
1. **Verify technology names exactly** – Use correct spelling:
   - NOT "GPT-5-Codec" → USE "GPT-5-Codex"
   - NOT invented variations of known names
   - If unsure about a name, ask for clarification BEFORE writing
2. **Check versions** – Version numbers must be current and accurate
3. **Avoid assumptions** – If information is unclear, ask for confirmation
4. **No "similar" technologies** – Use exact names, not approximations

### Content Validation Checklist

Before any file modification:

- [ ] All technology/product names are spelled 100% correctly
- [ ] All version numbers are current (not guessed)
- [ ] No invented features or tools mentioned
- [ ] All URLs/links are verified if included
- [ ] All project descriptions match actual implementations
- [ ] No generic descriptions without context
- [ ] No assumptions about user preferences

### When in Doubt

If ANY of these are unclear:
- Technology/product name spelling
- Exact version number
- Whether something was actually used vs. planned
- How a feature actually works

**→ STOP and ASK. Never guess or invent.**

### Cross-File Consistency Rules

When content appears in multiple files:
1. All occurrences must use identical spelling (especially technology names)
2. Version numbers must match across all files
3. No contradictions between ALEXANDER_MASTNY.md and ZUSAMMENFASSUNG.md
4. HTML pages must accurately reflect Markdown content

### Verification Workflow

```
Content Idea
    ↓
Exact Name/Version Verification → REQUIRED
    ↓
Write to ALEXANDER_MASTNY.md (detailed)
    ↓
Create ZUSAMMENFASSUNG.md (condensed)
    ↓
Update HTML pages
    ↓
Search files for spelling variations → MUST be identical
    ↓
Verification complete → Ready for commit
```

**NO content moves forward without verification.**

Stop and ask for clarification if:
- Unclear whether new skill fits into existing categories
- Conflicting information between files
- Need for substantial restructuring of existing content
- Questions about appropriate detail level
- Need for English translation approach

### Public Highlights & Social Media Automation

- **Public Highlights Check:** Before finalizing ANY update, the agent MUST explicitly ask the user: "Should a public highlight be created for this update in the 'Latest Highlights' section of the website?"
- **Social Media Automation:** If a highlight is created, automatically generate a file named `socialmedia-update-post.txt`.
  - **Tone:** Professional, factual, and concise.
  - **Strict Constraint:** No decorative emojis allowed. Flag emojis permitted for language indication.
  - **Structure:** Bilingual post with German and English sections:
    ```
    🇩🇪 [German text describing the update]
    https://alexmvie.github.io/personal-skills-and-experiences/index.html

    --

    🇺🇸 [English text describing the update]
    https://alexmvie.github.io/personal-skills-and-experiences/index-en.html
    ```
  - **Mandatory Content:** Always include the respective language links as shown above.

---

## Success Criteria

Update is considered successful when:
- ✅ SKILLS_ALEXANDER_MASTNY.md has comprehensive detail
- ✅ SKILLS_ZUSAMMENFASSUNG.md has concise summary (essential info retained)
- ✅ Both HTML pages updated with matching content
- ✅ All files have consistent technology names/versions
- ✅ All technology names verified for 100% accuracy
- ✅ VERSION.md updated with new version entry
- ✅ Git commit created with descriptive message
- ✅ Changes pushed to origin/main
- ✅ GitHub Pages deployed (automatic after push)
- ✅ No uncommitted changes remain

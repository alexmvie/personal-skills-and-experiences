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

#### Step 5: Update Date Stamps
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

---

## Important Constraints

1. **German Content:** ALEXANDER_MASTNY.md and ZUSAMMENFASSUNG.md are German-language documents
2. **English Translation:** HTML pages should match German content but in appropriate language
3. **No Duplication:** Each file should own its section - avoid copy-paste between files
4. **Consistency:** Technology names, version numbers, and terminology must be consistent across all files
5. **Date Tracking:** Update "Letzte Aktualisierung" (Last Update) fields when making changes
6. **Git Always:** Never make changes without git tracking - every update must be committed

---

## When to Stop & Ask

Stop and ask for clarification if:
- Unclear whether new skill fits into existing categories
- Conflicting information between files
- Need for substantial restructuring of existing content
- Questions about appropriate detail level
- Need for English translation approach

---

## Success Criteria

Update is considered successful when:
- ✅ SKILLS_ALEXANDER_MASTNY.md has comprehensive detail
- ✅ SKILLS_ZUSAMMENFASSUNG.md has concise summary (essential info retained)
- ✅ Both HTML pages updated with matching content
- ✅ All files have consistent technology names/versions
- ✅ Git commit created with descriptive message
- ✅ Changes pushed to origin/main
- ✅ No uncommitted changes remain

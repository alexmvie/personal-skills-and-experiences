# Alexander Mastny – Software Developer Portfolio

**Full-Stack Developer** | Wien, Österreich | 20+ Jahre Erfahrung  
**Fokus:** Cross-Platform Mobile, Web Development, Desktop Applications, KI-gestützte Entwicklung

**Version:** 2.7.0 (06.04.2026)

## Über mich

Erfahrener Full-Stack Software Developer mit über 20 Jahren Berufserfahrung und Spezialisierung auf moderne Web- und Mobile-Anwendungen. Ich entwickle skalierbare Lösungen von der Konzeption bis zum Deployment – von Cross-Platform Mobile Apps über Enterprise CMS bis hin zu Desktop-Anwendungen.

Seit 14+ Jahren erfolgreich im Remote/Homeoffice tätig, betreue ich Projekte von der ersten Idee bis zum fertigen Produkt. Meine Stärke liegt in der Verbindung von technischer Exzellenz mit pragmatischer Umsetzung.

**Kernkompetenzen:**

- **Cross-Platform Mobile Development** – React Native + Expo für iOS, Android und Web aus einer Codebasis
- **Full-Stack Web Development** – Next.js, Astro, PHP mit modernen State-Management-Lösungen
- **Desktop Applications** – C#/.NET Windows Forms mit Verschlüsselung, Dateiüberwachung und System-Tray-Integration
- **Enterprise CMS** – Payload CMS und WordPress mit Custom Plugins, API-Integration und mehrsprachigen Inhalten
- **KI-gestützte Softwareentwicklung** – Multi-LLM-Orchestrierung, Context Engineering und AI-QA

---

## Technologie-Stack

**Frontend:** React, React Native, Next.js, Astro, TypeScript, Tailwind CSS  
**Backend:** Node.js, Express.js, PHP, Firebase, Supabase  
**CMS:** Payload CMS, WordPress (Bricks, Elementor Pro)  
**Mobile:** Expo SDK, React Native Reanimated, Expo Router  
**Desktop:** C#/.NET 7.0, Windows Forms, Newtonsoft.Json  
**Build:** Vite, Turborepo, EAS Build, Gradle  
**Deployment:** Docker, FTP, Firebase Hosting, GitHub Pages

---

## Projekte

### Fenix-Win2Web – Windows Desktop Application

**Tech:** C#/.NET 7.0, Windows Forms, AES Encryption, FileSystemWatcher, Newtonsoft.Json  
Desktop-Anwendung für automatisierten Datei-Upload mit Echtzeit-Überwachung. Implementierung: FileSystemWatcher für Verzeichnis-Monitoring, AES-Verschlüsselung (Aes.Create, Rfc2898DeriveBytes, SHA256) für sensible Konfigurationsdaten, asynchrone HTTP-Kommunikation mit Retry-Logik. System-Tray-Integration via NotifyIcon, Single-Instance-Enforcement mit Mutex, mehrsprachige UI (DE/EN) über Dictionary-basierte Localization. Thread-safe Logging mit Rotation und Event-basiertem UI-Update.

### T-Mobile Corporate Mobile Prototypen

**Tech:** React Native, Expo SDK 53, Expo AV, Linear Gradient, SVG Transformer, React Native Reanimated  
Cross-Platform Mobile Prototypen für T-Mobile mit Video-Intro (Auto-Play mit Auto-Advance), Swipe-Navigation über 6 Screens und Corporate Design System (Magenta Branding). Implementierung: Expo AV für Video-Playback, Linear Gradient für Backgrounds, SVG Transformer für T-Mobile Logo als React Component. Mehrere Varianten: Expo (Hauptimplementierung), Kotlin (nur Video-Feature), AnimStudy. Product Data JSON für konfigurierbare Produkt-Daten, Device Info Detection via Expo Device.

### GymTracker Antigravity – Fitness App

**Tech:** React Native, Expo SDK 54, Firebase Firestore + Auth, Zustand, Immer, React Native Reanimated  
Vollständige Fitness-Tracking-App mit Workout Builder (Drag & Drop), Live-Session-Tracking mit Timer, Statistiken und Real-Time-Chat. Architektur: Context API für Multi-Provider State Management (Auth, Workout, NumberPad, Toast, AppReady), Offline-First mit useOfflineFirebase, Error Boundaries für Graceful Error Handling. Features: Custom Fonts (InterTight), Haptics via Expo Haptics, Splash Screen, EAS Build für APK-Generierung.

### QUILL NextJS PageBuilder – Full-Stack CMS

**Tech:** Next.js 15, Payload CMS 3.20, Turborepo, TypeScript, Zod, @dnd-kit, Lexical, Sharp  
Enterprise Page Builder mit Block-Registry (registerBlock, getBlockConfig, PageRenderer), Drag & Drop via @dnd-kit/sortable, Media Management mit Upload/Optimization/Folders und mehrsprachigen Inhalten (DE/EN/SK). Monorepo-Architektur mit packages/_ und apps/_ Workspaces, Docker-Deployment mit Caddy Reverse Proxy. SQLite-Datenbank, Rich Text Editor via Lexical, Zod für Schema-basierte Validierung, Playwright E2E Tests.

### Alex Mastny Homepage – Next.js Portfolio

**Tech:** Next.js 15, TypeScript, Tailwind CSS, DaisyUI, TipTap, @dnd-kit, React Hook Form, Sharp, Playwright  
**Projekt aktuell in Entwicklung**  
Vollständige Portfolio-Website mit integriertem Admin-Interface. Features: 35+ Portfolio-Projekte mit Filterung, Suche und Kategorisierung. Admin-Bereich mit Dashboard, Projekt-Management (CRUD), Technology/Category/Tag-Verwaltung, Image Library mit Upload, Screenshot Capture mit Streaming API und Real-Time Progress. Architektur: Next.js App Router, AdminGuard für Access Control, API Endpoints für Projects/Images/Screenshots. Deployment: Vercel-optimiert.

### Halloween Webpage – Creative Static Site

**Website:** https://halloween-twilight.alex-mastny.com  
**Tech:** Astro 5.x, Tailwind CSS 4, Sharp, FFmpeg, Python  
Kreative mehrsprachige Storytelling-Website (DE/EN/SK) mit Static Site Generation und Island Architecture. Image Processing Pipeline: Sharp für Crop/Resize/Optimize, AI-basiertes Image Upscaling, Responsive Images (WebP, AVIF, Multiple Sizes). Video Optimization via FFmpeg und Python Scripts. Multi-Step Build Pipeline: Astro Build → Video Optimization → Prettify → Remove Comments → Sync Export. WCAG 2.2 AA konform, Playwright E2E Tests, Facebook Campaign mit Mockup Design.

### BrauDeinBier Relaunch – Static Website

**Website:** https://braudeinbier.alex-mastny.com  
**Tech:** Astro 5.x, Sharp, Python Scripts, Vite  
Performance-optimierte Static Website mit responsiver Bildpipeline (Sharp/Manifest für WebP, AVIF). DSGVO-konformes Self-Hosting für Webfonts, SEO mit Canonical/Open Graph/Twitter Cards/LocalBusiness JSON-LD. Features: Merchandise-Shop mit interaktivem Flow und Warenkorb-Logik, Mail-Checkout-Erstellung, clientseitige Formular-Validierung. Python Scripts für Web Scraping und Content Extraction, Manual Chunking für optimierte Bundles.

### FoodTruck POS System – Clickable Prototype

**Nur für mobile Geräte** – ausschließlich Smartphone (Hochformat) oder Tablet (Querformat). Andere Formate werden nicht unterstützt.  
**Tech:** React, useState, Motion, Design Tokens  
Live-Prototyp für Tablet-basierte Kassenlösung, entwickelt in Beratungssession mit KI-Unterstützung (Google AI Studio). Features: Product Grid mit kategorisierten Menüs, Order Management mit CRUD-Operationen, Payment Modal mit mehreren Zahlungsarten (Bargeld, Karte, Rechnung). Responsive Design: Mobile Portrait (Split Layout), Landscape & Desktop. Dynamic Button Text System, State Management mit useState, Animationen via Motion. GitHub Repository mit Live Demo auf GitHub Pages.

### Antigravity HealthTracker – Mobile Health App

**Tech:** React Native, Expo SDK 54, Firebase Firestore + Auth, Zustand, AsyncStorage, i18next, Expo Localization, Supabase Storage  
Modulares Health-Tracking-System mit 6 Gesundheitsmodulen: Blutdruck, SpO2, Gewicht, Körperzusammensetzung, Metabolisch, Wellness. Modul-Toggle-System für benutzerdefinierte Aktivierung. Multi-User-Support mit Person Chooser und Profile Editor. Progress Photos mit Expo Image Picker & Manipulator, Cloud Storage via Supabase. Charts via react-native-chart-kit, Firebase Batch Operations für effiziente Datenlöschung. Dark Noble Design mit Custom Fonts (Outfit, Inter), i18next für Internationalisierung (EN/DE).

### preisschilder.at – WordPress + C# Integration

**Website:** https://preisschilder.at  
**Tech:** WordPress, PHP, C#/.NET, REST API  
Komplexe WordPress-API mit Lizenz- und Benutzerverwaltung für eLabels-System. C#-Windows-Desktop-App für automatisierten Daten-Upload mit HTTP-Client und Authentication. Backend-Integration für Barcode-Generierung und Lizenz-Management.

### monreal.at – Alpine.js Backend

**Website:** https://www.monreal.at  
**Tech:** WordPress, Alpine.js, Members-Plugin, PHP  
Individuelles Backend für Hausverwaltungsdaten mit sicherem Upload/Download-System. Benutzerspezifische Rechteverwaltung, geschützter Members-Bereich, Dateizugriff basierend auf Benutzerberechtigungen. WordPress Admin Integration für Members-Verwaltung.

### wein-label.at – WordPress + Bricks

**Website:** https://wein-label.alex-mastny.com  
**Tech:** WordPress, Bricks Builder, ACSS/Frames, Advanced Themer, Custom PHP Plugin  
Custom Theme mit ACPT-Plugin für eLabels und Barcode-Generierung. Komplexe WordPress-Entwicklung mit Custom Post Types und Meta-Fields. Integration von Barcode-Generierung für Produkt-Labels.

### The Living Portfolio – Agentic Workflow Showcase

**Live:** https://alexmvie.github.io/personal-skills-and-experiences  
**Repo:** https://github.com/alexmvie/personal-skills-and-experiences  
**Tech:** GitHub Pages, GitHub Codespaces, GitHub Copilot (Agentic Mode), Jekyll  
Dieses Projekt dient als Dokumentation meiner Skills und Experimentierfeld für Agentic Coding/Content Optimization. Das gesamte Projekt wird ausschließlich im Browser via GitHub Codespaces gepflegt, ohne lokale Entwicklungsumgebung. Implementierung: Nutzung von KI-Governance (CLAUDE.md / .windsurfrules), um Konsistenz und Korrektheit über mehrere Dateiformate und Sprachen hinweg zu erzwingen. Workflow: Ich liefere unstrukturierte Gedanken/Stichpunkte (Agentic Content Optimization), und der KI-Agent transformiert diese in strukturierte Portfolio-Inhalte. Jekyll-basierte Static Site Generation mit GitHub Pages Deployment, Multi-Format-Synchronisation (Markdown, HTML, DE/EN) und automatisierte Content-Transformation.

---

## Bildung & Zertifikate

### Full Stack JavaScript Developer – WIFI Wien (2024)

**Tech:** JavaScript, Node.js, Express.js, React.js, MongoDB, MERN-Stack, Git, CI/CD, RESTful APIs, JWT  
Erfolgreicher Abschluss der Diplom-Ausbildung. Der Schwerpunkt lag auf der Entwicklung serverseitiger Applikationen mit Node.js/Express, dem Einsatz von NoSQL-Datenbanken (MongoDB) sowie der Umsetzung dynamischer Single Page Applications mit React.js (Hooks, Router, State-Management via Redux/Zustand). Das Modul Software-Engineering umfasste zudem agile Methoden, Test Driven Development (TDD), Versionskontrolle (Git), Design Patterns (MVC) und CI/CD-Pipelines. Den Abschluss bildete die eigenständige Realisierung einer komplexen Fullstack-Webapplikation im MERN-Stack.

---

### Web Design und Producing – Werbe Akademie / WIFI Wien (2021)

**Tech:** Web Design, Producing, Grafikdesign, Marktkommunikation, Konzept, Text  
Erfolgreich abgeschlossener Diplomlehrgang. Der Fokus lag auf der professionellen Konzeption und ganzheitlichen Gestaltung von Webprojekten, inklusive Beratung, Textierung, Grafikdesign und Marktkommunikation.

---

### WIFI Software Developer – WIFI Wien (2006)

**Tech:** C++, OOP, STL, UML, Software-Engineering, Projektmanagement  
Umfassende Entwickler-Ausbildung, abgeschlossen mit sehr gutem Erfolg. Aufbau fundamentaler Programmierkonzepte mittels C++ (Objektorientierung, Templates, Algorithmen der STL). Ergänzt wurde dies durch klassisches Software-Engineering, umfassend Anforderungsanalysen, Software-Life-Cycle, Entwurfsmethoden mit UML, Prototyping und Qualitätssicherung.

---

### Flash MX Lehrgang – WIFI Wien (2004)

**Tech:** Flash MX, Multimedia-Entwicklung  
Zertifizierter Lehrgang zur professionellen Erstellung dynamischer und interaktiver Multimedia-Inhalte.

---

### Flash ActionScript – WIFI Wien (2003)

**Tech:** ActionScript  
Spezialisierungskurs für die skriptbasierte Programmierung interaktiver Web-Elemente. Zeigt frühe Erfahrungen mit objektorientierten Konzepten im Frontend.

---

### Computergrundkurs Grafik/Multimedia/Apple – BEST Training (2003)

**Tech:** Apple macOS, Grafik, Multimedia  
Grundausbildung in Grafik- und Multimedia-Anwendungen. Erfolgreicher Aufbau von Kompetenzen in digitalen Workflows, bestanden mit ausgezeichnetem Erfolg.

---

### Internet-Design und -Administration – TEAM WORK Schulungen (2002)

**Tech:** HTML, CSS, JavaScript, PHP, SQL/MySQL, Linux, Apache Webserver  
Intensivlehrgang für Web-Technologien. Aufbau eines soliden Fundaments in der Frontend- (HTML, CSS, JS) und Backend-Entwicklung (dynamische Seiten mit PHP und relationalen Datenbanken). Zusätzlich wurden wichtige Kenntnisse in der Webserver-Administration (Apache, DNS) und der sicheren Linux-Nutzung erworben.

---

### Office AdministratorIn – TEAM WORK Schulungen (2001)

**Tech:** Systemadministration, Linux, Netzwerkarchitektur, Hardware-Troubleshooting, Shell-Programmierung  
Umfangreiche IT-Infrastruktur-Ausbildung. Aufbau eines tiefen technischen Verständnisses für Hardware, Netzwerkarchitekturen (Client-Server-Modelle) sowie die sichere Systemadministration unter Linux und Windows (inkl. Firewall-, Proxy- und Rechtemanagement) – Wissen, das bis heute beim Deployment und Hosting moderner Web-Apps wertvoll ist.

---

## KI-gestützte Entwicklung

### Multi-Model Strategy & Pro-Contingent Management

Erfahrung mit Multi-LLM-Orchestrierung und strategischem Model Routing. Kern-Ansatz: Alle verfügbaren Models im Eco-System nutzen bis das kostenpflichtige PRO-Contingent erschöpft ist – was in der Praxis sehr rasch der Fall ist. Model-Rotation nach Verfügbarkeit und Effizienz-Kriterien (Preis/Leistung, Kontext-Fenster, Speed).

### Development Tools & Kontinuierliche Context Persistence

- **Antigravity** – Multi-LLM Plattform für UI/Design, nano banana für Grafiken. Multi-Model Rotation bis PRO-Contingent erschöpft, dann Fallback auf kostenlose Alternativen
- **Windsurf** – AI-native IDE mit mehreren LLM-Optionen: Claude Sonnet 4.6 für komplexen Code, GPT-5-Codex für Preis/Leistungs-Effizienz, swe-1.5 für einfache Aufgaben
- **Cline** – VS Code Extension mit verschiedenen LLMs (mimo-v2-pro als kostenlose Alternative)

### handsoff.md System – Nahtlose Übergänge zwischen Umgebungen

Zentrales Konzept für kontinuierliche Projektarbeit über Contingent-Grenzen hinweg: AI-Agents halten eine `handsoff.md` Datei ständig aktuell mit:
- **Projekt-Kontext** – Aktuelle Code-Structure, Active Tasks, Verzeichnis-Layout
- **Session State** – Letzte durchgeführte Operationen, Error-States, Zu-Erledigende Items
- **Context Checkpoints** – Wesentliche Findings, Performance-Erkenntnisse, Debugging-Notes
- **Nahtlose Übergänge** – Ermöglicht sofortiges Weitermachen mit anderer IDE/Tool wenn PRO-Contingent erschöpft

### Context Engineering

- **Projekt-spezifische Konfigurationen** – claude.md, windsurfrules, .instructions.md für konsistente AI-Ergebnisse
- **Config Versionierung** – Interne Versionierung innerhalb der Konfigurationsdateien
- **System Prompts** – Vordefinierte Kontexte für konsistente Ergebnisse über Sessions hinweg

### Quality Assurance

- **Rails/Guardrails** – Projekt-spezifische Regeln für AI-Output Validierung
- **Playwright E2E Testing** – Automatisierte Tests für AI-generierten Code
- **Manuelle Verifikation** – Persönliche Prüfung nach automatisierten Tests

### Projekt-Management

- **Feature-basierte Milestones** – Fortschritts-Tracking nach Funktionalität
- **Config Management** – Versionierung und Synchronisation über Repository

---

## Arbeitsweise

- **Remote/Homeoffice** seit 14+ Jahren – erfolgreich remote aus Wien für internationale Kunden
- **TypeScript-First** für type-safety über alle Projekte, strikte Typisierung ohne 'any'
- **Clean Architecture** mit Atomic Design (Atoms, Molecules, Organisms) und Separation of Concerns
- **Agile Methoden** mit Feature-basierten Milestones und iterativer Entwicklung
- **Testing** mit Playwright E2E Tests, Visual Regression Testing und Cross-Browser Testing
- **Code Quality** – BEM CSS Methodology, Custom Hooks für wiederverwendbare Logik, Error Boundaries
- **Documentation** – Ausführliche Code-Dokumentation und README-Dateien für alle Projekte

---

## Kontakt

**E-Mail:** alexandermastny@gmail.com  
**GitHub:** https://github.com/alexmvie  
**Standort:** Wien, Österreich

---

_Erstellt: 30.03.2026_

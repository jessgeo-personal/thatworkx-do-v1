# AEO Rendering Architecture Optimization Plan

## Objective
To improve Answer Engine Optimization (AEO) by shifting rendering responsibilities from the client to the server. This involves converting pure presentational components to Server Components and isolating interactive elements (like modal triggers) into their own dedicated Client Components.

## Background & Motivation
Currently, several major sections of the homepage (`AEOSection.tsx`, `CryptoMonkeySection.tsx`, `RPostSection.tsx`) are marked as `'use client'`, meaning their entire content is sent to the browser as JavaScript to be rendered on the client side. This is less optimal for Answer Engines (like Google AI, Perplexity, etc.) which prefer to ingest static, pre-rendered HTML. By moving the heavy content to the server and keeping only the interactive buttons on the client, we improve both AEO and page load performance.

## Key Files & Context
*   `app/components/RPostSection.tsx`
*   `app/components/AEOSection.tsx`
*   `app/components/CryptoMonkeySection.tsx`
*   New File: `app/components/AEOModalTrigger.tsx` (or similar)
*   New File: `app/components/CryptoMonkeyModalTrigger.tsx` (or similar)
*   `app/config/version.ts` (for version bump per `GEMINI.md` protocol)

## Implementation Steps

### Phase 1: Convert Pure Static Components
1.  **Refactor `RPostSection.tsx`**:
    *   Remove the `'use client'` directive.
    *   Ensure the component remains purely presentational.

### Phase 2: Decouple Interactivity from Content
2.  **Refactor `AEOSection.tsx`**:
    *   Create a new client component, e.g., `AEOModalTrigger.tsx`, containing the `ContactModal` and the button that triggers it. This file will use `'use client'` and maintain the `useState` for the modal.
    *   Remove `'use client'` from `AEOSection.tsx`.
    *   Import and use the new `AEOModalTrigger` within `AEOSection.tsx`.

3.  **Refactor `CryptoMonkeySection.tsx`**:
    *   Create a new client component, e.g., `CryptoModalTrigger.tsx`, containing the `ContactModal` and the "Get Notified" button. This file will use `'use client'` and maintain the `useState`.
    *   Remove `'use client'` from `CryptoMonkeySection.tsx`.
    *   Import and use the new `CryptoModalTrigger` within `CryptoMonkeySection.tsx`.

### Phase 3: Versioning & Testing
4.  **Version Bump**:
    *   Increment the version number in `app/config/version.ts` according to the `YYYY.MM.DD.NNN` format specified in `GEMINI.md`.
5.  **Local Build & Type Checks**:
    *   Run `npm run build` and `npx tsc --noEmit` to ensure no errors are introduced (handled by the TDD Agent persona).

## Alternatives Considered
*   **Leaving as is**: Negatively impacts AEO efforts as bots must execute JavaScript to index the content fully.
*   **Moving entire page to Server**: Not possible without losing the interactive modals for lead generation. The proposed decoupling is the optimal middle ground.

## Verification & Testing
*   Verify that `RPostSection.tsx`, `AEOSection.tsx`, and `CryptoMonkeySection.tsx` no longer contain the `'use client'` directive.
*   Verify that clicking the buttons in the AEO and CryptoMonkey sections still successfully opens the respective contact modals.
*   Confirm `npm run build` succeeds, indicating successful Server-Side Rendering of the main page content.
*   Confirm `npx tsc --noEmit` passes with 0 errors.
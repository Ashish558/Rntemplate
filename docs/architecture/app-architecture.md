# App Architecture Overview

## 1. Overview

This document defines the overall architecture of the app.

The app follows:

- Feature-based modular architecture
- Separation of concerns across layers (UI, State, Services)
- Scalable navigation and data flow patterns

---

## 2. Core Principles

- Features are isolated and self-contained
- UI layer remains dumb (no business logic)
- Hooks act as ViewModels
- API logic is abstracted via services
- Server state and client state are separated

---

## 3. High-Level Architecture

UI (Screens / Components)
↓
Hooks (ViewModels / Business Logic)
↓
State Layer

- React Query (Server State)
- Zustand (Client State)
  ↓
  Service Layer (API abstraction)
  ↓
  Backend

---

## 4. Feature Modules

Current features:

- Authentication
- Feed
- Zustand is used for global client state (auth, UI state)

Each feature contains:

- UI components
- Hooks (business logic)
- Services (API calls)
- Local state (if needed)

---

## 5. Tech Stack Decisions

- Navigation → React Navigation
- State → Zustand (client) + React Query (server)
- API → Axios
- Storage → AsyncStorage (future offline support)

---

## 6. Scalability Considerations

- Feature-based structure allows independent scaling
- Lazy loading screens
- Pagination and caching for large data

---

## 7 Data Ownership

- Server data (feed, API responses) → managed by React Query
- Client state (auth, UI flags) → managed by Zustand
- UI components do not own data, they only consume it

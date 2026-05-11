# API Layer Architecture

## 1. Overview

This document defines how API interactions are structured in the application.

The app follows a feature-based API architecture:
- Each feature owns its API logic
- A shared API client is used across all features

This ensures scalability, clear ownership, and maintainability.

---

## 2. Structure

The API layer is divided into:

### 2.1 Shared Infrastructure

services/
 ├── api.ts              (Axios instance)
 ├── storage.ts          (AsyncStorage wrapper - optional)
 ├── config.ts           (environment configs)

---

### 2.2 Feature-Level Services

features/
 ├── auth/
 │    └── services/auth.service.ts
 ├── feed/
 │    └── services/feed.service.ts
 ├── profile/
 │    └── services/profile.service.ts

Each feature manages its own API calls.

---

## 3. API Client (api.ts)

A single shared Axios instance is used across the app.

### Responsibilities:
- Base URL configuration
- Timeout setup
- Attaching authentication token (via interceptor)
- Handling common request/response logic

### Key Principle:
- No feature should create its own Axios instance

---

## 4. Feature Service Layer

Each feature defines its own service file.

### Example:

auth.service.ts
- login
- logout

feed.service.ts
- fetchFeed (pagination)
- fetchNextPage

profile.service.ts
- fetchProfile
- updateProfile

---

## 5. Responsibilities

Feature service layer is responsible for:
- Calling APIs using the shared API client
- Returning clean and structured response data

Feature services do NOT:
- Manage UI logic
- Manage global state
- Handle rendering

---

## 6. Integration with State Layer

- React Query uses feature services to fetch server data
- Hooks consume React Query and expose data to UI
- UI never directly interacts with API services

---

## 7. Error Handling

- Basic error handling handled via API client (interceptors)
- Feature-level handling done in hooks (React Query)
- UI displays appropriate feedback (toasts, fallback screens)

---

## 8. Key Principles

- Single Axios instance for the entire app
- APIs are owned by features, not globally shared
- No direct API calls from UI components
- Services remain independent of UI and state layers
- Easy to extend with new features without affecting existing ones
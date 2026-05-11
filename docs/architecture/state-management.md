# State Management Strategy

## 1. Overview

This document defines how state is managed across the application.

The app follows a hybrid state management approach:

- React Query → Server state (API data)
- Zustand → Client state (local app state)

This separation ensures scalability, performance, and maintainability.

---

## 2. State Classification

State in the app is divided into two categories:

### 2.1 Server State
Data that comes from backend APIs.

Examples:
- Feed data
- User profile

Characteristics:
- Asynchronous
- Needs caching
- Can become stale
- Shared across screens

---

### 2.2 Client State
Data that is local to the app.

Examples:
- Authentication status (isLoggedIn, token)
- UI state (modals, loaders, flags)

Characteristics:
- Synchronous
- Controlled entirely by frontend
- Does not require API calls

---

## 3. React Query (Server State Management)

React Query is used for handling all server-side data.

### Responsibilities:
- Fetching API data
- Caching responses
- Background refetching
- Pagination (infinite scroll)
- Retry on failure

### Usage in App:
- Feed data is fetched using React Query
- Pagination handled via infinite queries
- Cached data improves performance and UX

---

## 4. Zustand (Client State Management)

Zustand is used for managing global client state.

### Responsibilities:
- Authentication state
- Global UI state

### Example State:
- isAuthenticated
- authToken
- user (basic info if needed)
- UI flags (loading, modals)

### Why Zustand:
- Lightweight
- Minimal boilerplate
- Easy to scale

---

## 5. Separation of Concerns (Important)

- React Query handles ONLY server data
- Zustand handles ONLY client state

### Rules:
- Do NOT store API data in Zustand
- Do NOT duplicate server state
- Keep global state minimal

---

## 6. Example: Feed State Flow

1. Feed data is fetched via React Query  
2. Data is cached and reused  
3. UI consumes data via hooks  
4. Zustand is NOT used for feed data  

---

## 7. Example: Authentication State Flow

1. User logs in via API  
2. Token is stored in Zustand  
3. isAuthenticated flag is updated  
4. Navigation reacts to auth state  

---

## 8. Benefits

- Clear separation of concerns  
- Better performance via caching  
- Reduced unnecessary re-renders  
- Easier debugging and testing  
# Data Flow Architecture

## 1. Overview

This document defines how data flows across the application layers.

The goal is to ensure:
- Clear separation of concerns
- Predictable data movement
- Scalable and maintainable architecture

This applies to all features including Authentication and Feed.

---

## 2. Data Flow Pipeline

The application follows a unidirectional data flow:

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
Backend API

---

## 3. Data Ownership

| Data Type        | Source        | Managed By   | Notes |
|------------------|--------------|--------------|------|
| Feed Data        | API          | Tanstack Query  | Cached, paginated |
| User Profile     | API          | Tanstack Query  | Synced with backend |
| Auth State       | Local        | Zustand      | Token, login status |
| UI State         | Local        | Zustand      | Modals, loaders, flags |

---

## 4. Layer Responsibilities

### 4.1 UI Layer (Screens / Components)
- Responsible for rendering data
- Handles user interactions
- Does NOT call APIs directly
- Does NOT contain business logic

---

### 4.2 Hook Layer (ViewModels)
- Acts as a bridge between UI and data
- Fetches and prepares data for UI
- Handles loading, error, and success states
- Transforms API data into UI-friendly format

---

### 4.3 State Layer

#### React Query (Server State)
- Manages API data
- Handles caching and pagination
- Supports background refetching
- Prevents duplicate API calls

#### Zustand (Client State)
- Stores global UI and app state
- Manages authentication state
- Lightweight and minimal

---

### 4.4 Service Layer
- Contains all API calls
- Uses centralized API client (Axios)
- Handles request/response formatting
- No UI or state logic

---

## 5. Example: Feed Data Flow

1. User opens Feed screen  
2. UI calls `useFeed()` hook  
3. Hook triggers React Query  
4. React Query checks cache  
5. If cache miss → calls API via service layer  
6. Response is stored in cache  
7. UI re-renders with updated data  

---

## 6. Key Principles

- UI never directly calls APIs  
- Hooks act as the data orchestration layer  
- Server state is managed only by React Query  
- Client state is managed only by Zustand  
- Service layer is the single source for API calls  
- Data is transformed before reaching UI  

---

## 7. Benefits

- Clear separation of concerns  
- Easier debugging and testing  
- Scalable architecture for large features  
- Consistent data handling across the app  
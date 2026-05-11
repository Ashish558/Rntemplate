# Feed Feature Architecture

## 1. Overview

This document defines the architecture for the Feed feature.

The Feed is designed as a scalable, high-performance system that supports:
- Infinite scrolling
- Cursor-based pagination
- Pull-to-refresh
- Optimistic updates (like actions)
- Caching using React Query

---

## 2. Feature Structure

The Feed feature follows a modular, feature-based structure:

features/feed/
 ├── components/
 │    └── FeedCard.tsx
 │
 ├── hooks/
 │    ├── useFeed.ts
 │    └── useLikePost.ts
 │
 ├── services/
 │    └── feed.service.ts
 │
 ├── types/
 │    └── feed.types.ts

---

## 3. Data Flow

Feed follows the global data flow architecture:

UI (FeedScreen / FeedCard)
↓
Hooks (useFeed, useLikePost)
↓
React Query (Server State)
↓
Service Layer (feed.service.ts)
↓
API

---

## 4. Data Model

Each feed item contains:

- id
- content (text/image/video)
- isLiked
- metadata (optional: author, timestamp)

Feed response includes:
- data (array of posts)
- nextCursor (for pagination)

---

## 5. Pagination Strategy

### Approach: Cursor-Based Pagination

Instead of page numbers, the API returns a cursor:

Example:
{
  data: [...posts],
  nextCursor: "abc123"
}

### Implementation

- React Query `useInfiniteQuery` is used
- `getNextPageParam` extracts nextCursor
- `fetchNextPage` loads additional data

### Benefits:
- Prevents duplicate or skipped data
- Works well with dynamic feeds
- Scales efficiently

---

## 6. Infinite Scroll

Implemented using React Native FlatList:

- `onEndReached` triggers `fetchNextPage`
- `onEndReachedThreshold` controls trigger sensitivity

### Why FlatList:
- Built-in virtualization
- Efficient rendering for large lists
- Optimized scroll handling

---

## 7. Pull-to-Refresh

- Implemented using FlatList `refreshing` and `onRefresh`
- Triggers React Query `refetch`

### Behavior:
- Clears stale data
- Fetches latest feed from API

---

## 8. Caching Strategy

Managed by React Query:

- Feed data is cached in memory
- Pages are stored separately
- Avoids duplicate API calls
- Improves performance and UX

### Future Enhancement:
- Persist cache using AsyncStorage for offline support

---

## 9. Like Functionality (Optimistic Updates)

### Approach: Optimistic UI Update

When user likes a post:

1. Cache is updated immediately (UI updates instantly)
2. API request is sent in background
3. On failure → rollback to previous state

---

### Implementation Flow

FeedCard (UI)
↓
useLikePost (hook)
↓
React Query cache update
↓
API call

---

### Key Points

- No local `useState` is used for like status
- `isLiked` is part of server state
- React Query cache is the source of truth

---

## 10. Error Handling

### API Level
- Basic error handling via Axios

### Hook Level
- React Query retry mechanism
- Rollback for optimistic updates

### UI Level
- Show retry option or fallback UI

---

## 11. Performance Considerations

- FlatList used for large datasets
- Avoid unnecessary re-renders (memoized components)
- Pagination prevents large data loads
- No redundant state duplication

---

## 12. Scalability Considerations

- Cursor-based pagination supports large datasets
- Feature is isolated and modular
- Can extend to:
  - Real-time updates (WebSockets)
  - Media-heavy feeds (video optimization)
  - Offline-first behavior

---

## 13. Key Architectural Decisions

- React Query used for server state
- Zustand NOT used for feed data
- Feature-based folder structure
- API abstraction via service layer
- Optimistic updates for better UX

---

## 14. Future Improvements

- Persist feed cache for offline usage
- Add real-time updates
- Improve media loading performance
- Introduce skeleton loaders
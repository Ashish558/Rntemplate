# Navigation Architecture

1.  Overview
    This document describes the navigation architecture of the app.
    The app uses a combination of:
    Authentication stack for login flow
    Drawer navigation as the main app container
    Bottom tab navigation for primary sections
    Stack navigators within each tab for screen-level navigation
    This structure ensures scalability, separation of concerns, and maintainability.

2.  Navigation Hierarchy
    RootNavigator
    ├── AuthStack
    └── AppDrawer
    ├── MainTabs
    │ ├── HomeStack
    │ ├── FeedStack
    │ └── ProfileStack
    └── Settings

3.  Navigation Flow
    Auth Flow
    User lands on AuthStack if not authenticated
    After login → navigates to AppDrawer

    App Flow:
    Drawer acts as the top-level container
    Tabs represent primary app sections
    Each tab manages its own stack

4.  Key Design Decisions

    1. Separate Auth and App Navigation
       Keeps authentication logic isolated
       Makes logout/reset easier
    2. Drawer as Root Container
       Provides global navigation (settings, logout)
       Keeps app scalable
    3. Stack per Tab
       Enables deep navigation within each tab
       Prevents navigation conflicts
    4. Tabs for Primary Sections
       Improves UX by grouping main features
       Allows quick switching between sections

5.  TypeScript Integration
    Each navigator is strongly typed using param lists
    Ensures type-safe navigation and route params

6.  Common Navigation Patterns
    Navigate with params
    Used for detail screens (e.g. FeedDetail)
    Nested navigation
    Navigating from one tab to another stack
    Reset on logout
    Clears navigation state and returns to AuthStack

7.  Edge Cases & Considerations

    1. Deep Linking
       Ability to open specific screens (e.g. FeedDetail)
    2. Back Navigation (Android)
       Ensures proper stack behavior
       Prevents unexpected exits
    3. State Persistence
       Restore navigation state on app restart (future scope)

8.  Adding New Screens (Guidelines)
    Rule: Place screens based on scope and usage, not randomly.

    1.  Tab-specific screens → Inside that Tab’s Stack
        Example:
        Feed detail
        Comments
        Post screen
        👉 Goes in:
        FeedStack
        ├── FeedList
        └── FeedDetail

    2.  Global screens → Drawer
        Example:
        Settings
        Help
        About
        Logout
        👉 Goes in: 2.
        AppDrawer
        ├── MainTabs
        └── Settings

    3 . Auth-related screens → AuthStack

9.  TypeScript Integration
    Centralized navigation types defined in /types/navigation.ts
    Each navigator is typed using its corresponding param list
    Screens use NativeStackScreenProps for type-safe params
    Nested navigation handled using NavigatorScreenParams

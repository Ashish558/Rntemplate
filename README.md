src/
├── api/                # Server communication only
│   ├── axios.ts
│   ├── queryKeys.ts
│   └── user/
│       └── userApi.ts
│
├── hooks/              # TanStack Query hooks
│   └── queries/
│       └── user/
│           └── useGetProfile.ts
│
├── store/              # Zustand stores
│   └── useAccountStore.ts
│
├── components/         # Reusable UI components
│   ├── Typography/
│   └── Button/
│
├── screens/            # Feature screens
│
├── theme/              # Design system
│   ├── colors.ts
│   ├── fontSize.ts
│   ├── fonts.ts
│   └── spacing.ts
│
├── types/
│   ├── entities/
│   └── api/
│
└── utils/              # Pure helpers only

UI RULES:
- Use Typography for all text
- No inline fontSize values
- No raw colors

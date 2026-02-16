# Error Handling Documentation

## Overview
The Vibe Dashboard implements comprehensive error handling with user-friendly messages and actionable guidance.

---

## Error Types

### 1. Network Error (Backend Unreachable)
**Trigger**: Backend server is not running or unreachable

**Error Message**:
```
Unable to connect to the server. Please ensure the backend is running on port 5000.
```

**Visual Indicators**:
- Red icon with disconnected network symbol
- Title: "Connection Failed"
- Quick fix guide with numbered steps

**User Actions**:
- "Retry Connection" button
- Helpful checklist:
  1. Ensure backend server is running
  2. Check if port 5000 is available
  3. Verify API URL in .env.local

**Technical Details**:
```typescript
errorType: 'network'
Detected by: err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')
```

---

### 2. Search Error (404 Not Found)
**Trigger**: API endpoint not found

**Error Message**:
```
The requested resource was not found.
```

**Visual Indicators**:
- Amber icon with search symbol
- Title: "Search Error"

**User Actions**:
- "Try Again" button

**Technical Details**:
```typescript
errorType: 'search'
Detected by: err.response?.status === 404
```

---

### 3. Server Error (500+)
**Trigger**: Backend server error

**Error Message**:
```
Server error occurred. Please try again later.
```

**Visual Indicators**:
- Red icon with alert symbol
- Title: "Something went wrong"

**User Actions**:
- "Try Again" button

**Technical Details**:
```typescript
errorType: 'unknown'
Detected by: err.response?.status >= 500
```

---

### 4. Unknown Error
**Trigger**: Any other unexpected error

**Error Message**:
```
An unexpected error occurred. Please try again.
```

**Visual Indicators**:
- Red icon with alert symbol
- Title: "Something went wrong"

**User Actions**:
- "Try Again" button

**Technical Details**:
```typescript
errorType: 'unknown'
Default fallback for unhandled errors
```

---

## Empty States

### No Search Results
**Trigger**: Search query returns 0 items

**Message**:
```
No results match "[query]". Try adjusting your search terms.
```

**Visual Indicators**:
- Search icon in slate-100 background
- Title: "No items found"

**Helpful Tips**:
- Try different keywords
- Check spelling
- Use category names (Electronics, Fitness, Appliances)

---

### No Items Available
**Trigger**: Database is empty (no search query)

**Message**:
```
There are no items to display at the moment.
```

**Visual Indicators**:
- Box icon in slate-100 background
- Title: "No items available"

---

## Implementation

### Error State Management
```typescript
const [error, setError] = useState<string | null>(null);
const [errorType, setErrorType] = useState<'network' | 'search' | 'unknown'>('unknown');
```

### Error Detection Logic
```typescript
try {
  const data = await getItems(searchQuery || undefined);
  setItems(data);
} catch (err: any) {
  if (err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
    setErrorType('network');
    setError('Unable to connect to the server...');
  } else if (err.response?.status === 404) {
    setErrorType('search');
    setError('The requested resource was not found.');
  } else if (err.response?.status >= 500) {
    setErrorType('unknown');
    setError('Server error occurred. Please try again later.');
  } else {
    setErrorType('unknown');
    setError('An unexpected error occurred. Please try again.');
  }
}
```

### Retry Mechanism
```typescript
const handleRetry = () => {
  setSearchQuery('');
  setError(null);
  setErrorType('unknown');
};
```

---

## User Experience Principles

### 1. Clear Communication
- Use plain language, not technical jargon
- Explain what went wrong
- Provide actionable next steps

### 2. Visual Hierarchy
- Icon color indicates severity (red = critical, amber = warning)
- Consistent sizing and spacing
- Proper typography scale

### 3. Helpful Guidance
- Network errors show troubleshooting steps
- Search errors provide search tips
- All errors have retry buttons

### 4. Professional Design
- Refined colors (slate-based, not loud)
- Subtle animations (fade-in)
- Clean, minimal layout
- Consistent with overall design system

---

## Testing Scenarios

### Test Network Error
1. Stop backend server
2. Refresh frontend
3. Should show "Connection Failed" with troubleshooting guide

### Test Empty Search
1. Search for "xyz123nonexistent"
2. Should show "No items found" with search tips

### Test Server Error
1. Modify backend to return 500 error
2. Should show "Server error occurred"

### Test Empty Database
1. Clear all items from backend
2. Should show "No items available"

---

## Future Enhancements

### Potential Additions
- Toast notifications for transient errors
- Offline mode detection
- Automatic retry with exponential backoff
- Error logging to external service
- User feedback form on errors

### Accessibility
- ARIA labels on error icons
- Screen reader announcements
- Keyboard navigation for retry buttons
- High contrast mode support

---

This error handling system ensures users always know what's happening and how to resolve issues, maintaining a professional, helpful experience even when things go wrong.

# Minimal repro showing breaking changes in @azure/msal-node@2.6.2

To run

```bash
npm install
npm run start
```

## Expected

Expected: the same error type and message

## Actual

2.6.1

```
ClientAuthError: endpoints_resolution_error: Endpoints cannot be resolved
```

2.6.2

```
ServerError: invalid_request: 900023 - [2024-01-30 16:16:15Z]: AADSTS900023: Specified tenant identifier 'invalid-tenant-id' is neither a valid DNS name, nor a valid external domain.
```

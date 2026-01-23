# AGENTS.md - Guidelines for Agentic Coding in BIP39 Wallet

This document provides comprehensive guidelines for AI coding agents working on the BIP39 Wallet project. It covers build commands, testing procedures, and code style conventions to ensure consistency and quality.

## Project Overview

The BIP39 Wallet is an Electron-based desktop application for generating and managing BIP39 mnemonic phrases and derived cryptographic keys for various cryptocurrencies. The application uses IndexedDB for secure local storage with AES-GCM encryption.

## Build Commands

### Development
- **Start development server**: `pnpm start`
  - Launches the Electron application in development mode
  - Automatically reloads on file changes (if configured)

- **Install dependencies**: `pnpm install`
  - Installs all project dependencies using pnpm package manager
  - Must be run after cloning or when package.json changes

### Production Builds
- **Package for all platforms**: `pnpm run package`
  - Uses electron-packager to create distributable packages
  - Outputs to `dist/` directory with platform-specific builds

- **Build for Linux**: `pnpm run build`
  - Uses electron-builder to create Linux-specific packages
  - Optimized for production deployment

### Development Server (Legacy)
- **HTTP server**: `pnpm run serve`
  - Runs http-server on port 8000 for web-based testing
  - Useful for testing renderer process in browser

## Testing Commands

**Note**: This project currently lacks automated testing infrastructure. When adding tests:

- **Run all tests**: `npm test` (when implemented)
- **Run specific test file**: `npm test -- tests/specific-test.js` (when implemented)
- **Run tests with coverage**: `npm run test:coverage` (when implemented)

### Testing Guidelines
- Implement tests using Jest or similar framework
- Focus on cryptographic functions, key derivation, and UI interactions
- Test both happy path and error scenarios
- Include integration tests for IndexedDB operations
- Test mnemonic generation and validation
- Verify encryption/decryption cycles

## Code Style Guidelines

### Language and Syntax
- **JavaScript**: ES6+ features preferred (async/await, arrow functions, template literals)
- **File extensions**: `.js` for all JavaScript files
- **Module system**: CommonJS (require/module.exports) for Node.js files, ES6 modules for renderer

### Naming Conventions
- **Functions**: camelCase (e.g., `generateMnemonic`, `saveToDB`)
- **Variables**: camelCase (e.g., `encryptedBuffer`, `mnemonicPhrase`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DB_NAME`, `STORE_NAME`)
- **Classes**: PascalCase (if used)
- **Files**: kebab-case for utilities (e.g., `bip39-libs.js`), camelCase for main files (e.g., `renderer.js`)

### Code Formatting
- **Indentation**: 4 spaces (inconsistent currently - standardize to 4)
- **Line length**: Maximum 100 characters
- **Semicolons**: Required at end of statements
- **Quotes**: Single quotes for strings, double quotes for HTML attributes
- **Braces**: Same line for functions and control structures

### Imports and Dependencies
- **Node.js modules**: Use `const { destructured } = require('module')`
- **Local modules**: Use relative paths with `./` prefix
- **Import order**:
  1. Node.js built-in modules (path, crypto, etc.)
  2. Third-party libraries
  3. Local utility modules
  4. Local application modules

### Functions and Structure
- **Function length**: Keep under 50 lines when possible
- **Parameters**: Limit to 4 parameters maximum
- **Return values**: Prefer explicit returns over side effects
- **Arrow functions**: Use for anonymous functions and callbacks
- **Async functions**: Use async/await over Promise chains

### Error Handling
- **Try/catch**: Use for all async operations
- **Error messages**: Descriptive and user-friendly
- **Validation**: Validate inputs at function boundaries
- **Logging**: Use `console.error` for errors, `console.log` for info

### Security Considerations
- **Cryptographic operations**: Always use Web Crypto API for sensitive operations
- **Input validation**: Validate all user inputs, especially mnemonics and passwords
- **Memory management**: Clear sensitive data from memory when no longer needed
- **PBKDF2 iterations**: Minimum 200,000 iterations for key derivation
- **Encryption**: Use AES-GCM with 256-bit keys and proper IV handling

### DOM Manipulation
- **jQuery**: Used for DOM interactions (legacy - consider modernizing to vanilla JS)
- **Event listeners**: Use `addEventListener` for dynamic elements
- **Element selection**: Prefer `getElementById` for performance
- **Form handling**: Prevent default behavior with `event.preventDefault()`

### Database Operations (IndexedDB)
- **Transaction handling**: Always use transactions for data operations
- **Error handling**: Handle transaction failures gracefully
- **Data structure**: Store encrypted data with salt and IV
- **Key management**: Use consistent key naming conventions

### Comments and Documentation
- **Function comments**: JSDoc style for public APIs
- **Inline comments**: Explain complex logic or business rules
- **TODO comments**: Use `// TODO:` for future improvements
- **Security notes**: Comment on security-critical sections

### File Organization
- **main.js**: Electron main process only
- **renderer.js**: Browser renderer process only
- **js/**: Utility libraries and BIP39 implementations
- **css/**: Stylesheets (Bootstrap + custom)
- **Assets**: Images and icons in appropriate directories

### Code Quality Checks
- **Linting**: No linter currently configured - recommend ESLint
- **Type checking**: Consider adding JSDoc type annotations
- **Security scanning**: Regular dependency vulnerability checks
- **Code review**: All changes should be reviewed for security implications

### Git Workflow
- **Commit messages**: Clear, descriptive messages following conventional commits
- **Branch naming**: feature/, bugfix/, hotfix/ prefixes
- **Pull requests**: Required for all changes
- **Security**: Never commit secrets, private keys, or sensitive data

### Performance Considerations
- **Bundle size**: Monitor and optimize JavaScript bundle size
- **Memory usage**: Be mindful of large data structures
- **Crypto operations**: Use Web Workers for heavy computations if needed
- **UI responsiveness**: Avoid blocking operations on main thread

### Accessibility
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Screen readers**: Proper ARIA labels and semantic HTML
- **Color contrast**: Maintain adequate contrast ratios
- **Focus management**: Proper focus indicators and management

### Internationalization
- **Language support**: Multiple language wordlists supported
- **Text encoding**: Use TextEncoder/TextDecoder for proper Unicode handling
- **Locale awareness**: Consider user's locale for number/date formatting

### Maintenance
- **Dependency updates**: Regular security updates via Renovate
- **Code debt**: Address technical debt incrementally
- **Documentation**: Keep this file and README updated
- **Versioning**: Semantic versioning for releases

## Special Considerations for BIP39 Operations

- **Wordlist validation**: Always validate against official BIP39 wordlists
- **Entropy requirements**: Warn users about low-entropy mnemonics (< 12 words)
- **Key derivation**: Use proper BIP39 derivation paths
- **Cross-platform compatibility**: Test on Windows, macOS, and Linux
- **Offline operation**: Application must work without internet connectivity

## Development Environment Setup

1. Install Node.js (LTS version)
2. Install pnpm: `npm install -g pnpm`
3. Clone repository and run `pnpm install`
4. Run `pnpm start` for development

## Troubleshooting

- **Build failures**: Check Node.js and pnpm versions
- **Runtime errors**: Check console logs in Electron DevTools
- **Database issues**: Clear IndexedDB data for fresh start
- **Crypto errors**: Verify Web Crypto API support in target Electron version

---

*This document should be updated as the project evolves. Last updated: January 2026*</content>
<parameter name="filePath">/home/y/MY_PROJECTS/Wallets/bip39-wallet/AGENTS.md
# BIP39 Wallet

A BIP39 Wallet Application built with Electron.

This project is a derivative work, inspired by and built upon the original code from the repository at https://github.com/iancoleman/bip39. The application, bip39-app, serves as a wrapper around this codebase, adapting it for cross-platform use.

Use at Your Own Risk
This is experimental/beta software. It may contain bugs or cause unexpected behavior.
No warranties are provided. Use entirely at your own discretion and risk.Description

This application provides a secure wallet interface for generating and managing BIP39 mnemonic phrases and derived keys for various cryptocurrencies.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bip39-wallet
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage

### Development

To start the application in development mode:

```bash
pnpm start
```

### Packaging

To package the application for all platforms:

```bash
pnpm run package
```

### Building

To build the application for Linux:

```bash
pnpm run build
```

## Implementation

The application uses IndexedDB to securely store encrypted mnemonic phrases, salt, and initialization vector (IV).

## Technologies

- Electron
- JavaScript
- IndexedDB for local storage

## Author

Gabriel

## License

[Add license information here]

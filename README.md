# Discord QR Code Generator Bot

A Discord bot built with **Node.js** and **Discord.js** that generates QR code images from user-provided URLs using Discord slash commands. The bot generates QR codes locally using the **qrcode** npm package and sends them directly as image attachments in Discord.

---

## Features

- Generate QR codes for any valid URL
- Supports Discord Slash Commands (`/qr` and `/ping`)
- Generates QR codes locally using the `qrcode` npm package
- Customizable QR code image size
- Modular project architecture
- Environment variable management with `dotenv`

---

## Tech Stack

- **Runtime:** Node.js
- **Language:** JavaScript
- **Framework:** Discord.js
- **QR Code Generation:** qrcode (npm package)
- **Configuration:** dotenv
- **Package Manager:** npm
- **Version Control:** Git & GitHub

---

## Project Structure

```text
discord-qr-code-generator-bot/
│
├── commands/
│   ├── ping.js
│   └── qr.js
│
├── utils/
│   └── qrGenerator.js
│
├── index.js
├── deployCommands.js
├── package.json
├── .env
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/TharunaBandi/discord-qr-code-generator-bot.git

cd discord-qr-code-generator-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
QR_BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
CLIENT_ID=YOUR_DISCORD_APPLICATION_ID
GUILD_ID=YOUR_DISCORD_SERVER_ID
```

### 4. Register Slash Commands

```bash
node deployCommands.js
```

### 5. Start the Bot

```bash
npm start
```

---

## Available Commands

### `/ping`

Checks whether the bot is online.

**Example**

```text
/ping
```

**Response**

```text
Pong!
```

---

### `/qr`

Generates a QR code image for a given URL.

#### Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| `url` | URL to encode into a QR code | ✅ Yes |
| `size` | QR code image size (pixels) | ❌ Optional |

#### Example

```text
/qr
url: https://github.com
size: 300
```

The bot responds with a PNG image containing the generated QR code.

---

## How It Works

1. User enters the `/qr` slash command.
2. Discord sends the request to the bot.
3. The bot reads the provided URL and optional image size.
4. The `qrcode` npm package generates a QR code image in memory.
5. The bot sends the generated PNG image back to the Discord channel.

---

## Example Workflow

```text
User
   │
   │ /qr https://github.com
   ▼
Discord Bot
   │
   ▼
QR Code Generator (qrcode npm package)
   │
   ▼
PNG Image
   │
   ▼
Discord Channel
```

---

## Skills Demonstrated

- Discord Bot Development
- Discord Slash Commands
- Event-Driven Programming
- Asynchronous Programming (`async/await`)
- Modular Project Architecture
- Environment Variable Management (`dotenv`)
- QR Code Generation
- File Attachment Handling in Discord

---

## Future Enhancements

- QR code color customization
- Background color selection
- Logo embedding inside QR codes
- URL validation with detailed error messages
- Download support in multiple image formats

---

## Author

**Tharuna Bandi**

- GitHub: https://github.com/TharunaBandi
- Email: tharunasri15@gmail.com
